const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//1. Header Logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.setAttribute('alt', "Great Idea! Company logo.")
logo.className = "logo";

//2. Header Nav
let navAnchorContent = document.querySelectorAll('nav a');

  // 2a.save Nav object keys and values as separate arrays
const navItemKeys = Object.keys(siteContent.nav);
const navItemValues = Object.values(siteContent.nav);

  // 2b.assign a unique str for nav-items 
let navStr = "nav-item";

 // 2c.filter nav values to match with "nav-item" string
const navItemArr = navItemValues.filter((item,index) => {
  if(navItemKeys[index].indexOf(navStr) > -1) {
  return item;}
})

  //2d.loop through NavAnchorContent elements and assign NavItemArr values to each one
navAnchorContent.forEach((item,index) => {
  navAnchorContent[index].textContent = navItemArr[index];
})

navAnchorContent.forEach(item => item.style.color = "green");

  //2e. prepend new Nav element
  const parentNav = document.querySelector('nav');
  let newNavTestimonials = document.createElement("a");
  newNavTestimonials.textContent = "Testimonials";
  parentNav.prepend(newNavTestimonials);
  newNavTestimonials.style.color = "green";

  //2f. append new Nav element
  let newCareers = document.createElement('a');
  newCareers.textContent = "Careers";
  parentNav.append(newCareers);
  newCareers.style.color = "green";

//3.CTA selector
  //3a.select CTA H1 and change its content
let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent.cta["h1"];

  //3b. Select button and change its content
let button = document.querySelector("button");
button.innerHTML = siteContent.cta["button"];

  //3c. Select cta img and change its src
let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent['cta']['img-src'];


//4.Main Content

  //4a. Main Content Img

    //4a-1. select main img and change its src
let middleImage = document.getElementById('middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

  //4b. Main Content H4
    //4b-1. select main content all h4
let mainContH4 = document.querySelectorAll('.text-content h4');

    //4b-2. save main-content object's values and keys to an array
const mainContKeys = Object.keys(siteContent["main-content"]);
const mainContValues = Object.values(siteContent["main-content"]);
    //4b-3. declare a unique str to match h4 text
var h4Str = "h4";

    //4b-4. filter and save mainContValues to a new array to match only "h4" key namings
const mainContH4Arr = mainContValues.filter((item,index) => {
  if(mainContKeys[index].indexOf(h4Str) > -1) {
    return item;
  }
}
)
    //4b-5. add mainContH4Arr's each value into mainContH4 elements
mainContH4.forEach((item,index) => {
  mainContH4[index].textContent = mainContH4Arr[index];
})

  //4c. Main content paragraphs
    //4c-1. Select Main content paragraphs
let mainContentParag = document.querySelectorAll('.text-content p');

    //4c-2. declare and assign a unique value to match "content" string in "main-content" object's keys
var contentStr = "content";
    //4c-3. filter and save mainContValues to a new array to match only "main-content" key namings
const mainContParagArr = mainContValues.filter((item,index) => {
  if(mainContKeys[index].indexOf(contentStr) > -1) {
    return item;
  }
}
)
    //4c-4. loop through each mainContentParag item and update its text to match mainContParagArr values
mainContentParag.forEach((item,index) => {
  mainContentParag[index].textContent = mainContParagArr[index];
})




//5.Contact 
  //5a. Contact H4 selector and change content
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];
  //5b. Contact p selector and change content
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent=siteContent.contact["address"];
contactP[1].textContent=siteContent.contact["phone"];
contactP[2].textContent=siteContent.contact["email"];

//6. Footer selector and change content
let footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer["copyright"];





