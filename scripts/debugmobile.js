

//Work around for mobile life info // AT TOP OF MAIN SCRIPT

function ensureDebugBox() {
  if (document.getElementById("debugBox")) return;

  const box = document.createElement("div");
  box.id = "debugBox";

  Object.assign(box.style, {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    maxHeight: "200px",
    overflow: "auto",
    background: "black",
    color: "lime",
    fontSize: "10px",
    zIndex: "999999",
    padding: "5px"
  });

  document.body.appendChild(box);
}

function debugLog(label, data = "") {
  ensureDebugBox();

  const box = document.getElementById("debugBox");

  const msg =
    typeof data === "object"
      ? JSON.stringify(data)
      : String(data);

  box.innerHTML += `<div><b>${label}:</b> ${msg}</div>`;
}

// Interspersed with js code as "console output"
   debugLog("renderPersonage called", id);
     debugLog("header loaded", !!personSitesHeader);
         debugLog("siteId", siteId);

    debugLog("topDiv exists", !!topDiv);
  debugLog("bottomDiv exists", !!bottomDiv);
      debugLog("persons loaded", Array.isArray(personageObject));
       if (!bottomDiv) {
      debugLog("BOTTOM DIV MISSING", siteId + "Bottom");
      return;
    }
          debugLog("render complete");