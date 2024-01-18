import { sitemap } from "./sitemap.js";
import { cssFrameworkList } from "./css-framework-list.js";
import { cssAnimationList } from "./css-animation-list.js";
import { cssToolsList } from "./css-tool-list.js";
import { iconList } from "./icon-list.js";
import { fontIconList } from "./font-icon-list.js";
import { colorList } from "./color-list.js";
import { colorToolsList } from "./color-tool-list.js";
import { imageList } from "./image-list.js";
import { imageToolList } from "./image-tool-list.js";
import { graphicList } from "./graphic-list.js";
import { videoList } from "./video.js";
import { designList } from "./design.js";
import { templateList } from "./template.js";
import { securityList } from "./security.js";
import { siteToolList } from "./site-tool-list.js";
import { publicApiList } from "./public-api-list.js";

import { categoryName } from "./category-name.js";



const categoryNameDOM = document.querySelector(".category-name")

const sitemapDOM = document.querySelector(".sitemap")

const cssFrameworkDOM = document.querySelector(".css-framework");
const cssAnimationDOM = document.querySelector(".css-animation");
const cssToolDOM = document.querySelector(".css-tool");
const iconDOM = document.querySelector(".icon");
const fontIconDOM = document.querySelector(".font-icon");
const colorDOM = document.querySelector(".color");
const colorToolDOM = document.querySelector(".color-tool");
const imageDOM = document.querySelector(".image");
const imageToolDOM = document.querySelector(".image-tool");
const graphicDOM = document.querySelector(".graphic");
const videoDOM = document.querySelector(".video");
const designDOM = document.querySelector(".design");
const templateDOM = document.querySelector(".template");
const securityDOM = document.querySelector(".security");
const siteToolDOM = document.querySelector(".site-tool");
const publicApiDOM = document.querySelector(".public-api");




window.addEventListener("DOMContentLoaded", function () {
if(window.location.pathname === '/' || '/index.html'){
  indexPage(categoryName)
 }else{(window.location.pathname === '/index.html')}


 if(window.location.pathname === '/sitemap.html'){
    sitemapPage(sitemap)
 } else{false}

  if (window.location.pathname === "/css.html") {
    cssFramework(cssFrameworkList);
    cssAnimation(cssAnimationList);
    cssTool(cssToolsList);
  } else {
    false;
  }

  if (window.location.pathname === "/icon.html") {
    icon(iconList);
    fontIcon(fontIconList);
  } else {
    false;
  }

  if (this.window.location.pathname === "/color.html") {
    color(colorList);
    colorTool(colorToolsList);
  } else {
    false;
  }

  if (this.window.location.pathname === "/image.html") {
    image(imageList);
    imageTool(imageToolList);
  } else {
    false;
  }

  if (window.location.pathname === "/graphic.html") {
    graphic(graphicList);
  } else {
    false;
  }

  if (window.location.pathname === "/video.html") {
    video(videoList);
  } else {
    false;
  }

  if (window.location.pathname === "/design.html") {
    design(designList);
  } else {
    false;
  }

  if (window.location.pathname === "/template.html") {
    template(templateList);
  } else {
    false;
  }

  if (window.location.pathname === "/security.html") {
    security(securityList);
  } else {
    false;
  }

  if (window.location.pathname === "/site-tool.html") {
    siteTool(siteToolList);
  } else {
    false;
  }

  if (window.location.pathname === "/public-api.html") {
    publicApi(publicApiList);
  }
});

 const indexPage = (items) => {
  let categoryNameView = items.map((item) => {
    return `
    <div class="col-lg-3 col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-folder-open fa-lg"></i>${item.title}</h5>
        <p class="card-text"><span class="badge rounded-pill bg-warning text-dark"> ${item.categoryLength}</span>
       </p>
      <a href="${item.link}" class="btn btn-outline-warning"><i class="fas fa-angle-double-right"></i></a>
      </div>
    </div>
  </div>
      `;
  });

  categoryNameView = categoryNameView.join("");
  categoryNameDOM.innerHTML = categoryNameView;
}

const sitemapPage = (items) => {
  let sitemapView = items.map((item) => {
    return `
      <div class="col-md-2 col-sm-3">
      <div class="box">
       <a href="${item.link}" class="a-link">
        <i class="fas fa-sitemap"></i>${item.title}</a>
      </div>
    </div>
      `;
  });

  sitemapView = sitemapView.join("");
  sitemapDOM.innerHTML = sitemapView;
}

const cssFramework = (items) => {
  let cssFrameworkView = items.map((item) => {
    return `
      <div class="col-md-2 col-sm-3">
      <div class="box">
       <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
        <i class="fas fa-search-plus"></i>${item.title}</a>
      </div>
    </div>
      `;
  });

  cssFrameworkView = cssFrameworkView.join("");
  cssFrameworkDOM.innerHTML = cssFrameworkView;
}

const cssAnimation = (items) => {
  let cssAnimationView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
        <div class="box">
          <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
          <i class="fas fa-search-plus"></i>${item.title}</a>
        </div>
      </div>
        `;
  });

  cssAnimationView = cssAnimationView.join("");
  cssAnimationDOM.innerHTML = cssAnimationView;
}

const cssTool = (items) => {
  let cssToolView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  cssToolView = cssToolView.join("");
  cssToolDOM.innerHTML = cssToolView;
}

const icon = (items) => {
  let iconView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
      <div class="box">
       <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
        <i class="fas fa-search-plus"></i>${item.title}</a>
      </div>
    </div>
      `;
  });

  iconView = iconView.join("");
  iconDOM.innerHTML = iconView;
}

const  fontIcon = (items) => {
  let fontIconView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
      <div class="box">
       <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
        <i class="fas fa-search-plus"></i>${item.title}</a>
      </div>
    </div>
      `;
  });

  fontIconView = fontIconView.join("");
  fontIconDOM.innerHTML = fontIconView;
}

const color = (items) => {
  let colorView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
      <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  colorView = colorView.join("");
  colorDOM.innerHTML = colorView;
}

const colorTool = (items) => {
  let colorToolView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  colorToolView = colorToolView.join("");
  colorToolDOM.innerHTML = colorToolView;
}

const image = (items) => {
  let imageView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  imageView = imageView.join("");
  imageDOM.innerHTML = imageView;
}

const imageTool = (items) => {
  let imageToolView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  imageToolView = imageToolView.join("");
  imageToolDOM.innerHTML = imageToolView;
}

const graphic = (items) => {
  let graphicView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  graphicView = graphicView.join("");
  graphicDOM.innerHTML = graphicView;
}

const video = (items) => {
  let videoView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });
  videoView = videoView.join("");
  videoDOM.innerHTML = videoView;
}

const design = (items) => {
  let designView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  designView = designView.join("");
  designDOM.innerHTML = designView;
}

const template = (items) => {
  let templateView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  templateView = templateView.join("");
  templateDOM.innerHTML = templateView;
}

const security = (items) => {
  let securityView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
      <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });
  securityView = securityView.join("");
  securityDOM.innerHTML = securityView;
}

const siteTool = (items) => {
  let siteToolView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
      <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  siteToolView = siteToolView.join("");
  siteToolDOM.innerHTML = siteToolView;
}

const publicApi = (items) => {
  let publicApiView = items.map((item) => {
    return `
    <div class="col-md-2 col-sm-3">
    <div class="box">
     <a href="${item.link}" class="a-link" target="_blank" rel="noopener">
      <i class="fas fa-search-plus"></i>${item.title}</a>
    </div>
  </div>
    `;
  });

  publicApiView = publicApiView.join("");
  publicApiDOM.innerHTML = publicApiView;
}
