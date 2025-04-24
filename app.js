import {
  helpSectionHTML,
  aboutSectionHTML,
  githubSectionHTML,
  ifConfigSectionHTML,
} from "./commands.js";

const command = document.getElementById("command");
const commandOutput = document.getElementById("command-output");
commandOutput.innerHTML = ipConfigSectionHTML;
console.log(ipConfigSectionHTML);

console.log(command);
console.log(commandOutput);
