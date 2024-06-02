import { require_all } from "../require_all";
import { clog } from "./clog";
require_all()

export function Hud() {
let playerFound = false;

function checkForGame() {
    if (typeof ModAPI.player !== 'undefined') {
        playerFound = true;
    } else {
        console.log('Player doesn\'t exist yet, please join a server or singleplayer world...');
    }
}

checkForGame();

const intervalId = setInterval(() => {
    if (playerFound) {
        clearInterval(intervalId); // Stop the interval
        clog('both', 'Loading HUD')
        initializeHud();
    } else {
        checkForGame();
    }
}, 1000);

function initializeHud() {
    setTimeout(async function () {

    const font = new FontFace('CustomFont', 'url()');
    font.load().then((font) => {
      document.fonts.add(font);
      statDisplay.style.fontFamily = 'CustomFont';
      BRDisplay.style.fontFamily = 'CustomFont';
    });

        


        ModAPI.settings.hudCoords = false
        ModAPI.settings.hudFps = false
        ModAPI.settings.hudPlayer = false
        ModAPI.settings.hudStats = false
        ModAPI.settings.hudWorld = false
        
        const statDisplay = document.createElement("div");
        document.body.appendChild(statDisplay);
        statDisplay.id = "statsHUD";
        statDisplay.style.position = "fixed";
        statDisplay.style.width = "auto";
        statDisplay.style.padding = "0px 10px 0px 10px";
        statDisplay.style.height = "40px";
        statDisplay.style.top = "10px";
        statDisplay.style.left = "10px";
        statDisplay.style.background = "rgba(0, 0, 0, 0.7)";
        statDisplay.style.zIndex = "1000";
        statDisplay.style.backdropFilter = "blur(3px)";
        statDisplay.style.color = "rgb(203, 203, 203)";

        const BRDisplay = document.createElement("div");
        document.body.appendChild(BRDisplay);
        BRDisplay.id = "BRDisplay";
        BRDisplay.style.position = "fixed";
        BRDisplay.style.padding = "0px 10px 0px 10px";
        BRDisplay.style.width = "auto";
        BRDisplay.style.height = "40px";
        BRDisplay.style.color = "rgb(203, 203, 203)";
        BRDisplay.style.fontWeight = "bold";
        BRDisplay.style.bottom = "5px";
        BRDisplay.style.right = "5px";
        BRDisplay.style.zIndex = "1000";
        BRDisplay.style.backdropFilter = "blur(1px)";
        
        const fpsStr = document.createElement("p");
        statDisplay.appendChild(fpsStr);
        fpsStr.style.fontSize = "14px";
        fpsStr.style.fontWeight = "600"
        function updateFPS() {
            fpsStr.innerText = "FPS: " + ModAPI.getFPS();
        }
        
        const cordStr = document.createElement("p");
        BRDisplay.appendChild(cordStr);
        cordStr.style.fontSize = "14px";
        function updateCords() {

            let x = Math.floor(ModAPI.player.lastReportedPosX);
            let y = Math.floor(ModAPI.player.lastReportedPosY);
            let z = Math.floor(ModAPI.player.lastReportedPosZ);

            cordStr.innerHTML = x+" "+y+" "+z
        }
        
        setInterval(updateCords, 10);
        setInterval(updateFPS, 10);
    
        let hudVisible = false;
        statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
    
        function checkLoaded() {
            if (document.pointerLockElement != null){
                hudVisible = true;
                statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
            } else {
                hudVisible = true;
                statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
            }
        }
    
        setInterval(checkLoaded, 1);
    
        clog('both', 'HUD has succesfully loaded')

  

    }, 50);
}

// §


}