// global variables
let browserLanguage = navigator.language || navigator.userLanguage;
let setLanguage = "de";
let currentSiteId;
let currentGenre;
let menuTitles;
let navSites;
let mainSites;
let topSites;
let allBooks;
let overview;
let personSitesHeader;
let pageData;
let siteImages = []
let allBonusLinks;

const functionMap = {
  "/booksites/novellas.html": renderNovellas,
  "/booksites": renderBookSite,
  bonus: renderBonus,
};

/**
 * initializes all sites
 * initializes loading HTML templates
 * initializes loading general data needed for most sites
 * initializes browser language check
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
 * menuTitles, navSites, mainSites, overview, pageFunctions
 */
async function loadGeneralData() {
  siteImages = await fetchJSON("/JSONs/general/images.json");
  allBooks = await fetchJSON("/JSONs/general/allBooks.json");
  mainSites = await fetchJSON("/JSONs/general/mainSites.json");
  menuTitles = await fetchJSON("/JSONs/general/menuTitles.json");
  navSites = await fetchJSON("/JSONs/general/navSites.json");
  overview = await fetchJSON("/JSONs/general/overview.json");
  pageData = await fetchJSON("/JSONs/general/pageData.json");
  topSites = await fetchJSON("/JSONs/general/topSites.json");

;}

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
 */
function english() {
  setLanguage = "en";
  renderContentBasedOnPage(); //CAVE First because of genre/site identification
  renderSharedContent();
  document.getElementById("en").classList.add("bold");
  document.getElementById("de").classList.remove("bold");
}

/**
 * starts the rendering of content equal for all pages - e.g. header
 */
function renderSharedContent() {
  renderSubHeaderBottom();
}

/**
 * loads json data from the folder jsons
 * @param {string} path - path to respective json
 */
async function fetchJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Laden der JSON Datei:", error);
  }
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
    pageData.bookSites.find((entry) => path.includes(entry.path))  ||
    pageData.bonusChapterSites.find((entry) => path.includes(entry.path));
  if (matchingEntry) {
    let renderFunction;
    if (matchingEntry.path.includes("bonus")) {
      renderFunction = functionMap["bonus"];
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
