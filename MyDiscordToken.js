// ==UserScript==

// @name               My Discord Token

// @description        Easily grab your Discord token with this script.

// @author             diligencefrozen

// @version            0128.2025

// @match              *://*.discord.com/*

// @icon               

// ==/UserScript==

(async () => {

    let token = localStorage.getItem("token").replace(/"/g, "");


    if (confirm("Would you like to grab your Discord token?")) {

        prompt("Your Discord token:", token);
    }


    token = "";
  
})();
