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

const cssListSum = cssFrameworkList.concat(cssAnimationList, cssToolsList);
const iconListSum = iconList.concat(fontIconList);
const colorListSum = colorList.concat(colorToolsList);
const imageListSum = imageList.concat(imageToolList);

export const categoryList =[
    {
        id : 1,
        title: "CSS",
        link: "/css.html",
        categoryLength: cssListSum.length
    },
    {
        id : 2,
        title: "Icon",
        link: "/icon.html",
        categoryLength: iconListSum.length
    },
    {
        id : 3,
        title: "Color",
        link: "/color.html",
        categoryLength: colorListSum.length
    },
    {
        id : 4,
        title: "Image",
        link: "/image.html",
        categoryLength: imageListSum.length
    },
    {
        id : 5,
        title: "Graphic",
        link: "/graphic.html",
        categoryLength: graphicList.length
    },
    {
        id : 6,
        title: "Video",
        link: "/video.html",
        categoryLength: videoList.length
    },
    {
        id : 7,
        title: "Design",
        link: "/design.html",
        categoryLength: designList.length
    },
    {
        id : 8,
        title: "Template",
        link: "/template.html",
        categoryLength: templateList.length
    },
    {
        id : 9,
        title: "Security",
        link: "/security.html",
        categoryLength: securityList.length
    },
    {
        id : 10,
        title: "Site Tool",
        link: "/site-tool.html",
        categoryLength: siteToolList.length
    },
    {
        id : 11,
        title: "Public API",
        link: "/public-api.html",
        categoryLength: publicApiList.length
    }
   
]