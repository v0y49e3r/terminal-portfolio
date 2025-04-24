import init from "./commands.js";

(async () => {
  const {
    helpSectionHTML,
    aboutSectionHTML,
    githubSectionHTML,
    whoAmISectionHTML,
    contactSectionHTML,
    ifConfigSectionHTML,
    skillsSectionHTML,
    projectsSectionHTML,
    achievementsSectionHTML,
    website,
    websiteSectionHTML,
  } = await init();

  const command = document.getElementById("command");
  const commandOutput = document.getElementById("command-output");

  // Hiển thị mặc định nếu cần (VD: ifConfigSectionHTML)
  commandOutput.innerHTML = ifConfigSectionHTML;

  const commandHistory = [];
  let historyIndex = 0;

  const focusOnCommandInput = () => command.focus();
  document.addEventListener("keydown", focusOnCommandInput);

  const upKeyIsPressed = (event) => event.which == 38 && historyIndex > 0;
  const downKeyIsPressed = (event) =>
    event.which == 40 && historyIndex < commandHistory.length - 1;
  const clearKeyIsPressed = (event) =>
    (event.metaKey || event.ctrlKey) && event.which == 75;
  const enterKeyIsPressed = (event) => event.which == 13;

  const getPreviouslyExecutedCommand = () => {
    historyIndex--;
    command.value = commandHistory[historyIndex];
  };

  const getNextExecutedCommand = () => {
    historyIndex++;
    command.value = commandHistory[historyIndex];
  };

  const showExecutedCommand = () => {
    const typedCommand = `<div class="input-container">
          <span class="input-label">></span>
          <span class="input-command">${command.value}</span>
        </div>`;
    commandOutput.innerHTML += typedCommand;
  };

  const redirectToGUIWebsite = () => {
    setTimeout(() => {
      const anchor = document.createElement("a");
      anchor.href = website;
      anchor.target = "_blank";
      anchor.click();
    }, 2000);
  };

  const showCommandNotFound = () => {
    return `<div class="command-result">
            <span class="command-not-found">${command.value}</span>
            : command not found. Type 'help' to view a list of available commands.
          </div>`;
  };

  const emptyCommandInput = () => {
    command.value = "";
  };

  const scrollToBottomEnd = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const showCommandOutput = (output) => {
    commandOutput.innerHTML += output;
  };

  const addCommandToHistory = () => {
    commandHistory.push(command.value);
  };

  const resetHistoryIndex = () => {
    historyIndex = commandHistory.length;
  };

  const emptyTerminal = () => {
    commandOutput.innerHTML = "";
  };

  const executeCommand = () => {
    const userEnteredCommand = command.value.trim().toLowerCase();

    switch (userEnteredCommand) {
      case "help":
        showCommandOutput(helpSectionHTML);
        addCommandToHistory();
        break;
      case "whoami":
        showCommandOutput(whoAmISectionHTML);
        addCommandToHistory();
        break;
      case "about":
        showCommandOutput(aboutSectionHTML);
        addCommandToHistory();
        break;
      case "skills":
        showCommandOutput(skillsSectionHTML);
        addCommandToHistory();
        break;
      case "projects":
        showCommandOutput(projectsSectionHTML);
        addCommandToHistory();
        break;
      case "achievements":
        showCommandOutput(achievementsSectionHTML);
        addCommandToHistory();
        break;
      case "website":
        showCommandOutput(websiteSectionHTML);
        addCommandToHistory();
        redirectToGUIWebsite();
        break;
      case "contact":
        showCommandOutput(contactSectionHTML);
        addCommandToHistory();
        break;
      case "clear":
        emptyTerminal();
        addCommandToHistory();
        break;
      default:
        commandOutput.innerHTML += showCommandNotFound();
    }

    resetHistoryIndex();
    emptyCommandInput();
    scrollToBottomEnd();
  };

  const evaluateCommandInput = (event) => {
    if (downKeyIsPressed(event)) {
      getPreviouslyExecutedCommand();
      return;
    }

    if (upKeyIsPressed(event)) {
      getNextExecutedCommand();
      return;
    }

    if (enterKeyIsPressed(event)) {
      showExecutedCommand();
      executeCommand();
      return;
    }

    if (clearKeyIsPressed(event)) {
      resetHistoryIndex();
      emptyTerminal();
    }
  };

  command.addEventListener("keydown", evaluateCommandInput);
})();
