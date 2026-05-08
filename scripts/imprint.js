//for imprint and privacy policy

/**
 * initializes rendering the bottom navigation based site parameters
 */
function renderImprint() {
  currentSiteId = "imprint";
  currentGenre = "support";
  const targetElement = document.getElementById("imprint");
  if (setLanguage == "de") {
    targetElement.innerHTML = generateImprintGerman();
  } else {
    targetElement.innerHTML = generateImprintEnglish();
  }
}

/**
 * initializes rendering the bottom navigation based site parameters
 */
function renderprivacyPolicy() {
  currentSiteId = "privacyPolice";
  currentGenre = "support";
  const targetElement = document.getElementById("privacyPolicy");
  if (setLanguage == "de") {
    targetElement.innerHTML = generatePrivacyPolicyGerman();
  } else {
    targetElement.innerHTML = generatePrivacyPolicyEnglish();
  }
}

/**
 * generates content of imprint in German
 * @returns {html} html code
 */
function generateImprintGerman() {
  return /*html*/ `
  <h1 >Impressum</h1>
  <h2 >Informationen nach § 5 TMG</h2>
  <p>Anna K. Thomas</p>
  <p>c/o AutorenServices.de </p>
  <p>Birkenallee 24</p>
  <p>36037 Fulda </p>
  <p ></p>
  <h3 >Kontakt</h3>
  <p >E-Mail: annathomasautorin"&#64; "gmail.com</p>
  <h3 >Redaktionell verantwortlich</h3>
  <p >Anna K. Thomas</p>
  <h3 >EU-Streitbeilegung</h3>
  <p >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (ODR) zur Verfügung:</p>
  <a href="https://ec.europa.eu/consumers/odr/.">https://ec.europa.eu/consumers/odr/.</a>
  <p >Die E-Mail-Adresse finden Sie im obigen Impressum.</p>
  <h3 >Verbraucherstreitbeilegung/Universelle Schlichtungsstelle</h3>
  <p >Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
  </p>
  <p >Quelle:
      <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
  </p>
  <h2 >Nutzungsbedingungen</h2>
  <h3 >1. Bedingungen</h3>
  <p >
    Mit dem Zugriff auf diese Website, die von
    Anna K. Thomas, stimmen Sie zu, an die
    Nutzungsbedingungen für diese Website und erklären sich damit einverstanden, dass Sie für die
    dass Sie für die Einhaltung aller anwendbaren lokalen Gesetze verantwortlich sind. Wenn Sie nicht einverstanden sind
    nicht einverstanden sind, ist Ihnen der Zugriff auf diese Website untersagt. Die
    Materialien auf dieser Website sind urheberrechtlich und markenrechtlich geschützt.
    Recht geschützt.
  </p>
  <h3 >2. Nutzungslizenz</h3>
  <p >
    Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf
    Anna K. Thomas's Website für die persönliche,
    nicht-kommerzielle, vorübergehende Betrachtung. Dies ist die Gewährung einer Lizenz, nicht eine
    Übertragung des Eigentumsrechts, und unter dieser Lizenz dürfen Sie nicht:
  </p>
  
  <ul>
    <li >das Material zu verändern oder zu kopieren;</li>
    <li>
      die Materialien für kommerzielle Zwecke oder für eine öffentliche Darstellung zu verwenden;
    </li>
    <li >
      zu versuchen, eine auf der Website von Anna K. Thomas enthaltene Software zurückzuentwickeln
      Anna K. Thomas' Website;
    </li>
    <li >
      Urheberrechts- oder andere Eigentumsvermerke aus den Materialien zu entfernen; oder
    </li>
    <li >
      die Materialien an eine andere Person weiterzugeben oder sie auf einem anderen Server zu "spiegeln".
      einem anderen Server.
    </li>
  </ul>
  <p >
    Dies erlaubt Anna K. Thomas zu kündigen
    bei Verstößen gegen eine dieser Beschränkungen. Mit der Beendigung wird auch Ihr
    und Sie sollten alle heruntergeladenen Materialien in Ihrem Besitz vernichten, unabhängig davon
    die sich in Ihrem Besitz befinden, sei es in gedruckter oder elektronischer Form. Diese Nutzungsbedingungen
    Service wurden mit Hilfe der
    <a href="https://www.termsofservicegenerator.net"
      >Terms Of Service Generator</a> erstellt.
  </p>
  <h3 >3. Haftungsausschluss</h3>
  <p >
    Alle Materialien auf Anna K. Thomas's
    Website werden "wie besehen" zur Verfügung gestellt. Anna K. Thomas
    gibt keine Garantien, weder ausdrücklich noch stillschweigend, und schließt daher alle
    andere Garantien. Darüber hinaus,
    gibt Anna K. Thomas keine
    Anna K. Thomas keine Zusicherungen über die Genauigkeit oder Zuverlässigkeit der Nutzung der
    Materialien auf ihrer Website oder in sonstiger Weise in Bezug auf diese Materialien oder auf Websites, die mit dieser Website
    die mit dieser Website verlinkt sind.
  </p>
  <h3 >4. Beschränkungen</h3>
  <p >
      Anna K. Thomas oder ihre Lieferanten werden nicht
    Anna K. Thomas oder ihre Lieferanten haften nicht für Schäden, die durch die Nutzung oder Unmöglichkeit der
    Nutzung der Materialien auf der Anna K. Thomas
    Website entstehen, selbst wenn Anna K. Thomas oder ein
    autorisierter Vertreter dieser Website mündlich oder schriftlich über die Möglichkeit solcher Schäden informiert wurde,
    über die Möglichkeit eines solchen Schadens informiert wurde. Einige Gerichtsbarkeiten erlauben keine
    Beschränkungen von stillschweigenden Garantien oder Haftungsbeschränkungen für zufällige
    Schäden, gelten diese Beschränkungen möglicherweise nicht für Sie.
  </p>
  <h3 >5. Überarbeitungen und Irrtümer</h3>
  <p >
    Die Materialien auf Anna K. Thomas'
    Website können technische, typografische oder fotografische Fehler enthalten.
    Anna K. Thomas übernimmt keine Gewähr dafür, dass die
    Anna K. Thomas übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der auf dieser Website enthaltenen Materialien.
    Anna K. Thomas kann die Materialien
    Website enthaltenen Materialien jederzeit und ohne Vorankündigung ändern.
    Anna K. Thomas geht keine Verpflichtung ein
    die Materialien zu aktualisieren.
  </p>
  <h3 >6. Links</h3>
  <p >
      Anna K. Thomas hat nicht alle mit ihrer Website verlinkten
    Websites, die mit ihrer Website verlinkt sind, nicht überprüft und ist nicht verantwortlich für die Inhalte der
    einer solchen verlinkten Seite. Das Vorhandensein eines Links bedeutet nicht, dass Anna K. Thomas die Seite unterstützt.
    Anna K. Thomas die Seite. Die Nutzung einer
    verlinkten Website erfolgt auf eigene Gefahr.
  </p>
  <h3 >7. Änderungen der Nutzungsbedingungen der Website</h3>
  <p >
    Anna K. Thomas kann diese Nutzungsbedingungen
    für ihre Website jederzeit ohne vorherige Ankündigung ändern. Durch die Nutzung dieser Website erklären Sie
    stimmen Sie zu, an die aktuelle Version dieser Nutzungsbedingungen gebunden zu sein.
    Nutzungsbestimmungen.
  </p>
  <h3 >8. Ihre Privatsphäre</h3>
  <p >Bitte lesen Sie unsere <a href="/privacy-policy.html" >Datenschutzrichtlinie.</a>
  </p>
  <h3 >9. Geltendes Recht</h3>
  <p >
    Jegliche Ansprüche im Zusammenhang mit der Website von Anna K. Thomas unterliegen den Gesetzen von de ohne Berücksichtigung der Kollisionsnormen.
    law provisions.
  </p>
  <h3 >Bilder und Icons</h3>
  <p>Alle Bilder und Texte, soweit nicht anders angegeben, sind Eigentum von Anne Eberhard</p>
  <a target="_blank" href="https://icons8.com/icon/31761/amazon">Amazon</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>
    `;
}

/**
 * generates content of imprint in English
 * @returns {html} html code
 */
function generateImprintEnglish() {
  return /*html*/ `
  <h1 >Imprint</h1>
<h2 >Information according to § 5 TMG</h2>
<p >Anne Eberhard</p>
<p >Prühßstraße 24</p>
<p >12105 Berlin</p>
<p ></p>
<h3 >Kontakt</h3>
<p >E-Mail: annathomasautorin"&#64;"gmail.com</p>
<h3 >Editorially responsible</h3>
<p >Anne Eberhard</p>
<h3 >EU dispute resolution</h3>
<p >The European Commission provides a platform for online dispute resolution (ODR):</p>
<a href="https://ec.europa.eu/consumers/odr/.">https://ec.europa.eu/consumers/odr/.</a>
<p >You can find our e-mail address in the legal notice above.</p>
<h3 >Consumer dispute resolution/universal arbitration board</h3>
<p >We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
</p>
<p >Source:
    <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
</p>
<h2  >Terms of use</h2>
<h3 >1. Terms</h3>
<p >
  By accessing this Website, accessible from
  Anna K. Thomas, you are agreeing to be bound
  by these Website Terms and Conditions of Use and agree that you are
  responsible for the agreement with any applicable local laws. If you disagree
  with any of these terms, you are prohibited from accessing this site. The
  materials contained in this Website are protected by copyright and trade mark
  law.
</p>
<h3 >2. Use License</h3>
<p >
  Permission is granted to temporarily download one copy of the materials on
  Anna K. Thomas's Website for personal,
  non-commercial transitory viewing only. This is the grant of a license, not a
  transfer of title, and under this license you may not:
</p>

<ul>
  <li >modify or copy the materials;</li>
  <li >
    use the materials for any commercial purpose or for any public display;
  </li>
  <li >
    attempt to reverse engineer any software contained on
    Anna K. Thomas's Website;
  </li>
  <li >
    remove any copyright or other proprietary notations from the materials; or
  </li>
  <li >
    transferring the materials to another person or "mirror" the materials on
    any other server.
  </li>
</ul>
<p >
  This will let Anna K. Thomas to terminate
  upon violations of any of these restrictions. Upon termination, your viewing
  right will also be terminated and you should destroy any downloaded materials
  in your possession whether it is printed or electronic format. These Terms of
  Service has been created with the help of the
  <a href="https://www.termsofservicegenerator.net"
    >Terms Of Service Generator</a>.
</p>
<h3 >3. Disclaimer</h3>
<p >
  All the materials on Anna K. Thomas's
  Website are provided "as is". Anna K. Thomas
  makes no warranties, may it be expressed or implied, therefore negates all
  other warranties. Furthermore,
  Anna K. Thomas does not make any
  representations concerning the accuracy or reliability of the use of the
  materials on its Website or otherwise relating to such materials or any sites
  linked to this Website.
</p>
<h3 >4. Limitations</h3>
<p >
    Anna K. Thomas or its suppliers will not be
  hold accountable for any damages that will arise with the use or inability to
  use the materials on Anna K. Thomas's
  Website, even if Anna K. Thomas or an
  authorize representative of this Website has been notified, orally or written,
  of the possibility of such damage. Some jurisdiction does not allow
  limitations on implied warranties or limitations of liability for incidental
  damages, these limitations may not apply to you.
</p>
<h3 >5. Revisions and Errata</h3>
<p >
  The materials appearing on Anna K. Thomas's
  Website may include technical, typographical, or photographic errors.
  Anna K. Thomas will not promise that any of
  the materials in this Website are accurate, complete, or current.
  Anna K. Thomas may change the materials
  contained on its Website at any time without notice.
  Anna K. Thomas does not make any commitment
  to update the materials.
</p>
<h3 >6. Links</h3>
<p >
    Anna K. Thomas has not reviewed all of the
  sites linked to its Website and is not responsible for the contents of any
  such linked site. The presence of any link does not imply endorsement by
  Anna K. Thomas of the site. The use of any
  linked website is at the user's own risk.
</p>
<h3 >7. Site Terms of Use Modifications</h3>
<p >
  Anna K. Thomas may revise these Terms of Use
  for its Website at any time without prior notice. By using this Website, you
  are agreeing to be bound by the current version of these Terms and Conditions
  of Use.
</p>
<h3 >8. Your Privacy</h3>
<p >Please read our <a href="/privacy-policy.html" >Privacy Policy.</a>
</p>
<h3 >9. Governing Law</h3>
<p >
  Any claim related to Anna K. Thomas's Website shall be governed by the laws of de without regards to its conflict of
  law provisions.
</p>
<h3 >Pictures and Icons</h3>
<p>All images and texts, unless otherwise stated, are the property of Anne Eberhard</p>

    <a target="_blank" href="https://icons8.com/icon/31761/amazon">Amazon</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>
    `;
}

/**
 * generates content of privacy policy in German
 * @returns {html} html code
 */
function generatePrivacyPolicyGerman() {
  return /*html*/ `
      <h2 ></h2>
  <h1 >Datenschutzbestimmungen</h1>
  <p >
    Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU
    General Data Protection Regulation (DSGVO), ist:
  </p>
  <p >Anne Eberhard</p>
  <h2 >Ihre Rechte als betroffene Person</h2>
  <p >
    Sie können die folgenden Rechte jederzeit unter den Kontaktdaten
    unseres Datenschutzbeauftragten geltend machen:
  </p>
  <ul>
    <li>
      Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15
      DSGVO),
    </li>
    <li >Berichtigung von unrichtigen personenbezogenen Daten (Art. 16 DSGVO)</li>
    <li >Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
    <li >
      Einschränkung der Datenverarbeitung, wenn wir Ihre Daten noch nicht löschen dürfen
      Daten aufgrund gesetzlicher Verpflichtungen (Art. 18 DSGVO),
    </li>
    <li >
      Widerspruch gegen die Verarbeitung Ihrer Daten durch uns (Art. 21 DSGVO) und
    </li>
    <li>
      Datenportabilität, sofern Sie in die Datenverarbeitung eingewilligt haben
      Verarbeitung zugestimmt oder einen Vertrag mit uns geschlossen haben (Art. 20 DSGVO).
    </li>
  </ul>

  <p >
    Wenn Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen
    für die Zukunft widerrufen. Sie können jederzeit eine Beschwerde bei einer Aufsichtsbehörde einreichen
    Aufsichtsbehörde, z.B. bei der zuständigen Aufsichtsbehörde in dem Bundesland, in dem
    Ihres Wohnsitzes oder die für uns zuständige Behörde als verantwortliche Stelle.
    Eine Liste der Aufsichtsbehörden (für den nicht-öffentlichen Bereich) mit Anschrift
    finden Sie unter:
    <a
      target="_blank"
      href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
      >https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a
    >
  </p>
  <h2 >Erfassung von allgemeinen Informationen beim Besuch unserer Website</h2>
  <h2 >Natur und Zweck der Verarbeitung:</h2>
  <p >
    Wenn Sie auf unsere Website zugreifen, d.h. wenn Sie sich nicht registrieren oder anderweitig
    Informationen übermitteln, werden automatisch Informationen allgemeiner Natur
    erfasst. Zu diesen Informationen (Server-Logfiles) gehören z.B. der
    Art des Webbrowsers, das verwendete Betriebssystem, der Domainname Ihres
    Internet-Providers, Ihre IP-Adresse und ähnliches.
  </p>
  <p >Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
  <ul>
    <li >Sicherstellung eines reibungslosen Verbindungsaufbaus der Website,</li>
    <li >Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
    <li >Auswertung der Systemsicherheit und -stabilität, und</li>
    <li >zur Optimierung unserer Website.</li>
  </ul>
  <p >
    Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen
    dieser Art werden von uns ggf. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und
    um unseren Internetauftritt und die dahinter stehende Technik zu optimieren.
    dahinter zu optimieren.
  </p>
  <h2 >Rechtsgrundlage und berechtigtes Interesse:</h2>
  <p >
    Die Verarbeitung erfolgt auf Grundlage von Art. 6 (1) lit. f DSGVO auf
    Grundlage unseres berechtigten Interesses an der Verbesserung der Stabilität und
    Funktionalität unserer Website.
  </p>
  <h2 >Empfängern:</h2>
  <p >
    Empfänger der Daten können technische Dienstleister sein, die als Auftrags
    Auftragsverarbeiter für den Betrieb und die Pflege unserer Website.
  </p>
  <h2 >Aufbewahrungsdauer:</h2>
  <p >
    Die Daten werden gelöscht, sobald sie für den Zweck, für den sie erhoben wurden, nicht mehr erforderlich sind.
    erforderlich sind. Dies ist in der Regel der Fall bei Daten, die zur Bereitstellung der
    der Website, wenn die jeweilige Sitzung beendet ist.
  </p>
  <h2 >Bereitstellung obligatorisch oder erforderlich:</h2>
  <p >
    Die Bereitstellung der vorgenannten personenbezogenen Daten ist nicht gesetzlich oder vertraglich vorgeschrieben.
    Vertrag. Ohne die IP-Adresse ist jedoch der Service und die Funktionalität der
    unserer Website nicht gewährleistet. Darüber hinaus können einzelne Dienste und Leistungen
    nicht oder nur eingeschränkt zur Verfügung stehen. Aus diesem Grund ist eine Beanstandung
    ausgeschlossen.
  </p>
  <h2 >Kontaktformular</h2>
  <h2 >Natur und Zweck der Verarbeitung:</h2>
  <p >
    Die von Ihnen eingegebenen Daten werden zum Zwecke der individuellen
    Kommunikation mit Ihnen gespeichert. Zu diesem Zweck ist es erforderlich, eine gültige
    E-Mail Adresse und Ihr Name. Dies dient der Zuordnung der Anfrage und der
    der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist
    optional.
  </p>
  <h2 >Rechtsgrundlage:</h2>
  <p >
    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage eines
    berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Durch die Bereitstellung des Kontaktformulars
    Formulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme mit uns ermöglichen.
    Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der
    Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Wenn Sie mit uns Kontakt aufnehmen, um ein
    werden die Angaben aus dem Kontaktformular zur Durchführung vorvertraglicher Maßnahmen
    vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
  </p>
  <h2 >Empfänger:</h2>
  <p >Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
  <h2 >Aufbewahrungsfrist:</h2>
  <p >
    Die Daten werden spätestens 6 Monate nach Erledigung der Anfrage gelöscht.
    Bearbeitung. Sofern ein Vertragsverhältnis zustande kommt, unterliegen wir den
    gesetzlichen Aufbewahrungsfristen nach dem Handelsgesetzbuch (HGB) und löschen
    und löschen Ihre Daten nach Ablauf dieser Fristen.
  </p>
  <h2 >Bereitstellung zwingend erforderlich oder erforderlich:</h2>
  <p >
    Die Bereitstellung Ihrer personenbezogenen Daten ist freiwillig. Wir können jedoch nur
    Ihre Anfrage bearbeiten, wenn Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund Ihrer Anfrage mitteilen.
    den Grund der Anfrage angeben.
  </p>
  <h2 >Widerruf der Einwilligung:</h2>
  <p >
    Eine Option für ein einfaches Opt-Out oder eine Sperrung der Datenübermittlung wird derzeit nicht
    vom Anbieter angeboten. Wenn Sie das Tracking Ihrer Aktivitäten auf unserer Website verhindern wollen
    auf unserer Website verhindern möchten, widerrufen Sie bitte Ihre Einwilligung für die entsprechende Cookie
    Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen im
    Cookie-Einwilligungstool. In diesem Fall kann es allerdings sein, dass Sie unsere Website nicht oder nur eingeschränkt nutzen können.
    Website nicht oder nur eingeschränkt nutzen können.
  </p>
  <h2 >Widerruf der Einwilligung:</h2>
  <p >
    Eine Möglichkeit für ein einfaches Opt-Out oder eine Sperrung der Datenübermittlung wird derzeit nicht
    vom Anbieter angeboten. Wenn Sie das Tracking Ihrer Aktivitäten auf unserer Website verhindern möchten
    auf unserer Website verhindern möchten, widerrufen Sie bitte Ihre Einwilligung für die entsprechende Cookie-Kategorie
    oder alle technisch nicht notwendigen Cookies und Datenübertragungen im Cookie
    Einwilligungstool. In diesem Fall kann es allerdings sein, dass Sie unsere Website nicht
    oder nur eingeschränkt nutzen können.
  </p>
  <h2 >SSL-Verschlüsselung</h2>
  <p >
    Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir modernste
    modernste Verschlüsselung (z.B. SSL) über HTTPS.
  </p>
  <h2 >
    Informationen zu Ihrem Widerspruchsrecht nach Art. 21 DSGVO
  </h2>
  <h2 >Individuelles Widerspruchsrecht</h2>
  <p >
    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einzulegen.
    besonderen Situation, gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten
    die auf der Grundlage von Art. 6 Abs. 1 lit. f) DSGVO (Datenverarbeitung auf
    auf der Grundlage einer Interessenabwägung); dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art.
    auf der Grundlage dieser Bestimmung im Sinne von Art. 4 Nr. 4 DSGVO. Wenn Sie widersprechen,
    werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen.
    zwingende schutzwürdige Gründe für die Verarbeitung, die Ihre
    Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
    Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.
  </p>
  <h2 >Empfängern eines Widerspruchs</h2>
  <p >Anne Eberhard</p>
  <h2 >Änderungen an unserer Datenschutzerklärung</h2>
  <p >
    Wir behalten uns das Recht vor, diese Datenschutzerklärung so anzupassen, dass sie
    immer den aktuellen rechtlichen Anforderungen entspricht oder um
    Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der
    Einführung neuer Dienste. Die neue Datenschutzerklärung gilt dann
    für Ihren nächsten Besuch.
  </p>
  <h2 >Fragen an den Datenschutzbeauftragten</h2>
  <p >
    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail
    oder wenden Sie sich direkt an den Datenschutzbeauftragten in unserer Organisation
    direkt:
  </p>
  <p >Kontakt&#64;anderlandbooks.de</p>
  <p >
    Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt, den
    Experten für
    <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter"
      >https://www.activemind.de/datenschutz/datenschutzbeauftragter</a
    >
    (Version #2020-09-30)
  </p>
`;
}

/**
 * generates content of privacy policy in English
 * @returns {html} html code
 */
function generatePrivacyPolicyEnglish() {
  return /*html*/ `
      <h2 ></h2>
  <h1 >Privacy policy</h1>
  <p >
    Responsible person in terms of data protection laws, in particular the EU
    General Data Protection Regulation (DSGVO), is:
  </p>
  <p >Anne Eberhard</p>
  <h2 >Your data subject rights</h2>
  <p >
    You can exercise the following rights at any time using the contact details
    provided for our data protection officer:
  </p>
  <ul>
    <li >
      Information about your data stored by us and its processing (Art. 15
      DSGVO),
    </li>
    <li >Correction of incorrect personal data (Art. 16 DSGVO)</li>
    <li >Deletion of your data stored by us (Art. 17 DSGVO),</li>
    <li >
      Restriction of data processing if we are not yet allowed to delete your
      data due to legal obligations (Art. 18 DSGVO),
    </li>
    <li >
      objection to the processing of your data by us (Art. 21 DSGVO) and
    </li>
    <li >
      Data portability, provided that you have consented to the data
      processing or have concluded a contract with us (Art. 20 DSGVO).
    </li>
  </ul>

  <p >
    If you have given us consent, you can revoke this at any time with effect
    for the future. You may at any time lodge a complaint with a supervisory
    authority, e.g. the competent supervisory authority in the federal state of
    your residence or the authority responsible for us as the responsible body.
    A list of supervisory authorities (for the non-public sector) with address
    can be found at:
    <a
      target="_blank"
      href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
      >https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a
    >
  </p>
  <h2 >Collection of general information when visiting our website</h2>
  <h2 >Nature and purpose of processing:</h2>
  <p >
    When you access our website, i.e., when you do not register or otherwise
    submit information, information of a general nature is automatically
    collected. This information (server log files) includes, for example, the
    type of web browser, the operating system used, the domain name of your
    Internet service provider, your IP address and the like.
  </p>
  <p >In particular, they are processed for the following purposes:</p>
  <ul>
    <li >ensuring a smooth connection setup of the website,</li>
    <li >ensuring a smooth use of our website,</li>
    <li >evaluating system security and stability, and</li>
    <li >to optimize our website.</li>
  </ul>
  <p >
    We do not use your data to draw conclusions about your person. Information
    of this kind will be statistically evaluated anonymously by us, if
    necessary, in order to optimize our Internet presence and the technology
    behind it.
  </p>
  <h2 >Legal basis and legitimate interest:</h2>
  <p >
    The processing is carried out in accordance with Art. 6 (1) lit. f DSGVO on
    the basis of our legitimate interest in improving the stability and
    functionality of our website.
  </p>
  <h2 >Recipients:</h2>
  <p >
    Recipients of the data may be technical service providers who act as order
    processors for the operation and maintenance of our website.
  </p>
  <h2 >Storage period:</h2>
  <p >
    The data is deleted as soon as it is no longer required for the purpose for
    which it was collected. This is generally the case for data used to provide
    the website when the respective session has ended.
  </p>
  <h2 >Provision mandatory or required:</h2>
  <p >
    The provision of the aforementioned personal data is not required by law or
    contract. However, without the IP address, the service and functionality of
    our website is not guaranteed. In addition, individual services and services
    may not be available or may be limited. For this reason, an objection is
    excluded.
  </p>
  <h2 >Contact form</h2>
  <h2 >Nature and purpose of processing:</h2>
  <p >
    The data you enter will be stored for the purpose of individual
    communication with you. For this purpose, it is necessary to provide a valid
    e-mail address and your name. This serves the assignment of the request and
    the subsequent response to the same. The provision of further data is
    optional.
  </p>
  <h2 >Legal basis:</h2>
  <p >
    The processing of the data entered in the contact form is based on a
    legitimate interest (Art. 6 para. 1 lit. f DSGVO). By providing the contact
    form, we would like to enable you to contact us in an uncomplicated manner.
    The information you provide will be stored for the purpose of processing the
    request and for possible follow-up questions. If you contact us to request a
    quote, the data entered in the contact form will be processed to carry out
    pre-contractual measures (Art. 6 para. 1 lit. b DSGVO).
  </p>
  <h2 >Recipients:</h2>
  <p >Recipients of the data are order processors, if applicable.</p>
  <h2 >Storage period:</h2>
  <p >
    Data will be deleted no later than 6 months after the request has been
    processed. If a contractual relationship arises, we are subject to the
    statutory retention periods under the German Commercial Code (HGB) and will
    delete your data after these periods have expired.
  </p>
  <h2 >Provision mandatory or required:</h2>
  <p >
    The provision of your personal data is voluntary. However, we can only
    process your request if you provide us with your name, e-mail address and
    the reason for the request.
  </p>
  <h2 >Withdrawal of consent:</h2>
  <p >
    No option for a simple opt-out or blocking of data transmission is currently
    offered by the provider. If you wish to prevent tracking of your activities
    on our website, please revoke your consent for the corresponding cookie
    category or all technically unnecessary cookies and data transfers in the
    cookie consent tool. In this case, however, you may not be able to use our
    website or may only be able to use it to a limited extent.
  </p>
  <h2 >Revocation of consent:</h2>
  <p >
    No option for a simple opt-out or blocking of data transmission is currently
    offered by the provider. If you wish to prevent tracking of your activities
    on our website, please revoke your consent for the relevant cookie category
    or all technically unnecessary cookies and data transfers in the cookie
    consent tool. In this case, however, you may not be able to use our website
    or may only be able to use it to a limited extent.
  </p>
  <h2 >SSL encryption</h2>
  <p >
    To protect the security of your data during transmission, we use state of
    the art encryption (e.g. SSL) via HTTPS.
  </p>
  <h2 >
    Information about your right to object according to Art. 21 DSGVO
  </h2>
  <h2 >Individual right of objection</h2>
  <p >
    You have the right to object at any time, on grounds relating to your
    particular situation, to the processing of personal data relating to you
    which is carried out on the basis of Art. 6(1)(f) DSGVO (data processing on
    the basis of a balance of interests); this also applies to profiling based
    on this provision within the meaning of Art. 4 No. 4 DSGVO. If you object,
    we will no longer process your personal data unless we can demonstrate
    compelling legitimate grounds for the processing which override your
    interests, rights and freedoms, or the processing serves the purpose of
    asserting, exercising or defending legal claims.
  </p>
  <h2 >Recipients of an objection</h2>
  <p >Anne Eberhard</p>
  <h2 >Changes to our privacy policy</h2>
  <p >
    We reserve the right to adapt this data protection declaration so that it
    always complies with the current legal requirements or in order to implement
    changes to our services in the data protection declaration, e.g. when
    introducing new services. The new data protection statement will then apply
    to your next visit.
  </p>
  <h2 >Questions for the data protection officer</h2>
  <p >
    If you have any questions about data protection, please write us an e-mail
    or contact the person responsible for data protection in our organization
    directly:
  </p>
  <p >contact&#64;anderlandbooks.com</p>
  <p >
    This privacy statement was created with the help of activeMind AG, the
    experts for
    <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter"
      >https://www.activemind.de/datenschutz/datenschutzbeauftragter</a
    >
    (Version #2020-09-30)
  </p>
 `;
}
