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
        wrapper.appendChild(createLanguageBlock("Deutsch", series.imagesDE, series.linksDE));
      }

      if (series.imagesEN.length > 0) {
        wrapper.appendChild(createLanguageBlock("English", series.imagesEN, series.linksEN));
      }
    }

    gallery.appendChild(wrapper);
  });
}


function createLanguageBlock(label, images, link) {
  const block = document.createElement("div");
  block.classList.add("lang-block");

  const imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");

  images.forEach((src) => {
    const a = document.createElement("a");
    a.href = link;

    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.loading = "lazy";
    img.className = "sideImage";

    a.appendChild(img);
    imgWrap.appendChild(a);
  });

  block.appendChild(imgWrap);

  return block;
}

function createDualBookBlock(series) {
    const block = document.createElement("div");
    block.classList.add("dual-book");

    const imageWrap = document.createElement("div");
    imageWrap.classList.add("dual-images");

    // Deutsch
    const linkDE = document.createElement("a");
    linkDE.href = series.linksDE;

    const imgDE = document.createElement("img");
    imgDE.src = series.imagesDE?.[0] || "";
    imgDE.alt = `${series.id} Deutsch`;
    imgDE.classList.add("sideImage");

    linkDE.appendChild(imgDE);

    // Englisch
    const linkEN = document.createElement("a");
    linkEN.href = series.linksEN;

    const imgEN = document.createElement("img");
    imgEN.src = series.imagesEN?.[0] || "";
    imgEN.alt = `${series.id} English`;
    imgEN.classList.add("sideImage");

    linkEN.appendChild(imgEN);

    imageWrap.appendChild(linkDE);
    imageWrap.appendChild(linkEN);

    block.appendChild(imageWrap);

    return block;
}