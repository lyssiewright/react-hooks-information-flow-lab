import React, { useState } from "react";

function Header({isDarkMode, onDarkModeClick}){
    function handleClick(){
        onDarkModeClick()
    }

    return(
        <button onClick={handleClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
    )
}

export default Header;