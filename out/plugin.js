(() => {
  // src/require_all.ts
  function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
  }

  // src/util/clientName.ts
  var clientName = "atavistaclient";

  // src/util/clog.ts
  function clog(type, msg) {
    if (type === "console" || type === "both")
      console.log(`[${clientName}] ${msg}`);
    if (type === "chat" || type === "both")
      ModAPI.displayToChat({ msg: `[${clientName}] ${msg}` });
  }

  // src/util/Hud.ts
  require_all();
  function Hud() {
    let playerFound = false;
    function checkForGame() {
      if (typeof ModAPI.player !== "undefined") {
        playerFound = true;
      } else {
        console.log("Player doesn't exist yet, please join a server or singleplayer world...");
      }
    }
    checkForGame();
    const intervalId = setInterval(() => {
      if (playerFound) {
        clearInterval(intervalId);
        clog("both", "Loading HUD");
        initializeHud();
      } else {
        checkForGame();
      }
    }, 1e3);
    function initializeHud() {
      setTimeout(async function() {
        const font = new FontFace("CustomFont", "url()");
        font.load().then((font2) => {
          document.fonts.add(font2);
          statDisplay.style.fontFamily = "CustomFont";
          BRDisplay.style.fontFamily = "CustomFont";
        });
        ModAPI.settings.hudCoords = false;
        ModAPI.settings.hudFps = false;
        ModAPI.settings.hudPlayer = false;
        ModAPI.settings.hudStats = false;
        ModAPI.settings.hudWorld = false;
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
        fpsStr.style.fontWeight = "600";
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
          cordStr.innerHTML = x + " " + y + " " + z;
        }
        setInterval(updateCords, 10);
        setInterval(updateFPS, 10);
        let hudVisible = false;
        statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
        function checkLoaded() {
          if (document.pointerLockElement != null) {
            hudVisible = true;
            statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
          } else {
            hudVisible = true;
            statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
          }
        }
        setInterval(checkLoaded, 1);
        clog("both", "HUD has succesfully loaded");
      }, 50);
    }
  }

  // src/main.ts
  ModAPI.clientBrand = clientName;
  require_all();
  clog("both", "Initializing Client");
  Hud();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3JlcXVpcmVfYWxsLnRzIiwgIi4uL3NyYy91dGlsL2NsaWVudE5hbWUudHMiLCAiLi4vc3JjL3V0aWwvY2xvZy50cyIsICIuLi9zcmMvdXRpbC9IdWQudHMiLCAiLi4vc3JjL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlX2FsbCgpe1xuICAgIE1vZEFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIE1vZEFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgICBNb2RBUEkucmVxdWlyZShcInNldHRpbmdzXCIpO1xufSIsICJleHBvcnQgdmFyIGNsaWVudE5hbWUgPSBcImF0YXZpc3RhY2xpZW50XCI7XG4vLyBsaXRlcmFyeSBqdXN0IHRoZSBhbGJ1bSBpbSBqdXN0IGxpc3RlbmluZyB0byBcImF0YXZpc3RhIGJ5IGNoaWxkaXNoIGdhbWJpbm9cIiIsICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZVwiO1xuXG4vKipcbiAqIExvZ3MgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLCBjaGF0LCBvciBib3RoLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZGVzdGluYXRpb24gZm9yIHRoZSBtZXNzYWdlICgnY29uc29sZScsICdjaGF0Jywgb3IgJ2JvdGgnKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9nKHR5cGUsIG1zZykge1xuICBpZiAodHlwZSA9PT0gXCJjb25zb2xlXCIgfHwgdHlwZSA9PT0gXCJib3RoXCIpIFxuICAgIGNvbnNvbGUubG9nKGBbJHtjbGllbnROYW1lfV0gJHttc2d9YCk7XG4gIGlmICh0eXBlID09PSBcImNoYXRcIiB8fCB0eXBlID09PSBcImJvdGhcIikgXG4gICAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoeyBtc2c6IGBbJHtjbGllbnROYW1lfV0gJHttc2d9YCB9KTtcbn1cbiIsICJpbXBvcnQgeyByZXF1aXJlX2FsbCB9IGZyb20gXCIuLi9yZXF1aXJlX2FsbFwiO1xuaW1wb3J0IHsgY2xvZyB9IGZyb20gXCIuL2Nsb2dcIjtcbnJlcXVpcmVfYWxsKClcblxuZXhwb3J0IGZ1bmN0aW9uIEh1ZCgpIHtcbmxldCBwbGF5ZXJGb3VuZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjaGVja0ZvckdhbWUoKSB7XG4gICAgaWYgKHR5cGVvZiBNb2RBUEkucGxheWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwbGF5ZXJGb3VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciBkb2VzblxcJ3QgZXhpc3QgeWV0LCBwbGVhc2Ugam9pbiBhIHNlcnZlciBvciBzaW5nbGVwbGF5ZXIgd29ybGQuLi4nKTtcbiAgICB9XG59XG5cbmNoZWNrRm9yR2FtZSgpO1xuXG5jb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJGb3VuZCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOyAvLyBTdG9wIHRoZSBpbnRlcnZhbFxuICAgICAgICBjbG9nKCdib3RoJywgJ0xvYWRpbmcgSFVEJylcbiAgICAgICAgaW5pdGlhbGl6ZUh1ZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrRm9yR2FtZSgpO1xuICAgIH1cbn0sIDEwMDApO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplSHVkKCkge1xuICAgIHNldFRpbWVvdXQoYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgZm9udCA9IG5ldyBGb250RmFjZSgnQ3VzdG9tRm9udCcsICd1cmwoKScpO1xuICAgIGZvbnQubG9hZCgpLnRoZW4oKGZvbnQpID0+IHtcbiAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmb250KTtcbiAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmZvbnRGYW1pbHkgPSAnQ3VzdG9tRm9udCc7XG4gICAgICBCUkRpc3BsYXkuc3R5bGUuZm9udEZhbWlseSA9ICdDdXN0b21Gb250JztcbiAgICB9KTtcblxuICAgICAgICBcblxuXG4gICAgICAgIE1vZEFQSS5zZXR0aW5ncy5odWRDb29yZHMgPSBmYWxzZVxuICAgICAgICBNb2RBUEkuc2V0dGluZ3MuaHVkRnBzID0gZmFsc2VcbiAgICAgICAgTW9kQVBJLnNldHRpbmdzLmh1ZFBsYXllciA9IGZhbHNlXG4gICAgICAgIE1vZEFQSS5zZXR0aW5ncy5odWRTdGF0cyA9IGZhbHNlXG4gICAgICAgIE1vZEFQSS5zZXR0aW5ncy5odWRXb3JsZCA9IGZhbHNlXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdGF0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdERpc3BsYXkpO1xuICAgICAgICBzdGF0RGlzcGxheS5pZCA9IFwic3RhdHNIVURcIjtcbiAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG4gICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnBhZGRpbmcgPSBcIjBweCAxMHB4IDBweCAxMHB4XCI7XG4gICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmhlaWdodCA9IFwiNDBweFwiO1xuICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUubGVmdCA9IFwiMTBweFwiO1xuICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XG4gICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDNweClcIjtcbiAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUuY29sb3IgPSBcInJnYigyMDMsIDIwMywgMjAzKVwiO1xuXG4gICAgICAgIGNvbnN0IEJSRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQlJEaXNwbGF5KTtcbiAgICAgICAgQlJEaXNwbGF5LmlkID0gXCJCUkRpc3BsYXlcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICBCUkRpc3BsYXkuc3R5bGUucGFkZGluZyA9IFwiMHB4IDEwcHggMHB4IDEwcHhcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG4gICAgICAgIEJSRGlzcGxheS5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZ2IoMjAzLCAyMDMsIDIwMylcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLmJvdHRvbSA9IFwiNXB4XCI7XG4gICAgICAgIEJSRGlzcGxheS5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XG4gICAgICAgIEJSRGlzcGxheS5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcbiAgICAgICAgQlJEaXNwbGF5LnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDFweClcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZwc1N0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBzdGF0RGlzcGxheS5hcHBlbmRDaGlsZChmcHNTdHIpO1xuICAgICAgICBmcHNTdHIuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcbiAgICAgICAgZnBzU3RyLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZQUygpIHtcbiAgICAgICAgICAgIGZwc1N0ci5pbm5lclRleHQgPSBcIkZQUzogXCIgKyBNb2RBUEkuZ2V0RlBTKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvcmRTdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgQlJEaXNwbGF5LmFwcGVuZENoaWxkKGNvcmRTdHIpO1xuICAgICAgICBjb3JkU3RyLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvcmRzKCkge1xuXG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTW9kQVBJLnBsYXllci5sYXN0UmVwb3J0ZWRQb3NYKTtcbiAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNb2RBUEkucGxheWVyLmxhc3RSZXBvcnRlZFBvc1kpO1xuICAgICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKE1vZEFQSS5wbGF5ZXIubGFzdFJlcG9ydGVkUG9zWik7XG5cbiAgICAgICAgICAgIGNvcmRTdHIuaW5uZXJIVE1MID0geCtcIiBcIit5K1wiIFwiK3pcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ29yZHMsIDEwKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlRlBTLCAxMCk7XG4gICAgXG4gICAgICAgIGxldCBodWRWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBodWRWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGVja0xvYWRlZCgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaHVkVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IGh1ZFZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGh1ZFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBodWRWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNldEludGVydmFsKGNoZWNrTG9hZGVkLCAxKTtcbiAgICBcbiAgICAgICAgY2xvZygnYm90aCcsICdIVUQgaGFzIHN1Y2Nlc2Z1bGx5IGxvYWRlZCcpXG5cbiAgXG5cbiAgICB9LCA1MCk7XG59XG5cbi8vIFx1MDBBN1xuXG5cbn0iLCAiLy8gSW1wb3J0c1xuaW1wb3J0IHsgcmVxdWlyZV9hbGwgfSBmcm9tIFwiLi9yZXF1aXJlX2FsbFwiO1xuaW1wb3J0IHsgY2xvZyB9IGZyb20gXCIuL3V0aWwvY2xvZ1wiO1xuaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZVwiO1xuaW1wb3J0IHsgSHVkIH0gZnJvbSBcIi4vdXRpbC9IdWRcIjtcblxuTW9kQVBJLmNsaWVudEJyYW5kID0gY2xpZW50TmFtZVxucmVxdWlyZV9hbGwoKTtcbmNsb2coXCJib3RoXCIsIFwiSW5pdGlhbGl6aW5nIENsaWVudFwiKVxuXG4vL0luaXQgTW9kdWxlcywgYW5kIHN0dWZmXG5IdWQoKTsiXSwKICAibWFwcGluZ3MiOiAiOztBQUFPLFdBQVMsY0FBYTtBQUN6QixXQUFPLFFBQVEsUUFBUTtBQUN2QixXQUFPLFFBQVEsU0FBUztBQUN4QixXQUFPLFFBQVEsVUFBVTtBQUFBLEVBQzdCOzs7QUNKTyxNQUFJLGFBQWE7OztBQ09qQixXQUFTLEtBQUssTUFBTSxLQUFLO0FBQzlCLFFBQUksU0FBUyxhQUFhLFNBQVM7QUFDakMs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
