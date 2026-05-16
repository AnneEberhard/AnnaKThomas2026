// Kleine dauerhafte Einrichtung, durch "true" aktivierbar
const DEBUG = false;

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
  if (!DEBUG) return;

  ensureDebugBox();

  const box = document.getElementById("debugBox");

  box.innerHTML += `
    <div>
      <b>${label}:</b> ${JSON.stringify(data)}
    </div>
  `;
}

///// CODES START FROM HERE //////
// global variables
let browserLanguage = navigator.language || navigator.userLanguage;
let setLanguage = "de";
let currentSiteId;
let menuTitles;
let navSites;
let mainSites;
let topSites;
let allBooks;
let overview;
let personSitesHeader;
let pageData;
let siteImages = [];
let allBonusLinks;
let aboutMe;

const functionMap = {
  "/booksites/novellas.html": renderNovellas,
  "/booksites": renderBookSite,
  bonus: renderBonus,
};

/**
 * initializes all sites
 * initializes loading HTML templates
 * initializes loading general data needed for most sites
 * initializes browser language check and vias this:
 * initializes rendering content based on the respective page
 * initializes rendering shared content for all pages
 */
async function init() {
  await includeHTML();
  await loadGeneralData();
  await setTimeout(checkBrowserLanguage, 100);
  //jsonify();
}

/**
 * loads data for the global variables
 * sideImages menuTitles, navSites, mainSites, overview, pageFunctions, aboutMe
 */
async function loadGeneralData() {
  [
    siteImages,
    allBooks,
    mainSites,
    menuTitles,
    navSites,
    overview,
    pageData,
    topSites,
    aboutMe
  ] = await Promise.all([
    fetchJSON("/JSONs/general/images.json"),
    fetchJSON("/JSONs/general/allBooks.json"),
    fetchJSON("/JSONs/general/mainSites.json"),
    fetchJSON("/JSONs/general/menuTitles.json"),
    fetchJSON("/JSONs/general/navSites.json"),
    fetchJSON("/JSONs/general/overview.json"),
    fetchJSON("/JSONs/general/pageData.json"),
    fetchJSON("/JSONs/general/topSites.json"),
    fetchJSON("/JSONs/general/aboutMe.json"),
  ]);
}

/**
 * loads json data from the folder JSONs
 * @param {string} path - path to respective json
 */
async function fetchJSON(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error("Fehler beim Laden der JSON Datei:", error);
    return null; // OR: throw error;
  }
}

/**
 * checks the browser language and sets language accordingly
 * initializes rendering in the respective language
 */
async function checkBrowserLanguage() {
  if (browserLanguage.startsWith("de")) {
    german();
  } else {
    english();
  }
}

/**
 * sets  language to german as chosen by user via button
 * highlights selected language button
 */
function german() {
  setLanguage = "de";
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
  document.getElementById("de").classList.add("bold");
  document.getElementById("en").classList.remove("bold");
}

/**
 * sets  language to english as chosen by user via button
 * highlights selected language button
 */
function english() {
  setLanguage = "en";
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
  document.getElementById("en").classList.add("bold");
  document.getElementById("de").classList.remove("bold");
}

/**
 * starts the rendering of language dependent content equal for all pages - e.g. header
 */
function renderSharedContent() {
  renderSubHeaderBottom();
}


/**
 * renders the bottom part of the menu based on set language
 */
function renderSubHeaderBottom() {
  let subHeaderBottom = document.getElementById("subHeaderBottom");
  subHeaderBottom.innerHTML = "";
  if (setLanguage == "de") {
    subHeaderBottom.innerHTML = "Geschichten - Hintergründe - Bonuskapitel";
  } else {
    subHeaderBottom.innerHTML = "Stories - Backgrounds - Bonus chapter";
  }
}

/**
 * initializes rendering the the content of a respective page based on url and set language
 * uses global variable pageData (loaded at init)
 * uses global variable functionMap
 */
async function renderContentBasedOnPage() {
  let path = window.location.pathname;
  if (path === "/" || path === "/index.html") {
    renderHomePage("home");
    return;
  }
  let matchingEntry =
    pageData.mainSites.find((entry) => path.includes(entry.path)) ||
    pageData.bookSites.find((entry) => path.includes(entry.path)) ||
    pageData.bonusChapterSites.find((entry) => path.includes(entry.path));
  if (matchingEntry) {
    let renderFunction;
    if (matchingEntry.path.includes("bonus")) {
      renderFunction = functionMap["bonus"];
    } else if (matchingEntry.path.includes("imprint")) {
      renderImprint();
    } else if (matchingEntry.path.includes("privacy-policy")) {
      renderprivacyPolicy();
    } else {
      renderFunction =
        functionMap[matchingEntry.path] || functionMap["/booksites"];
    }
    if (renderFunction) {
      renderFunction(...matchingEntry.params);
    }
  }
}



/**
 * includes the HTML templates
 */
async function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      await fetch(file)
        .then((response) => response.text())
        .then((data) => {
          elmnt.innerHTML = data;
          elmnt.removeAttribute("w3-include-html");
        })
        .catch((error) => {
          console.error(`Error fetching HTML: ${error}`);
        });
    }
  }
}

/**
 * scrolls to top of the page
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// functions used by several sections

/**
 * determines names of json based on bookId
 * @param {string} reference - id for respective references such as sources
 * @param {string} id - id for respective books such as masks or for special cases such as info
 * @returns {object} respective data
 */
async function findDataById(reference, id) {
  data = await fetchJSON(`/JSONs/${reference}/${id}-${reference}.json`);
  return data;
}

/**
 * finds the index of each site in the respective JsonArrays
 * @param {Object[]} siteArray - loaded jsonArray such as navSites, mainSites
 * @param {string} siteId - id for site
 * @returns {number} index of the site in the respective array or, if not found, -1
 */
function findSiteIndexById(siteArray, siteId) {
  for (let i = 0; i < siteArray.length; i++) {
    if (siteArray[i].siteId === siteId) {
      return i;
    }
  }
  return -1;
}

/**
 * gets a subgroup out of a JsonArray based on id
 * id is compared to backgroundId of the JsonArray
 * @param {string} id - id for respective book such as mind
 * @param {Object[]} array - respective JsonArray such as Familytrees
 * @returns {Object[]} respective subgroup of the overarching JsonArray
 */
function findDataInArray(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].backgroundId === id) {
      return array[i].languages[setLanguage];
    }
  }
  return null;
}

/**
 * renders the navigation part at the bottom of each page
 * using the global variable navSites that is loaded on init
 * @param {string} siteId - id for site
 * @param {string} divId - id for div in which to render
 */
function renderNav(siteId, divId) {
  let navDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(navSites, siteId);

  if (siteIndex !== -1) {
    let site = navSites[siteIndex].languages[setLanguage];
    let templateHTML = `
      <div class="siteNav">
        <h3>Navigation</h3>
        ${site.links
          .map((link) => `<a href="${link.url}">${link.text}</a>`)
          .join("")}
      </div>`;
    navDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found in navigation data`);
  }
}


