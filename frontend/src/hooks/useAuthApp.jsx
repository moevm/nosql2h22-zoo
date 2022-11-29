import React from "react";
import { AuthContext } from "../providers";

export const useAuthApp = () => {
    return React.useContext(AuthContext);
}
