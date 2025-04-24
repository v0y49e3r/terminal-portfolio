let helpSectionHTML,
  aboutSectionHTML,
  githubSectionHTML,
  ifConfigSectionHTML,
  // whoamiSectionHTML,
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

// const getWhoami = () => {
//   let renderData = '<div class="command-result"><ul class="data-list">';
//   const yep = [
//     "Just started coding 🧑‍💻",
//     "Aspiring hacker 💻✨",
//     "Learning Networking & Linux 🌐🐧",
//   ];
//   for (let i = 0; i < yep.length; ++i) {
//     renderData += '<li class="data-li">' + yep[i] + "</li>";
//   }
//   renderData += "</ul></div>";
//   return renderData;
// };

//ifconfig
const url = "https://ipinfo.io/json";

let IpDetails = [];

const getIPDetails = async () => {
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        IpDetails.push(data);
      });
  } catch (error) {
    console.log(error);
  }
};

const getIfConfig = async () => {
  if (IpDetails.length === 0) {
    await getIPDetails();
  }
  const IP = IpDetails[0];
  console.log(IP);
  console.log(IP.ip);
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

// them cai loi object Promise ( chatgpt )
(async () => {
  ifConfigSectionHTML = await getIfConfig();
})();
//help
const getHelp = () => {
  let renderData = '<div class="command-result"><dl>';
  const availableCommands = [
    // { command: "whoami", description: "What i do" },
    { command: "about", description: "Know about me" },
    { command: "github", description: "Link to my github" },
    { command: "ifconfig", description: "Just ipconfig" },
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
// URL GitHub của bạn
const github = "https://github.com/v0y49e3r";
const getGithub = () => {
  const renderData =
    '<div class="command-result">Wait... while connecting to my GitHub <a href="' +
    github +
    '" target="_blank">here</a></div>';
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

// //render data
// helpSectionHTML = getHelp();
// whoamiSectionHTML = getWhoami();
// githubSectionHTML = getGithub();
// contactSectionHTML = getContact();
// ifConfigSectionHTML = getIfConfig();
// aboutSectionHTML = getAbout();
// export {
//   helpSectionHTML,
//   aboutSectionHTML,
//   githubSectionHTML,
//   whoamiSectionHTML,
//   ifConfigSectionHTML,
//   contactSectionHTML,
// };
const init = async () => {
  const helpSectionHTML = getHelp();
  const aboutSectionHTML = getAbout();
  const githubSectionHTML = getGithub();
  // const whoamiSectionHTML = getWhoami();
  const contactSectionHTML = getContact();
  const ifConfigSectionHTML = await getIfConfig();

  return {
    helpSectionHTML,
    aboutSectionHTML,
    githubSectionHTML,
    // whoamiSectionHTML,
    contactSectionHTML,
    ifConfigSectionHTML,
  };
};

export default init;
