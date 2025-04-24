import { IpDetails, fetchData } from "./getIpdetails.js";

let helpSectionHTML,
  aboutSectionHTML,
  githubSectionHTML,
  ifConfigSectionHTML,
  whoamiSectionHTML,
  contactSectionHTML;

//about
const about = "Hi! I am a beginner in programming";
const getAbout = () => {
  const renderData =
    '<div class ="command-result"><p class="about-text">' +
    about +
    "</p></div>";
  return renderData;
};

//whoami

const getWhoami = () => {
  let renderData = '<div class="command-result">';
  const yep = [
    "Just started coding 🧑‍💻",
    "Aspiring hacker 💻✨",
    "Learning Networking & Linux 🌐🐧",
  ];
  for (let i = 0; i < yep.length; ++i) {
    renderData += '<li class="data-li">' + yep[i] + "</li>";
  }
  renderData += "</div>";
  return renderData;
};

//ifconfig
const getIfConfig = () => {
  const IP = IpDetails[0];
  console.log(IpDetails.length);
  let renderData = '<div class="command-result"><ul class="data-list">';
  renderData += '<li class="data-li">🌐 Ip: ' + IP.ip + "</li>";
  renderData += '<li class="data-li">📡 Hostname: ' + IP.hostname + "</li>";
  renderData += '<li class="data-li">🏙️ City: ' + IP.city + "</li>";
  renderData += '<li class="data-li">🏢 Org: ' + IP.org + "</li>";
  renderData += '<li class="data-li">🗺️ Region: ' + IP.region + "</li>";
  renderData += '<li class="data-li">🌍 Country: ' + IP.country + "</li>";
  renderData += '<li class="data-li">📍 Location: ' + IP.loc + "</li>";
  renderData += "</ul></div>";
  return renderData;
};

//help
const getHelp = () => {
  let renderData = '<div class="command-result"><dl>';
  const availableCommands = [
    { command: "whoami", description: "What i do" },
    { command: "about", description: "Know about me" },
    { command: "github", description: "Link to my github" },
    { command: "ipconfig", description: "Just ipconfig" },
    { command: "clear", description: "Clear termianl" },
    { command: "Contact", description: "Please contact to me!!!" },
  ];
  for (let i = 0; i < availableCommands.length; i++) {
    const cmd = availableCommands[i];
    renderData =
      renderData +
      '<dt class="data-dt">' +
      cmd.command +
      '</dt><dd class="data-dd"> -' +
      cmd.description +
      "</dd>";
  }
  renderData = renderData + "</dl><div>";
  return renderData;
};

//github
const github = "https://github.com/v0y49e3r";
const getGithub = () => {
  const renderData =
    '<div class="command-result">Wait...for connect to my Github <a href ="' +
    github +
    '">' +
    "</div>";
  return renderData;
};

//contact
const email = "vanthienphamjp@gmail.com";
const phone = "080-2035-3424";
const getContact = () => {
  let renderData = '<div class="command-result"><dl>';
  const contacts = [
    { method: "gmail", contactPlace: email },
    { method: "phone", contactPlace: phone },
    // { method: "line", contactPlace: line },
  ];

  for (let i = 0; i < contacts.length; i++) {
    renderData +=
      '<dt class="data-dt">' +
      contacts[i].method +
      '</dt><dd class="data-dd"> -' +
      contacts[i].contactPlace +
      "</dd>";
  }
  renderData += "</dl></div>";
  return renderData;
};

//render data
helpSectionHTML = getHelp();
whoamiSectionHTML = getWhoami();
githubSectionHTML = getGithub();
contactSectionHTML = getContact();
ifConfigSectionHTML = getIfConfig();
aboutSectionHTML = getAbout();
export {
  helpSectionHTML,
  aboutSectionHTML,
  githubSectionHTML,
  whoamiSectionHTML,
  ifConfigSectionHTML,
  contactSectionHTML,
};
