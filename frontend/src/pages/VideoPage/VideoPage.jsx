import React from "react";

import {Box, Typography} from "@mui/material";

export const VideoPage = () => {


        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                    <Box>
                            <Typography variant="h3" m={2} pt={3}>Нere you can watch videos about your favorite animals.</Typography>
                    </Box>
                <Box>
                        <Box alignItems="left">
                                <Typography variant="h3" m={2} pt={3}>Lion</Typography>
                        </Box>
                        <video
                            controls
                            src="https://joy.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4"
                            poster="https://placepic.ru/wp-content/uploads/2019/04/744667-male-lion-faces-wallpaper-2048x1423-for-meizu.jpg"
                            width="620">
                        </video>
                        <Box alignItems="left">
                                <Typography variant="h3" m={2} pt={3}>Cow</Typography>
                        </Box>
                        <video
                            controls
                            src="https://joy.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190416_14_MidlandsFarm_UHD_006_preview.mp4"
                            poster="https://media.krasota.ru/filer_public/82/be/82be3e04-0232-4183-9ab9-c929b90f1ae8/oblozhka.jpg"
                            width="620">
                        </video>
                        <Box alignItems="left">
                                <Typography variant="h3" m={2} pt={3}>Koala</Typography>
                        </Box>
                        <video
                            controls
                            src="https://joy.videvo.net/videvo_files/video/free/2013-04/large_watermarked/Koala1H264_preview.mp4"
                            poster="https://i1.wp.com/img-fotki.yandex.ru/get/6707/137106206.3dd/0_d825d_8b470367_orig.jpg"
                            width="620">
                        </video>
                </Box>
            </Box>
        );
}
