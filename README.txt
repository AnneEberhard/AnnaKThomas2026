All sites on root level will be started with onload=init()

Init (init.js) 
    includes footer, header, background and mobile templates
    global variables that are used throughout the site are filled from the respective JSONs
    language is checked according to browser/user preferences
        for german default language will be set to de and the function german will be called
        for all other languages, default language will be set to en and function english will be called
    the shared content (templates, using the JSON menuTitles from JSONS folder general) 
        is rendered via renderSharedContent
    the individual content in the default language is rendered via renderContentBasedonPage 
        using the global constant functionMap as well the variable pageData which was loaded before
        maps the function out of functionMap and the params out of pageData to the site based on url

script.js includes the functions used by several sites 
    such as the
        renderNav for the bottom navigation (using the JSON navSites from JSONS folder general)
    as well as
        main sites (using the JSON mainSites from JSONS folder general) 
        book sites (using the JSON topSites and allBooks from JSONS folder general)

special-sites.js contains the logic for
    the about-me page, including the translation
    the special logic for novellas, interlinked with booksites ( renderMainSite and renderBookDetails )
    the special logic for the homepage (using the JSON overview from JSONS folder general)
    the special logic for personage (using JSON personSitesHeader und INDIVDUAL JSONs per story in JSONS folder persons)
    the special logic for family trees (using the JSON familyTree in JSONS folder familyTree)
    the special logic for background info (using the JSON backgroundInfo in JSONS folder background)
    the source sites containing glossaries, sources and extras (using individual JSONs/Arrays in JSONS folder glossary/sources)
    the timeline sites (using timelineHeaders JSON and individual JSON in tJSONS folder imeline)

For Bonus Chapter text:
    convert in word all " into '
    convert in Word all ^p into ","
    convert in editor all formatted " into clean "
    check for  „, and convert into  ",
    Add some line breaks in editor as it is easier as in VS Code and lines too long  lead to errors
 
 A template of a new site is in folder templates

 JSDOC notation
 /**
 * 
 * @param {string} form - entered data
 * @returns boolean
*/
