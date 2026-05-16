// functions for special site novellas

/**
 * initializes rendering the novella page
 * @param {string} id - in this case novellas = id
 */
function renderNovellas(id) {
  let topDivId = id + "Top";
  let bottomDivID = id + "Bottom";
  let data = collectBooksOfSeries(id, id);
  renderBookDetails(data, bottomDivID);
  renderNav("novellas", `novellasNav`);
}

// functions for personages sections

/**
 * initializes rendering of personage sections
 * loads data for personSitesHeader (global variable)
 * loads data for personage
 * @param {string} id - id of series of book such as masks
 */
async function renderPersonage(id) {
  personSitesHeader = await fetchJSON("/JSONs/persons/personSitesHeader.json");

  let personsUrl = `/JSONs/persons/${id}-persons.json`;
  let siteId = id + "Persons";
  const topDiv = document.getElementById(siteId + "Top");
  const bottomDiv = document.getElementById(siteId + "Bottom");

  fetchJSON(personsUrl).then((personageObject) => {
    if (!Array.isArray(personageObject)) {
      console.error("Invalid data", personageObject);
      return;
    }
    topDiv.innerHTML = generatePersonageTopHTML(siteId);
    bottomDiv.innerHTML = generatePersonAllTemplate(siteId, personageObject);
  });
}

/**
 * renders top part of personage sections
 * @param {string} siteId- id for subsection such as masksPersons
 */
function generatePersonageTopHTML(siteId) {
  let siteIndex = personSitesHeader.findIndex((site) => site.id === siteId);
  let template = "";
  if (siteIndex !== -1) {
    let site = personSitesHeader[siteIndex].languages[setLanguage];
    template += `<h2>${site.header}</h2>`;
    for (let paragraph of site.paragraphs) {
      template += `<p>${paragraph}</p>`;
    }
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
  return template;
}

/**
 * generates the overall template bottom part of personage sections
 * @param {string} siteId - id for subsite such as masksPersons
 * @param {Object[]} personageObject - loaded JSON
 * @returns html template
 */
function generatePersonAllTemplate(siteId, personageObject) {
  let templateHTML = "";
  for (let i = 0; i < personageObject.length; i++) {
    templateHTML += generatePersonTableTemplate(siteId, personageObject[i]);
    templateHTML += `
      </table>
    </div> </details>`;
  }
  return templateHTML;
}

/**
 * generates the table in of bottom part of personage sections
 * @param {string} siteId - id for subsite such as masksPersons
 * @param {Object[]} personGroup - subgroup of loaded JSON
 * @returns html template
 */
function generatePersonTableTemplate(siteId, personGroup) {
  let subHeaderId = siteId + personGroup.groupId;
  let templateHTML = `
  
    <h3 class="personGroup" id="${subHeaderId}">
      ${personGroup[setLanguage]} </h3>
      <details class="table-box">
        <summary>show</summary>
        <div class="table-wrapper">
          <table class="contentTable">
            <tr>
              <th class="personageName">Name</th>
              <th>${setLanguage === "de" ? "Beschreibung" : "Description"}</th>
            </tr>`;

  for (let member of personGroup.members) {
    templateHTML += `
        <tr>
          <td class="personageName">${member.name}</td>
          <td>${member[setLanguage]}</td>
        </tr>`;
  }
  return templateHTML;
}

// functions for for background sections

/**
 * initializes rendering of the background sections
 * determines the following functions based on bookId
 * initializes rendering the bottom nav based on global variable navSites and bookId
 * @param {string} bookId - id for respective books such as masks
 */
function renderBackground(bookId) {
  renderBackgroundContent(bookId);
}

/**
 * renders of the top of background sections
 * @param {string} bookId - id for respective books such as masks
 */
async function renderBackgroundContent(bookId) {
  let divId = bookId + "BackgroundTop";
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = "";
  topDiv.innerHTML = await generateBackgroundContent(bookId);
}

/**
 * generate content for top of background page after loading content from json file
 * @param {string} bookId - id for respective books such as masks
 * @returns {HTMLElement} html template
 */
async function generateBackgroundContent(bookId) {
  let backgroundInfoArray = await findDataById("background", "info");
  let backgroundInfo = await findDataInArray(bookId, backgroundInfoArray);
  let templateHTML = `<h2 class="personGroup">${backgroundInfo.headline}</h2>`;
  templateHTML += `<h3 class="personGroup">${backgroundInfo.subheader}</h3>`;
  for (let paragraph of backgroundInfo.paragraphs) {
    templateHTML += `<p>${paragraph}</p>`;
  }
  return templateHTML;
}

// functions for picture sites such as family trees

/**
 * initializes rendering of the family trees sections
 * determines the following functions based on bookId
 * initializes rendering the bottom nav based on global variable navSites and bookId
 * @param {string} id - id for respective books such as masks
 */
function renderFamilyTrees(id) {
  renderFamilyTreeContent(id);
}

/**
 * renders of the family tree sections
 * @param {string} bookId - id for respective books such as masks
 */
async function renderFamilyTreeContent(bookId) {
  let divId = bookId + "FamilyTreeTop";
  let topDiv = document.getElementById(divId);
  topDiv.innerHTML = "";
  topDiv.innerHTML = await generateFamilyTreeContent(bookId);
}

/**
 * generates content for the family tree page after loading content from json file
 * @param {string} bookId - id for respective books such as masks
 * @returns {HTMLElement} html template
 */
async function generateFamilyTreeContent(bookId) {
  let familyTree = await findDataById("familyTree", "info");
  let familyTreeGroup = findDataInArray(bookId, familyTree);
  let templateHTML = `<h2 class="personGroup">${familyTreeGroup.headline}</h2>`;
  templateHTML += `<p>${familyTreeGroup.subheader}</p>`;
  for (let i = 0; i < familyTreeGroup.images.length; i++) {
    templateHTML += `<div class="pictureContainer"><h3 class="pictureHeader">${familyTreeGroup.images[i].subheaderImages}</h3>
   <img class="treePicture" src="${familyTreeGroup.images[i].imageUrl}"></div>`;
  }
  return templateHTML;
}

// functions for sites with glossaries and/or sources

/**
 * initializes rendering of the source and glossary sections
 * determines the following functions based on bookId
 * @param {string} bookId - id for respective books such as masks
 */
function renderSourcesSite(bookId) {
  currentSiteId = bookId + "Sources";
  const booksWithGlossaries = ["odyssey", "masks", "counts"];
  const booksWithSources = ["odyssey", "masks", "alster", "mind"];
  const booksWithSpecialSource = ["children", "counts"];
  const booksWithSpecialGlossary = ["time"];
  const booksWithMapsAndSources = ["frida"];
  const booksWithMapsLinks = ["counts"];
  if (booksWithGlossaries.includes(bookId)) {
    renderGlossary(bookId, "norm");
  }
  if (booksWithSpecialGlossary.includes(bookId)) {
    renderGlossary(bookId, "special");
  }
  if (booksWithSources.includes(bookId)) {
    renderSources(bookId);
  }
  if (booksWithSpecialSource.includes(bookId)) {
    renderSpecialSources(bookId);
  }
  if (booksWithMapsAndSources.includes(bookId)) {
    renderMapsAndSources(bookId);
  }
  if (booksWithMapsLinks.includes(bookId)) {
    renderMapLinks(bookId);
  }
}

/**
 * Renders the map section and the source section for a given book.
 * @param {string} bookId - Identifier of the book used to locate the corresponding DOM elements and data.
 */
async function renderMapsAndSources(bookId) {
  renderMaps(bookId);
  renderSources(bookId);
}

// functions for maps

/**
 * Loads map data for a book and renders a title and image into the corresponding DOM container.
 * @param {string} bookId - Identifier of the book used to retrieve map data and target element.
 */
async function renderMaps(bookId) {
  let sourceData = await findDataById("maps", bookId);
  let divId = bookId + "Maps";
  let targetDiv = document.getElementById(divId);
  for (item of sourceData) {
    let title = item.title[setLanguage];
    let imgSrc = item.links[setLanguage];
    let template = `
    <h2>${title}</h2>
    <div class="maps">
    <img class="map" src="${imgSrc}" alt="${title}">
    </div>
  `;
    targetDiv.innerHTML += template;
  }
}

//function for mapLinks

/**
 * renders of links for maps
 * first fetches data out of respective json
 * @param {string} bookId - id for respective books such as masks
 */
async function renderMapLinks(bookId) {
  let sourceData = await findDataById("maps", bookId);
  let divId = bookId + "Maps";
  let targetDiv = document.getElementById(divId);
  let title = sourceData[setLanguage].header;
  let langLinks = sourceData[setLanguage].links;
  targetDiv.innerHTML = `<h2>${title}</h2>`;
  for (item of langLinks) {
    let link = item.link;
    let linktext = item.linktext;
    let template = `
    <a target="_blank" rel="noopener noreferrer" href="${item.link}"> ${item.linktext}</a><br>
  `;
    targetDiv.innerHTML += template;
  }
}

// functions for glossary tables

/**
 * initializes rendering of the glossary
 * @param {string} bookId - id for respective books such as masks
 * @param {string} mode - whether normal (name is the same) or special (name changes with language)
 */
async function renderGlossary(bookId, mode) {
  let glossary = await findDataById("glossary", bookId);
  let divId = bookId + "Glossary";
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = "";
  targetDiv.innerHTML = generateGlossaryTemplate(glossary, mode);
}

/**
 * renders overall template for glossary
 * @param {Object[]} glossary - respective glossary
 * @param {string} mode - whether normal (name is the same) or special (name changes with language)
 * @returns {HTMLElement} html template
 */
function generateGlossaryTemplate(glossary, mode) {
  let templateHTML = generateGlossaryHeader();
  if (mode == "norm") {
    templateHTML += generateGlossaryTable(glossary);
  }
  if (mode == "special") {
    templateHTML += generateSpecialGlossaryTable(glossary);
  }
  return templateHTML;
}

/**
 * renders header for glossary based on set language
 * @returns {HTMLElement} html template
 */
function generateGlossaryHeader() {
  let templateHTML = "";
  let headline;
  if ((bookId == "counts") & (setLanguage == "de")) {
    headline = "Adelstitel";
  } else if ((bookId == "counts") & (setLanguage == "en")) {
    headline = "Aristocratic titles";
  } else if (setLanguage == "de") {
    headline = "Begriffsverzeichnis";
  } else {
    headline = "Glossary";
  }
  templateHTML = /*html*/ `
  <h2>${headline}</h2>`;
  return templateHTML;
}

/**
 * renders table glossary based on set language
 * @param {Object[]} glossary - respective glossary
 * @returns {HTMLElement} html template
 */
function generateGlossaryTable(glossary) {
  let templateHTML = `
  <details class="table-box">
            <summary>show</summary>
            <div class="table-wrapper">
    <table class="contentTable">
      <tr>
        <th class="personageName">Name</th>
        <th>${setLanguage === "de" ? "Beschreibung" : "Description"}</th>
      </tr>`;
  for (let term of glossary) {
    templateHTML += `
      <tr>
        <td class="personageName">${term.name}</td> 
        <td>${term[setLanguage]}</td>
      </tr>`;
  }
  templateHTML += `</table></div>
          </details>`;
  return templateHTML;
}

/**
 * renders table glossary based on set language
 * @param {Object[]} glossary - respective glossary
 * @returns {HTMLElement} html template
 */
function generateSpecialGlossaryTable(glossary) {
  let templateHTML = `
  <details class="table-box">
            <summary>show</summary>
            <div class="table-wrapper">
    <table class="contentTable">
      <tr>
        <th class="personageName">Name</th>
        <th>${setLanguage === "de" ? "Beschreibung" : "Description"}</th>
      </tr>`;
  for (let term of glossary) {
    templateHTML += `
      <tr>
        <td class="personageName">${term.name[setLanguage]}</td> 
        <td>${term.description[setLanguage]}</td>
      </tr>`;
  }
  templateHTML += `</table></div>
          </details>`;
  return templateHTML;
}

// functions for sources paragraphs

/**
 * initializes rendering of the sources
 * @param {string} bookId - id for respective books such as masks
 */
async function renderSources(bookId) {
  let sourceData = await findDataById("sources", bookId);
  let divId = bookId + "Sources";
  console.log(divId);
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = "";
  targetDiv.innerHTML = generateSourcesTemplate(sourceData);
}

/**
 * renders overall template for source
 * @param {Object[]} sourceData - respective source
 * @returns {HTMLElement} html template
 */
function generateSourcesTemplate(sourceData) {
  let templateHTML = generateSourcesHeader();
  templateHTML += generateSourcesText(sourceData);
  return templateHTML;
}

/**
 * renders header for source based on set language
 * @returns {HTMLElement} html template
 */
function generateSourcesHeader() {
  let templateHTML = "";
  let headline;
  if (setLanguage == "de") {
    headline = "Quellen";
  } else {
    headline = "Sources";
  }
  templateHTML = /*html*/ `
  <h2>${headline}</h2>`;
  return templateHTML;
}

/**
 * renders source text irrespective of set language
 * @param {Object[]} sourceData - respective source data
 * @returns {HTMLElement} html template
 */
function generateSourcesText(sourceData) {
  let templateHTML = "";
  for (let paragraph of sourceData) {
    templateHTML += `
      <p>${paragraph}</p>`;
  }
  return templateHTML;
}

/**
 * renders the sources for special sites (in this case Children of Angels)
 * @param {string} bookId - id for respective books such as children
 */
async function renderSpecialSources(bookId) {
  const sourceData = await findDataById("sources", bookId);
  const languageSourceData = sourceData[setLanguage];
  const targetElement = document.getElementById(`${bookId}Sources`);
  targetElement.innerHTML = generateSpecialSourcesContent(languageSourceData);
}

/**
 * renders special source text based on set language
 * @param {Object[]} languageSourceData - respective source data
 * @returns {HTMLElement} html template
 */
function generateSpecialSourcesContent(languageSourceData) {
  let templateHTML = `<h2>${languageSourceData.header}</h2>`;
  languageSourceData.paragraphs.forEach((paragraph) => {
    templateHTML += `<p>${paragraph}</p>`;
  });
  languageSourceData.subsections.forEach((subsection) => {
    templateHTML += `<h3>${subsection.subheader}</h3>`;
    subsection.text.forEach((text) => {
      templateHTML += `<p>${text}</p>`;
    });
    templateHTML += `<a href="${subsection.link}"target="_blank" rel="noopener noreferrer">${subsection.linktext}</a>`;
  });
  return templateHTML;
}

//extensive reserach section e.g. Fria

/**
 * starts the rendering of additional research info
 * @param {string} bookId - id for respective books such as frida
 */
async function renderResearch(id) {
  let divId = bookId + "Research";
  let bottomDiv = document.getElementById(divId);
  bottomDiv.innerHTML = "";
  bottomDiv.innerHTML = await generateResearchContent(bookId);
}

/**
 * generate extra content for bottom of background page after loading content from json file
 * @param {string} bookId - id for respective books such as masks
 * @returns {HTMLElement} html template
 */
async function generateResearchContent(bookId) {
  let backgroundInfoArray = await findDataById("research", bookId);
  let backgroundInfo = await findDataInArray(bookId, backgroundInfoArray);
  let templateHTML = `<h2 class="personGroup">${backgroundInfo.headline}</h2>`;

  for (let paragraph of backgroundInfo.paragraphs) {
    templateHTML += `<p>${paragraph}</p>`;
  }
  return templateHTML;
}

// functions for timeline Sites

/**
 * initializes rendering of the timeline site
 * determines the following functions based on bookId
 * initializes rendering the bottom nav based on global variable navSites and bookId
 * async because findDataById() is called twice in short succession
 * @param {string} bookId - id for respective books such as masks
 */
async function renderTimeline(bookId) {
  currentSiteId = bookId + "Timeline";
  await renderTimelineTop(bookId);
  renderTimelineBottom(bookId);
}

/**
 * initializes rendering of the timeline top part
 * @param {string} bookId - id for respective books such as masks
 */
async function renderTimelineTop(bookId) {
  let divId = bookId + "TimelineTop";
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = "";
  targetDiv.innerHTML = await generateTimelineHeader(bookId);
}

/**
 * generate header for timeline based on set language
 * @param {string} bookId - id for respective books such as masks
 * @returns {HTMLElement} html template
 */
async function generateTimelineHeader(bookId) {
  let templateHTML = "";
  let headline;
  let timelineHeaders = await findDataById("timeline", "headers");
  let matchingHeader = timelineHeaders.find(
    (header) => header.bookId === bookId,
  );
  if (matchingHeader) {
    headline = matchingHeader[setLanguage] || "";
  } else {
    headline = setLanguage === "de" ? "Zeittafel" : "Timeline";
  }
  templateHTML = /*html*/ `
    <h2>${headline}</h2>`;
  return templateHTML;
}

/**
 * initializes rendering of the timeline bottom part
 * @param {string} bookId - id for respective books such as masks
 */
async function renderTimelineBottom(bookId) {
  let timelineData = await findDataById("timeline", bookId);
  let divId = bookId + "TimelineBottom";
  let targetDiv = document.getElementById(divId);
  targetDiv.innerHTML = "";
  targetDiv.innerHTML = generateTimelineTable(timelineData);
}

/**
 * generates overall table template for timeline bottom
 * @param {json} timelineData - respective timeline json
 * @returns {HTMLElement} html template
 */
function generateTimelineTable(timelineData) {
  let templateHTML = `
  <details class="table-box">
    <summary>show</summary>
    <div class="table-wrapper">
    <table class="contentTable">
      ${generateTableHeader()}
      ${generateTableRows(timelineData)}
    </table></details>`;
  return templateHTML;
}

/**
 * generates table header based on set language
 * @returns {HTMLElement} html template
 */
function generateTableHeader() {
  return `
    <tr>
      <th class="timelineYear">${setLanguage === "de" ? "Jahr" : "Year"}</th>
      <th class="timelineDate">${setLanguage === "de" ? "Datum" : "Date"}</th>
      <th class="timelineEvent">${
        setLanguage === "de" ? "Ereignis" : "Event"
      }</th>
    </tr>`;
}

/**
 * generates overall table rows for timeline bottom
 * @param {json} timelineData - respective timeline json
 * @returns {HTMLElement} html template
 */
function generateTableRows(timelineData) {
  let templateHTML = "";
  let previousYear = null;

  for (let timeline of timelineData) {
    for (let event of timeline.event) {
      templateHTML += generateTableRowSingle(previousYear, timeline, event);
      if (previousYear !== timeline.year) {
        previousYear = timeline.year;
      }
    }
  }
  return templateHTML;
}

/**
 * generates a table row for timeline bottom
 * year is only shown if it was not shown before (previous year)
 * @param {string} previousYear - the year that was shown in the previous iteration
 * @param {string} timelineData - respective timeline json
 * @param {string} event - respective event
 * @returns {HTMLElement} html template
 */
function generateTableRowSingle(previousYear, timelineData, event) {
  let templateHTML = `
  <tr>
    <td class="timelineYear">${
      previousYear === timelineData.year ? "" : timelineData.year
    }</td>
    <td class="timelineDate">${event.date}</td>
    <td class="timelineEvent">${event[setLanguage]}</td>
  </tr>`;
  return templateHTML;
}

// functions for bonus chapters

/**
 * renderes Bo nus Links at the bottom of each book site
 * fetches data from json allLinks
 * @param {string} siteId - book/series this belongs to
 */
async function renderBonusLinks(siteId) {
  allBonusLinks = await findDataById("bonus", "allLinks");
  let bonusLinksDiv = document.getElementById("bonusLinks");
  bonusLinksDiv.innerHTML = "";

  let siteIndex = allBonusLinks.findIndex((site) => site.id === siteId);
  if (siteIndex !== -1) {
    let introText = allBonusLinks[0].introText[setLanguage];
    let bonusLinks = allBonusLinks[siteIndex].bonusLinks;
    bonusLinksDiv.innerHTML = `<h2>Bonus</h2>`;
    for (let link of bonusLinks) {
      url = link.url;
      linkText = link[setLanguage];
      bonusLinksDiv.innerHTML += generateBonusLinksTemplate(
        introText,
        url,
        linkText,
      );
    }
  } else {
    console.log(`SiteId '${siteId}' not found`);
  }
}

/**
 * generates templates for Bonus Links section at the bottom of book sites
 * @param {string} introText - english or german for clicking (of all allLinks json)
 * @param {string} url - respective url (of all allLinks json)
 * @param {string} linkText - english or german for linktext (of all allLinks josn)
 */
function generateBonusLinksTemplate(introText, url, linkText) {
  let template = `
        <div>
          ${introText}
          <a class="siteNavTopLink" href="${url}">
            ${linkText}
          </a>
        </div>
      `;
  return template;
}

/**
 * initializes rendering of bonus chapter sites
 * initializes getting url based on bonusId
 * initializes loading and rendering of content based on bonusId
 * initializes rendering the bottom navigation based site parameters
 * CAVE: params come from pageData json
 * @param {string} genre - genre such as historical, currently not in use
 * @param {string} bookId - id for respective book
 * @param {string} bonusId - id for respective bonus content
 */
async function renderBonus(genre, bookId, bonusId) {
  targetDiv = bonusId + "Top";
  bonusData = await findDataById("bonus", bonusId);
  renderBonusContent(targetDiv, bonusData);
  renderNav(bookId, `${bonusId}Nav`);
}

/**
 * renders of content based on bonusId
 * initializes rendering the bottom navigation based site parameters
 * @param {string} targetDiv - bonusId+'Top'
 * @param {json} bonusData - respective json
 */
function renderBonusContent(targetDiv, bonusData) {
  const languageData = bonusData[setLanguage];
  const targetElement = document.getElementById(targetDiv);
  targetElement.innerHTML = `<h2>${languageData.header}</h2>`;
  targetElement.innerHTML += `<h3>${languageData.subheader}</h3>`;
  targetElement.innerHTML += `<a href="${languageData.link}">${languageData.linkText}</a>`;
  languageData.text.forEach((paragraph) => {
    targetElement.innerHTML += `<p>${paragraph}</p>`;
  });
}
