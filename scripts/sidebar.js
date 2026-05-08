document.addEventListener("DOMContentLoaded", initSidebar);

async function initSidebar() {
  const gallery = document.getElementById("sidebar");
  renderSidebarDiv(gallery);
}

function renderSidebarDiv(gallery) {
  siteImages.forEach((series) => {
    // Hauptwrapper pro ID
    const wrapper = document.createElement("div");
    wrapper.classList.add("series-wrapper");
    wrapper.id = series.id;

    const isStandalone =
      series.imagesDE.length === 1 && series.imagesEN.length === 1;

    if (isStandalone) {
      wrapper.appendChild(createDualBookBlock(series));
    } else {
      if (series.imagesDE.length > 0) {
        wrapper.appendChild(createLanguageBlock("Deutsch", series.imagesDE));
      }

      if (series.imagesEN.length > 0) {
        wrapper.appendChild(createLanguageBlock("English", series.imagesEN));
      }
    }

    gallery.appendChild(wrapper);
  });
}


function createLanguageBlock(label, images) {
  const block = document.createElement("div");
  block.classList.add("lang-block");

  const heading = document.createElement("h3");
  heading.textContent = label;
 // block.appendChild(heading);

  const imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.loading = "lazy";
    img.className = "sideImage";
    imgWrap.appendChild(img);
  });

  block.appendChild(imgWrap);

  return block;
}

function createDualBookBlock(series) {
    const block = document.createElement("div");
    block.classList.add("dual-book");

    // Header
    const header = document.createElement("div");
    header.classList.add("dual-header");

    const deTitle = document.createElement("h3");
    deTitle.textContent = "Deutsch";

    const enTitle = document.createElement("h3");
    enTitle.textContent = "English";

   //header.appendChild(deTitle);
   //header.appendChild(enTitle);

    // Images
    const imageWrap = document.createElement("div");
    imageWrap.classList.add("dual-images");

    const imgDE = document.createElement("img");
    imgDE.src = series.imagesDE[0];
    imgDE.classList.add("sideImage");

    const imgEN = document.createElement("img");
    imgEN.src = series.imagesEN[0];
    imgEN.classList.add("sideImage");

    imageWrap.appendChild(imgDE);
    imageWrap.appendChild(imgEN);

   // block.appendChild(header);
    block.appendChild(imageWrap);

    return block;
}