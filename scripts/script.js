// functions used by several sections

/**
 * determines names of json based on bookId
 * @param {string} reference - id for respective references such as sources
 * @param {string} id - id for respective books such as masks or for special cases such as info
 * @returns {object} respective data
 */
async function findDataById(reference, id) {
  data = await fetchJSON(`/JSONs/${reference}/${reference}-${id}.json`);
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
 * checks if a translation is true, progress or planned and genereates respective div with text
 * @param {string} translationExists - information for the respective book out of topSites json
 * @param {string} setLanguage - global variable that is checked depending on browser and user input
 * @returns {HTMLElement} respective HTML
 */
function getTranslationStatusText(translationExists, setLanguage) {
  if (translationExists === "true") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist vorhanden.</p>"
      : "<p>An English translation is available.</p>";
  } else if (translationExists === "progress") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist in Arbeit.</p>"
      : "<p>A translation into English is in progress.</p>";
  } else if (translationExists === "planned") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist geplant.</p>"
      : "<p>A translation into English is planned.</p>";
  } else {
    return setLanguage === "de"
      ? "<p>Bis jetzt ist keine Übersetzung ins Englische verfügbar.</p>"
      : "<p>There is no English translation available yet.</p>";
  }
}

/**
 * checks if a translation is true, progress or planned and genereates respective div with text
 * @param {string} translationExists - information for the respective book out of topSites json
 * @param {string} setLanguage - global variable that is checked depending on browser and user input
 * @returns {HTMLElement} respective HTML
 */
function getTranslationStatusText(translationExists, setLanguage) {
  if (translationExists === "true") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist vorhanden.</p>"
      : "<p>An English translation is available.</p>";
  } else if (translationExists === "progress") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist in Arbeit.</p>"
      : "<p>A translation into English is in progress.</p>";
  } else if (translationExists === "planned") {
    return setLanguage === "de"
      ? "<p>Eine Übersetzung ins Englische ist geplant.</p>"
      : "<p>A translation into English is planned.</p>";
  } else {
    return setLanguage === "de"
      ? "<p>Bis jetzt ist keine Übersetzung ins Englische verfügbar.</p>"
      : "<p>There is no English translation available yet.</p>";
  }
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

/**
 * scrolls to top of the page
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * opens the mobile menu
 */
function showMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.remove("dNone");
}

/**
 * closes the mobile menu
 */
function closeMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.add("dNone");
}

// functions for main sites

/**
 * initializes the rendering of all pages on the root level except for about me
 * is called from global variable functionMap
 * using the global variable mainSites that is loaded on init
 * initializes rendering the nav on root level
 * @param {string} siteId - id for site
 */
function renderMainSite(siteId) {
  currentGenre = siteId;
  let divId = siteId + "Top";
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(mainSites, siteId);
  if (siteIndex !== -1) {
    let site = mainSites[siteIndex].languages[setLanguage];
    let templateHTML =
      generateSiteTitle(site.title) + generateSiteParagraphs(site.paragraphs);
    for (let section of site.sections) {
      templateHTML += generateSection(section);
    }
    topDiv.innerHTML = templateHTML;
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
  renderNav("general", `${siteId}Nav`);
}

/**
 * generates the site title based on set language
 * @param {string} title - respective title for site
 */
function generateSiteTitle(title) {
  return `<h2>${title}</h2>`;
}

/**
 * generates the site paragraphs based on set language
 * @param {Array} paragraphs - array filled with strings
 */
function generateSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")}</div>`;
}

/**
 * generates the lower section on a main site based on set language
 * @param {Object[]} sections - JSONArray filled with info such as books and links
 */
function generateSection(section) {
  return `
    <h3>${section.subtitle}</h3>
    <div class="sectionParagraphs">
      ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <div class="siteNavTop">
      ${section.links
        .map(
          (link) =>
            `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`
        )
        .join("")}
    </div>`;
}

// functions for book sites

/**
 * initializes the rendering of a book/series overview site
 * is called from global variable functionMap
 * params stem from pageData
 * initializes rendering the nav on booksite level
 * @param {string} genre - important for menu highlight
 * @param {string} id - id of book or series - do not confuse with single bookId
 * @param {boolean} seriesExists - depending on whether it is more than one book
 */
function renderBookSite(genre, id, seriesExists) {
  currentGenre = genre;
  if (seriesExists == true) {
    data = collectBooksOfSeries(genre, id);
    bookId = data[0].bookId;
  } else {
    data = findBookById(genre, id);
    bookId = id;
  }
  if (!data) {
    console.log(`Unknown book: ${id}`);
    return;
  }
  if (setLanguage == "en" && id == "elves") {
    renderSeriesInSeries(data, `${id}Bottom`);
  } else {
    renderBookDetails(data, `${id}Bottom`);
  }
  renderBookSiteTop(id, `${id}Top`);
  renderNav(id, `${id}Nav`);
}

/**
 * collects all books of a series in a new JSONArray
 * uses global variable allBooks that is loaded on init
 * @param {string} targetGenre - respective genre
 * @param {string} targetSeries - id of series such as children
 * @returns {Object[]} seriesArray is returned if the length is > 0
 */
function collectBooksOfSeries(targetGenre, targetSeries) {
  let seriesArray = [];
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      for (let j = 0; j < allBooks[i].books.length; j++) {
        if (allBooks[i].books[j].seriesId === targetSeries) {
          let seriesBook = allBooks[i].books[j];
          seriesArray.push(seriesBook);
        }
      }
    }
  }
  return seriesArray.length > 0 ? seriesArray : null;
}

/**
 * finds the book based on its bookId (for books that are not part of a series)
 * uses global variable allBooks that is loaded on init
 * @param {string} targetGenre - respective genre
 * @param {string} targetBook - id of book such as mind
 * @returns {Object[]} JSONArray with respective book info
 */
function findBookById(targetGenre, targetBook) {
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      for (let j = 0; j < allBooks[i].books.length; j++)
        if (allBooks[i].books[j].bookId === targetBook) {
          return allBooks[i].books[j];
        }
    }
  }
  return null;
}

/**
 * renders the top site of the book site
 * uses global variable topSites that is loaded on init
 * @param {string} siteId - id of book / series and thus the site
 * @param {string} divId - id of the div into which is rendered
 */
function renderBookSiteTop(siteId, divId) {
  let topDiv = document.getElementById(divId);
  let siteIndex = findSiteIndexById(topSites, siteId);

  if (siteIndex !== -1) {
    let site = topSites[siteIndex].languages[setLanguage];
    let translationExists = topSites[siteIndex].translationExists;
    topDiv.innerHTML =
      generateBookSiteTitle(site.title) +
      generateBookSiteParagraphs(site.paragraphs) +
      getTranslationStatusText(translationExists, setLanguage) +
      generateBookSiteNavTop(site.links);
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

/**
 * generates the site title/header
 * @param {string} title - id of book / series and thus the site
 * @returns {HTMLElement} header for the booksite
 */
function generateBookSiteTitle(title) {
  return `<h2>${title}</h2>`;
}

/**
 * generates the upper paragraphs of the site
 * @param {Array} paragraphs - respective array filled with strings
 * @returns {HTMLElement} header for the booksite
 */
function generateBookSiteParagraphs(paragraphs) {
  return `<div class="siteParagraphs">${paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("")}</div>`;
}

/**
 * generates the upper navigation of the site, leading to subsites
 * @param {Object[]} links - JSONArray with links and linktext
 * @returns {HTMLElement} upper navigation
 */
function generateBookSiteNavTop(links) {
  return `<div class="siteNavTop">${links
    .map(
      (link) => `<a class="siteNavTopLink" href="${link.url}">${link.text}</a>`
    )
    .join("")}</div>`;
}

/**
 * renders the content for each book of a series whose book count is higher than in the other language
 * e.g. first book of the "Of Elves and Wolves" series in German equals four books in the translation
 * @param {Object[]} bookData - JSONArray of the series (array of jsons)
 * @param {string} divId - id of the div into which is rendered
 */
function renderSeriesInSeries(seriesData, divId) {
  let bottomDiv = document.getElementById(divId);
  let templateHTML = "";
  for (let i = 0; i < seriesData.length; i++) {
    let bookEnglishArray = seriesData[i].languages[setLanguage];
    for (let seriesEnglishBook of bookEnglishArray) {
      templateHTML += generateBookDetailsTemplate(seriesEnglishBook);
    }
    bottomDiv.innerHTML = templateHTML;
  }
}

/**
 * renders the content for each book with image, text and links
 * depending on whether the book is a series or a standalone
 * @param {Object[]} bookData - JSONArray of either one book (Json) or one series (array of jsons)
 * @param {string} divId - id of the div into which is rendered
 */
function renderBookDetails(bookData, divId) {
  let bottomDiv = document.getElementById(divId);
  let templateHTML = "";
  if (bookData.length > 0) {
    let seriesBooks = bookData.filter(
      (b) => b.seriesId === bookData[0].seriesId
    );
    for (let seriesBook of seriesBooks) {
      templateHTML += generateBookDetailsTemplate(
        seriesBook.languages[setLanguage]
      );
    }
  } else {
    let book = bookData.languages[setLanguage];
    templateHTML = generateBookDetailsTemplate(book);
  }
  bottomDiv.innerHTML = templateHTML;
}

/**
 * generates the content for each book with image, text and links
 * @param {Object[]} book - JSONArray of the respective book in the correct language (ultimately from allBooks)
 * @returns {HTMLElement} book content
 */
function generateBookDetailsTemplate(book) {
  let paragraphsHTML = book.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
    const secondLinkHTML = book.externalLink2 
    ? `<a target="_blank" class="amazonLink" href="${book.externalLink2}">${setLanguage === "de" ? "Link zu anderen Händlern" : "Link to other shops"}</a>` 
    : "";
  if (setLanguage === "de") {
    return `<div class="bookContainer">
      <img class="cover" src="${book.imageURL}" alt="">
      <div class="bookContainerText">
        <h3>${book.title}</h3> 
        ${paragraphsHTML}
        <a target="_blank" class="amazonLink" href="${book.externalLink}">Link zu Amazon</a>
         ${secondLinkHTML}
        </div>
    </div>`;
  } else {
    return `<div class="bookContainer">
      <img class="cover" src="${book.imageURL}" alt="">
      <div class="bookContainerText">
        <h3>${book.title}</h3> 
        ${paragraphsHTML}
        <a target="_blank" class="amazonLink" href="${book.externalLink}">Link to Amazon</a>
         ${secondLinkHTML}
      </div>
    </div>`;
  }
  return;
}

// functions currently not in use

/**
 * collects all books of a genre in a new JSONArray
 * uses global variable allBooks that is loaded on init
 * currently not in use
 * @param {string} targetGenre - respective genre
 * @returns {Object[]} allBooks[i].books with the target genre
 */
function collectBooksOfGenre(targetGenre) {
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].genre === targetGenre) {
      return allBooks[i].books;
    }
  }
  return null;
}

function findBookIndexById(bookArray, bookId) {
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].bookId === bookId) {
      return i;
    }
  }
  return -1;
}
