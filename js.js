
const elemNode = document.querySelector("div.abtbanner");
const containerNode = document.querySelector("section#page-banner");
const menuNode = document.querySelector("div.page-submenu");
const bannerImage = document.querySelector("div.bannerImage");
const navNode = document.querySelector("header#main-header");
const elemHeaderNode = document.querySelector(".fixedTitle");
const borderNode = document.querySelector("div.inner-banner-wrapper");

const params = {
    elem: {
        eT: elemNode.offsetTop,
        eH: elemNode.offsetHeight,
        eB: elemNode.offsetTop + elemNode.offsetHeight,
        eW: elemNode.offsetWidth
    },
    container: {
        eT: containerNode.offsetTop,
        eH: containerNode.offsetHeight,
        eB: containerNode.offsetHeight + containerNode.offsetTop,
    },
    nav: {
        eH: navNode.offsetHeight,
    },
    menu: {
        eT: menuNode.offsetTop
    },
    elemHeader: {
        eT: elemHeaderNode.offsetTop,
        eH: elemHeaderNode.offsetHeight
    },
    border: {
        eH: borderNode.offsetHeight
    }
};

window.onscroll = function () {
    const { elem, container, nav, menu, elemHeader } = params;
    const wT = window.pageYOffset + nav.eH;

    const num = ((container.eB - wT) * ((container.eB - container.eT) / (container.eB - elem.eT))) / container.eH;

    bannerImage.style.opacity = num;
    borderNode.style.borderColor = `rgba(255, 255, 255, ${num})`;

    if(elem.eT < wT){
        elemNode.style.position = "fixed";
        elemNode.style.top = nav.eH + elem.eH / 2 + "px";
    } else {
        elemNode.style.position = "absolute";
        elemNode.style.top = "45%";
    };

    if(wT + (elem.eH / 2) > container.eB){
        elemHeaderNode.style.color = "#53626F";
    } else {
        elemHeaderNode.style.color = "white";
    };

    if(wT + (elem.eH / 2 - elemHeader.eH / 2) > container.eB){
        elemNode.style.position = "absolute";
        elemNode.style.top = container.eH + (elemHeader.eH / 2) + "px";
    };

    if(menu.eT < wT){
        menuNode.style.position = "fixed";
        menuNode.style.top = nav.eH + "px";
        elemNode.style.position = "fixed";
        elemNode.style.top = nav.eH + (elemHeader.eH / 2) + "px";
    } else {
        menuNode.style.position = "absolute";
        menuNode.style.top = container.eB + "px";
    };
};