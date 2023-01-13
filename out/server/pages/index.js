"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myImageLoader)
/* harmony export */ });
function myImageLoader({
  src,
  width,
  quality
}) {
  return `${src}?w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/gi"
const gi_namespaceObject = require("react-icons/gi");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/navbar/index.js






const navbarData = [{
  id: "home",
  title: "Home",
  url: "/#home"
}, {
  id: "stack",
  title: "Stack",
  url: "/#stack"
}, {
  id: "about",
  title: "About",
  url: "/#about"
}, {
  id: "portofolio",
  title: "Portfolio",
  url: "/#portofolio"
}, {
  id: "contact",
  title: "Contact",
  url: "/#contact"
}];

function NavToggler({
  open,
  setOpen
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "py-2 px-4 md:hidden text-5xl",
    children: /*#__PURE__*/jsx_runtime_.jsx(gi_namespaceObject.GiHamburgerMenu, {
      onClick: () => {
        console.log("clicked");
        setOpen(!open);
      },
      className: "navbar-toggle ",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarSupportedContent1",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    })
  });
}

function NavLinks({
  open
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: !open ? "hidden w-full md:flex md:items-center md:w-auto " : "block w-full md:flex-row md:items-center md:w-auto ",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "flex flex-col md:flex-row items-center justify-between w-full dropdowm-menu",
      children: navbarData.map(item => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: item.url,
        passHref: true,
        className: "px-4 font-bold py-2",
        children: item.title
      }, item.id))
    })
  });
}

const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    className: "text-3xl font-bold no-underline py-3 mx-5 flex-nowrap inline-block",
    children: "Full Stack Developer"
  });
};

function NavMenu({
  open,
  setOpen
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "w-full fixed bg-[#2c3e50] z-10 top-0  ",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container  mx-auto lg:m-auto flex flex-wrap items-center justify-between  max-w-4xl  text-white text-lg py-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx(NavToggler, {
        open: open,
        setOpen: setOpen
      }), /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
        open: open
      })]
    })
  });
}

function NavBar() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(NavMenu, {
    open: open,
    setOpen: setOpen
  });
}

/* harmony default export */ const navbar = (NavBar);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./components/divider/index.js




function Divider({
  bgColor,
  borderColor,
  textColor
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex h-20  w-full justify-center items-center py-3",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `block h-2 max-w-[10em] w-full ${bgColor}  rounded ${borderColor} mx-3`
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-2xl",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: `${textColor} mx-4`,
        children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiFillStar, {
          className: "h-9 w-9"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `flex h-2 max-w-[10em] w-full ${bgColor} rounded ${borderColor} mx-3`
    })]
  });
}

/* harmony default export */ const divider = (Divider);
;// CONCATENATED MODULE: ./components/header/index.js





function Avatar() {
  return /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: "https://my-landing-page-52061.web.app/assets/img/avataaars.svg",
    alt: "avatar",
    width: 450,
    height: 450,
    responvive: "true",
    className: "rounded-full mb-5 w-60"
  });
}

const mastheadData = [{
  name: "Leonard Lator",
  title1: "Full Stack Developer",
  title2: "Smart Contract Integration",
  title3: "Music Rights Specialist"
}];

function MastHead() {
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "flex flex-col items-center w-full pt-[calc(2rem+50px)] md:pt-[calc(2rem+74px)] pb-[6rem] bg-[#1abc9c]",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col items-center w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: " text-6xl md:text-7xl text-white text-center ",
        children: mastheadData[0].name
      }), /*#__PURE__*/jsx_runtime_.jsx(divider, {
        bgColor: "bg-white",
        borderColor: "border-gray-400",
        textColor: "text-white"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xl flex md:text-2xl text-center text-white px-3 py-5",
        children: `${mastheadData[0].title1} - ${mastheadData[0].title2} - ${mastheadData[0].title3}`
      })]
    })
  });
}

/* harmony default export */ const header = (MastHead);
;// CONCATENATED MODULE: ./components/footer/index.js



function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "flex h-24 bg-[#1a252f] w-full items-center text-white justify-center",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "flex items-center justify-center gap-2",
      href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "CreLator Design"
    })
  });
}

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./components/stackSection/index.js





function CardItem({
  cardUrl,
  cardTitle
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-white flex flex-col justify-center rounded-lg shadow-xl p-5 mx-auto overflow-hidde ",
    children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: cardUrl,
      height: 150,
      width: 200,
      alt: cardTitle //object-fit="cover"
      ,
      className: "w-full h-full mt-3   object-scale-down object-center"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center m-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold p-3",
        children: cardTitle
      })
    })]
  });
}

const StackSection = (stackData, loader) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "stack",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container  my-4 mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center text-[#2c3e50] text-5xl mt-3",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Stack"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(divider, {
        bgColor: "bg-[#2c3e50]",
        borderColor: "border-[#2c3e50]",
        textColor: "text-[#2c3e50]"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-2 auto-rows-fr md:grid-cols-4 gap-2 md:gap-4 place-items-stretch place-content-center m-5",
        children: stackData.stackData.data.map(card => /*#__PURE__*/jsx_runtime_.jsx(CardItem, {
          cardUrl: card.url,
          cardTitle: card.title,
          loader: loader
        }, card._id))
      })]
    })
  });
};

/* harmony default export */ const stackSection = (StackSection);
;// CONCATENATED MODULE: ./components/sectionHeader/index.js





function SectionHeader({
  title,
  titleColor,
  bgColor,
  borderColor,
  textColor
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `text-center text-5xl ${titleColor} mt-3`,
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(divider, {
      bgColor: bgColor,
      borderColor: borderColor,
      textColor: textColor
    })]
  });
}

/* harmony default export */ const sectionHeader = (SectionHeader);
;// CONCATENATED MODULE: ./components/about/index.js



const aboutData = ["Hi, i am Leo, a multi-lingual, Full Stack Developer with a background in Music Rights & Royalties Managment. Forever student, who feel in love with learning about new technologies and industry's best practices. Aspiring to build advanced web applications that will impact the world in a positive way."];

function TextContainer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container grid grid-flow-row md:grid-cols-1 ",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " justify-center items-center mx-auto w-full md:max-w-[60%]  p-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: " text-white brake-words text-justify text-xl mx-auto max-w-auto tracking-tighter py-3",
        children: aboutData[0]
      })
    })
  });
}

function About() {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "about",
    className: "grid grid-cols-1 w-full place-items-center bg-[#1abc9c] p-5",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(sectionHeader, {
        title: "About",
        titleColor: "text-white",
        bgColor: "bg-white",
        borderColor: "border-[#2c3e50]",
        textColor: "text-white"
      }), /*#__PURE__*/jsx_runtime_.jsx(TextContainer, {})]
    })
  });
}

/* harmony default export */ const about = (About);
;// CONCATENATED MODULE: external "react-icons/gr"
const gr_namespaceObject = require("react-icons/gr");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/portfolio/index.js







const cardData = [{
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcryptotracker.jpeg?alt=media&token=39dc4214-1a47-4560-8edb-43cbd6e99977",
  title: "Crypto Tracker",
  description: "My React Crypto Tracker, Introducing my first server side rendering app designed with Next.js and deployed on Firebase. First time are always a chalange but today i am proud to display it on my portfolio. The data are fetch from CoinGecko rest API, it was designed using functional component rather than class, useState and useEffect hooks.",
  link: "https://myreactcryptotracker.web.app/",
  github: "https://github.com/Leonardll/crypto-react"
}, {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2F1_RN_5KZaVN0xkUXKW4pnTFg.webp?alt=media&token=4ebb933b-888c-4659-891a-d98ba78ef65c",
  title: "Polypus",
  description: "Polypus is a decentralized application that allows users to borrow assets against the value of their own NFTs or to lend assets. The stack used is HTML, Tailwind CSS, Next JS, Fleek. The smart contract is written in Solidity and deployed on Polygon and Arbitrum Network. I was in charge of the front-end development and the smart contract integration. The project received two awards for best Polygon and Arbitrum application as well as Compound Labs Pool Prize.",
  link: "morning-king-0051.on.fleek.co",
  github: "https://github.com/npasquie/best-nft-as-collateral"
}, {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2FchainlinkHackathon.png?alt=media&token=09bc96a0-2daa-40f1-853f-331a12977113",
  title: "The Raffle House",
  description: "The Raffle House is a decentralized application that allows users to create raffles and sell tickets to them. The stack used is HTML,  Tailwind CSS, Next JS, Fleek. The smart contract is written in Solidity and deployed on Polygon and Arbitrum Network. I was in charge of the front-end development and the smart contract integration. The project is still in development but I am proud to be finalist and win the prizes for the best Polygon and Arbitrum project.",
  link: "https://wild-dream-9169.on.fleek.co/",
  github: "https://github.com/LEO-TEAM-CHAINLINK-HACKATHON/NFTLOTTERY1"
}, {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fhands.jpg?alt=media&token=43dbebfe-5b91-42e2-bacd-85987a5fe76b",
  title: "Unico Hogar",
  description: "First freelance assignment for a Barcelona-based Real Estate Concierge service. The stack used is HTML, CSS, Bootstrap, Framer-Motion, SCSS, Next JS, Vercel.",
  link: "https://www.unicohogar.com/",
  github: "https://github.com/Leonardll/unicoHogar"
}, {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/newlandingpage-918dc.appspot.com/o/images%2Fcity-scoot-banner.jpg?alt=media&token=7e3bab11-c46f-4815-8be9-fa57abbf94bf",
  title: "City Scoot",
  description: "City Scoot is my first child. This is my first public website. This app was part of the final assignment that granted me my Computer Science Foundation Degree. HTML, CSS, Bootstrap, SCSS, Javascript, and Firebase make up the stack.",
  link: "https://cityscoot-d6c37.web.app/",
  github: "https://github.com/Leonardll/City-Scoot"
}];
const iconsData = [{
  id: 1,
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaLink, {})
}, {
  id: 2,
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {})
}];

function CardGradient({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `bg-gradient-to-r rounded-2xl max-w-[500px] md:max-w-[400px]   from-[#1abc9c]  to-[#2c3e50] mx-auto p-2`,
    children: children
  });
}

function IconGradient({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-gradient-to-r rounded-full from-[#1abc9c] m-5 to-[#2c3e50]   p-1",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex h-full p-2 bg-black rounded-3xl",
      children: children
    })
  });
}

function portfolio_CardItem({
  imgSrc,
  title,
  description
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(CardGradient, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col auto-rows-min text-white\t bg-[#1a252f] justify-center items-center w-full rounded-xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full h-full rounded-t-lg",
        style: {
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "300px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "p-3 text-xl text-center",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-justify text-lg w-full p-5",
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-center items-center",
        children: iconsData.map(item => /*#__PURE__*/jsx_runtime_.jsx(IconGradient, {
          children: item.icon
        }, item.id))
      })]
    })
  });
}

function PreviousButton({
  clickHandler
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(gr_namespaceObject.GrPrevious, {
    onClick: () => {
      clickHandler();
    },
    type: "button",
    className: " active h-[3em] w-[3em] z-[2] translate-y-[10vh] opacity-[0.5] absolute  carousel-control-prev left-[1em] top-[50%] flex items-center justify-center",
    "data-bs-target": "#carouselExampleCaptions",
    "data-bs-slide": "prev",
    cursor: "pointer",
    children: "Previous"
  });
}

function NextButton({
  clickHandler
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(gr_namespaceObject.GrNext, {
    onClick: () => {
      clickHandler();
    },
    type: "button",
    className: " active h-[3em] w-[3em] carousel-control-next opacity-[0.5]  absolute  z-[2] translate-y-[10vh] flex items-center justify-center right-[1em] top-[50%]",
    "data-bs-target": "#carouselExampleCaptions",
    "data-bs-slide": "next",
    cursor: "pointer",
    children: "Next"
  });
}

function Slide({
  cardData,
  currentCardIndex
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: "m-0 p-0 list-none",
    children: cardData.map((item, index) => {
      return currentCardIndex === index ? /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "inset-0 transition-opacity duration-1000 ease-in-out",
        children: /*#__PURE__*/jsx_runtime_.jsx(portfolio_CardItem, {
          imgSrc: item.imgSrc,
          title: item.title,
          description: item.description,
          link: "https://myreactcryptotracker.web.app/"
        })
      }, item.title) : null;
    })
  });
}

function Carousel({
  cardData,
  currentCardIndex,
  prevSlideHandler,
  nextSlideHandler
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container carousel w-full  my-10 mx-auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx(PreviousButton, {
      clickHandler: prevSlideHandler
    }), /*#__PURE__*/jsx_runtime_.jsx(Slide, {
      cardData: cardData,
      currentCardIndex: currentCardIndex
    }), /*#__PURE__*/jsx_runtime_.jsx(NextButton, {
      clickHandler: nextSlideHandler
    })]
  });
}

function Portfolio() {
  const {
    0: currentCardIndex,
    1: setCurrentCardIndex
  } = (0,external_react_.useState)(0);

  const prevSlideHandler = () => {
    if (currentCardIndex !== 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else if (currentCardIndex === 0) {
      setCurrentCardIndex(cardData.length - 1);
    }
  };

  const nextSlideHandler = () => {
    console.log("clicked");

    if (currentCardIndex !== cardData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else if (currentCardIndex === cardData.length - 1) {
      setCurrentCardIndex(0);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "Portfolio",
    className: "w-full  bg-white p-5",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container relative w-full mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container my-4 mx-auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(sectionHeader, {
          title: "Portfolio",
          titleColor: "text-[#2c3e50]",
          bgColor: "bg-[#2c3e50]",
          borderColor: "border-blue-500",
          textColor: "text-[#2c3e50]"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Carousel, {
        cardData: cardData,
        currentCardIndex: currentCardIndex,
        prevSlideHandler: prevSlideHandler,
        nextSlideHandler: nextSlideHandler
      })]
    })
  });
}

/* harmony default export */ const portfolio = (Portfolio);
;// CONCATENATED MODULE: ./components/contact/index.js





const inputData = [{
  id: "1",
  type: "text",
  placeholder: "Name",
  ariaLabel: "Full Name"
}, {
  id: "2",
  type: "email",
  placeholder: "Email",
  ariaLabel: "email"
}, {
  id: "3",
  type: "tel",
  placeholder: "Phone Number",
  ariaLabel: "Phone Number"
}, {
  id: "4",
  type: "text",
  placeholder: "Message",
  ariaLabel: "Message"
}];
const subFooterData = [{
  id: "location",
  title: "Location",
  content: "London, United Kingdom"
}, {
  id: "aroundTheWeb",
  title: "Around The Web",
  content: ""
}, {
  id: "mindset",
  title: "Mindset",
  content: "'Knowledge economy is the only asset in which purchasing power only depends on your attention and time. Idriss Aberkane'"
}];

function FormItems() {
  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    action: "",
    className: "col-span-1 p-5 mx-auto",
    children: inputData.map(input => {
      return input.placeholder === "Message" ? /*#__PURE__*/jsx_runtime_.jsx("textarea", {
        className: " bg-transparent placeholder-white border-b-4 border-white w-full text-3xl text-black min-h-[8em] py-3 focus:outline-none",
        type: input.type,
        placeholder: input.placeholder,
        "aria-label": input.ariaLabel
      }, input.id) : /*#__PURE__*/jsx_runtime_.jsx("input", {
        className: " bg-transparent placeholder-white border-b-4 border-white w-full text-3xl text-white py-3 focus:outline-none",
        type: input.type,
        placeholder: input.placeholder,
        "aria-label": input.ariaLabel
      }, input.id);
    })
  });
}

function Formbutton() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    className: "bg-white w-[5em] text-[#1abc9c] text-xl font-semibold rounded px-4 py-2 m-5",
    children: ["Send", " "]
  });
}

function FormContainer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container mx-auto w-full md:w-1/2",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-1  place-content-center place-items-center px-3 py-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx(FormItems, {}), /*#__PURE__*/jsx_runtime_.jsx(Formbutton, {})]
    })
  });
}

function SubFooter() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid grid-cols-1 mx-auto md:grid-cols-3 w-full p-5 md:p-10 bg-[#2c3e50] place-content-center gap-3",
    children: subFooterData.map(data => {
      return data.id === "aroundTheWeb" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-span-1 p-2 md:p-5 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-white text-3xl font-semibold p-3",
          children: data.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col md:flex-row  justify-around items-center m-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaLinkedinIn, {
            className: "text-white text-3xl rounded-2xl outline outline-4 m-2 h-full py-2 px-3 w-auto"
          }), /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
            className: "text-white text-3xl  rounded-2xl outline outline-4 py-2 m-2 px-3 h-full w-auto"
          })]
        })]
      }, data.id) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-span-1 p-2 md:p-5 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-white text-3xl font-semibold p-3",
          children: data.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-white text-lg w-full inline-block ont-semibold  p-2 md:p-4 m-2",
          children: data.content
        })]
      }, data.id);
    })
  });
}

function Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "Contact",
    className: "w-full h-full bg-[#1abc9c] ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container w-full mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(sectionHeader, {
        title: "Contact",
        titleColor: "text-white",
        bgColor: "bg-white",
        borderColor: "border-[#2c3e50]",
        textColor: "text-white"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FormContainer, {}), /*#__PURE__*/jsx_runtime_.jsx(SubFooter, {})]
  });
}

/* harmony default export */ const contact = (Contact);
// EXTERNAL MODULE: ./loader.js
var loader = __webpack_require__(9405);
;// CONCATENATED MODULE: ./pages/index.js








 // import clientPromise from "../lib/mongodb"




function Home({
  data
}) {
  const {
    0: stackdata,
    1: setStackdata
  } = (0,external_react_.useState)(data); //console.log(stackdata)
  //isConnected = isConnected
  //? console.log("Connected to MongoDB", stackdata)
  //: console.log("Not Connected to MongoDB")

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-1 min-h-screen  flex-col items-center justify-center scroll-smooth",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Create Next App"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "CreLatorDesign",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(header, {
      loader: loader["default"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex w-full flex-1 flex-col items-center justify-center text-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(stackSection, {
        stackData: stackdata,
        loader: loader["default"]
      }), /*#__PURE__*/jsx_runtime_.jsx(about, {}), /*#__PURE__*/jsx_runtime_.jsx(portfolio, {
        loader: loader["default"]
      }), /*#__PURE__*/jsx_runtime_.jsx(contact, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
}
async function getServerSideProps(context) {
  try {
    // await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    //const client = await clientPromise
    //const db = client.db("my_Database")
    //const collection = await db.collection("test").find({}).toArray()
    //const newCollection = await db.createCollection("test")
    //const data = await collection
    //console.log(db.collection("test"))
    //const newData = await db.collection("test").insertOne({ cardData })
    //
    // Then you can execute queries against your database like so:
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json(); //console.log(data)
    //const stack = JSON.parse(JSON.stringify(data))

    if (data === null || data === undefined) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        data: data
      }
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        isConnected: false
      }
    };
  }
}

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61], () => (__webpack_exec__(9446)));
module.exports = __webpack_exports__;

})();