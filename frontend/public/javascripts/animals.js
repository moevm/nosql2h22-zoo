let xhr = null;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object
        xhr = new XMLHttpRequest();
    }
    return xhr;
};
function dataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("User data received!");
        getDate();
        dataDiv = document.getElementById('result-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}
function getUsers() {
    console.log("Get users...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    // asynchronous requests
    xhr.open("GET", "http://localhost:5000/users", true);
    // Send the request over the network
    xhr.send(null);
}
function getDate() {
    date = new Date().toString();

    document.getElementById('time-container').textContent
        = date;
}

function sendDataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Data creation response received!");
        getDate();
        dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function appendAnimal() {
    moniker = document.getElementById('newN').value;
    kind = document.getElementById('newK').value;
    gender = document.getElementById('newG').value;
    aviary = document.getElementById('newV').value;
    if (!moniker & !kind & !gender & !aviary) {
        console.log("Data is empty.");
        return;
    }
    console.log("Sending data: " + moniker + kind + gender + aviary);
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallback;
    // asynchronous requests
    xhr.open("POST", "http://localhost:5000/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network
    xhr.send(JSON.stringify({ "Name": moniker, "Kind": kind, "Gender": gender, "Aviary": aviary }));
}
(function () {
    getDate();
})();
