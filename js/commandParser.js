// Define BASE_ROOT constant
const BASE_ROOT = "guest@rajeevnandan.rweb.site:~$ ";

/**
 * Command parser for CLI application.
 * Handles various commands and renders appropriate responses.
 */

window.onload = () => {
  cursor.style.left = "0px";
  renderBanner();
  textAreaInput.focus();
  document.body.addEventListener('click', () => textAreaInput.focus());
};

let commandHistory = [];
let commandIndex = 0;

/**
 * Processes the given command and renders the appropriate response.
 * @param {string} command - The command to process.
 */
function processCommand(command) {
  try {
    const args = formatCommand(command);
    renderLine('<span class="highlightColor">' + BASE_ROOT + '</span><span class="command">' + command + '</span>', "no-animation", 0);

    switch (args[0]) {
      case "help":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(COMMAND_LIST, 80);
        break;
      case "about":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(ABOUT, 80);
        break;
      case "social":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(SOCIAL, 80);
        break;
      case "projects":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(PROJECTS, 80);
        break;
      case "email":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(EMAIL_INFO, 80);
        break;
      case "clear":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        setTimeout(() => {
          contentHook = clearTerminalKeepAsciiArt(terminal, contentHook);
        }, 1);
        break;
      case "ls":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(DIRECTORIES, 80);
        break;
      case "sudo":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderMultipleLines(SUDO, 80);
        break;
      case "education":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        if (window.matchMedia("(max-width: 600px)").matches) {
          renderMultipleLines(MOBILE_EDUCATION_INFO, 80);
        } else {
          renderMultipleLines(EDUCATION_INFO, 80);
        }
        break;
      case "pwd":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderLine("<br>/home/rajeevnandan/projects/cliPortfolio<br><br>");
        break;
      case "echo":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        const printCommands = args.slice(1).join(" ");
        renderLine("<br>" + printCommands + "<br></br>", 80);
        break;
      case "cd":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        handleCdCommand(args);
        break;
      case "history":
        renderLine("<br>");
        commandHistory.push("<br>");
        renderMultipleLines(commandHistory, 80);
        commandHistory.pop();
        break;
      case "quote":
        const randomQuote = getRandomQuote();
        renderLine(`<br>${randomQuote}<br>`, "highlightColor", 80);
        break;
      case "skills":
        renderMultipleLines(SKILLS, 80);
        break;
      case "youtube":
        commandIndex = addCommandToHistory(args, commandHistory, commandIndex);
        renderLine("Opening YouTube...", 80);
        newTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        break;
      default:
        handleUnknownCommand(args[0]);
        break;
    }
  } catch (error) {
    renderLine(`<br>Error: ${error.message}<br>`, "error", 80);
  }
}

// Wrap the original processCommand function to show/hide loading indicator
const originalProcessCommand = processCommand;
processCommand = function(command) {
  originalProcessCommand(command);
};

/**
 * Handles the 'cd' command.
 * @param {Array} args - The command arguments.
 */
function handleCdCommand(args) {
  if (args[1] === "music") {
    renderLine("Opening music...", 80);
    newTab("https://open.spotify.com/playlist/37i9dQZF1EVJSvZp5AOccI");
  } else if (args[1] === "github") {
    renderLine("Accessing Github...", 80);
    newTab("https://github.com/Rajeev91691?tab=repositories");
  } else if (args[1] === "leetcode") {
    renderLine("Opening Leetcode...", 80);
    newTab("https://leetcode.com/u/Rajeev91691/");
  } else {
    renderLine("Directory not found: " + args.slice(1).join(" "));
  }
}

/**
 * Handles unknown commands by suggesting similar commands.
 * @param {string} input - The unknown command input.
 */
function handleUnknownCommand(input) {
  const suggestions = suggestCommands(input);
  if (suggestions.length > 0) {
    renderLine(`<br>Command not found. Did you mean: ${suggestions.join(", ")}?`);
  } else {
    renderLine("<br>Command not found. For a list of commands, type <span class=\"command\">'help'</span>.");
  }
}

// Event listeners for input handling
textAreaInput.addEventListener("keydown", handleArrowUpKeyPress);
textAreaInput.addEventListener("keydown", handleArrowDownKeyPress);

/**
 * Renders a line of text in the terminal.
 * @param {string} text - The text to render.
 * @param {string} style - The CSS class to apply.
 * @param {number} time - The delay before rendering.
 * @param {boolean} asciiArt - Whether the text is ASCII art.
 */
function renderLine(text, style, time, asciiArt = false) {
  let formattedText = asciiArt ? formatASCIIArt(text) : formatText(text);
  setTimeout(() => {
    const next = createLine(formattedText, style);
    insertLine(next, contentHook);
    scrollToBottom();
  }, time);
}

/**
 * Formats ASCII art text by replacing spaces with non-breaking spaces.
 * @param {string} text - The text to format.
 * @returns {string} - The formatted text.
 */
function formatASCIIArt(text) {
  return text.replaceAll(" ", "&nbsp");
}

/**
 * Formats regular text by replacing double spaces with double non-breaking spaces.
 * @param {string} text - The text to format.
 * @returns {string} - The formatted text.
 */
function formatText(text) {
  return text.replaceAll("  ", "&nbsp;&nbsp");
}

/**
 * Creates a line element with the given text and style.
 * @param {string} text - The text to display.
 * @param {string} style - The CSS class to apply.
 * @returns {HTMLElement} - The created line element.
 */
function createLine(text, style) {
  const line = document.createElement("p");
  line.className = style;
  line.innerHTML = `<span class="${style}">${text}</span>`;
  return line;
}

/**
 * Inserts a line element before the reference element.
 * @param {HTMLElement} element - The element to insert.
 * @param {HTMLElement} referenceElement - The reference element.
 */
function insertLine(element, referenceElement) {
  referenceElement?.parentNode?.insertBefore(element, referenceElement);
}

/**
 * Scrolls the window to the bottom of the page.
 */
function scrollToBottom() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  });
}

/**
 * Clears the input field.
 * @param {HTMLInputElement} inputElement - The input element to clear.
 */
function clearInput(inputElement) {
  inputElement.value = "";
}

/**
 * Renders multiple lines of text in the terminal.
 * @param {Array} lines - The lines of text to render.
 * @param {number} delay - The delay between rendering each line.
 * @param {string} style - The CSS class to apply.
 * @param {boolean} asciiArt - Whether the text is ASCII art.
 */
function renderMultipleLines(lines, delay = 0, style = "", asciiArt = false) {
  lines.forEach((line, index) => {
    renderLine(line, style, index * delay, asciiArt);
  });
}

/**
 * Renders the banner in the terminal.
 */
function renderBanner() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    renderMultipleLines(MOBILE_BANNER, 80, "", true);
    setTimeout(() => {
      renderMultipleLines(TERMINAL_INFO_MOBILE, 80, "highlightColor");
    }, 1200);
  } else {
    renderMultipleLines(BANNER, 80, "", true);
    setTimeout(() => {
      renderMultipleLines(TERMINAL_INFO, 80, "highlightColor");
    }, 1200);
  }
}

/**
 * Clears the terminal content.
 * @param {HTMLElement} root - The root element of the terminal.
 * @param {HTMLElement} hook - The hook element to retain.
 * @returns {HTMLElement} - The new hook element.
 */
function clearTerminal(root, hook) {
  const id = hook.id;
  root.innerHTML = '<a id="' + id + '"></a>';
  return document.getElementById(id);
}

/**
 * Clears the terminal content but keeps the ASCII art.
 * @param {HTMLElement} root - The root element of the terminal.
 * @param {HTMLElement} hook - The hook element to retain.
 * @returns {HTMLElement} - The new hook element.
 */
function clearTerminalKeepAsciiArt(root, hook) {
  const asciiArtElements = Array.from(root.querySelectorAll('.ascii-art'));
  root.innerHTML = '<a id="' + hook.id + '"></a>';
  asciiArtElements.forEach(element => root.insertBefore(element, hook.nextSibling));
  return document.getElementById(hook.id);
}

/**
 * Opens a new tab with the given link.
 * @param {string} link - The URL to open.
 */
function newTab(link) {
  setTimeout(() => {
    window.open(link, "_blank");
  }, 500);
}

/**
 * Adds a command to the command history.
 * @param {Array} commands - The command arguments.
 * @param {Array} historyArray - The command history array.
 * @param {number} currentIndex - The current command index.
 * @returns {number} - The updated command index.
 */
function addCommandToHistory(commands, historyArray, currentIndex) {
  historyArray.push(commands.join(" "));
  return currentIndex + 1;
}

/**
 * Formats a command string into an array of arguments.
 * @param {string} command - The command string.
 * @returns {Array} - The formatted command arguments.
 */
function formatCommand(command) {
  return command.toLowerCase().trim().split(" ");
}

/**
 * Suggests similar commands based on the input.
 * @param {string} input - The input command.
 * @returns {Array} - The suggested commands.
 */
function suggestCommands(input) {
  const commands = [
    "help", "about", "social", "projects", "email", "banner", "curriculum",
    "clear", "ls", "sudo", "education", "pwd", "echo", "cd", "history", "quote", "skills"
  ];
  return commands.filter(cmd => cmd.includes(input));
}

/**
 * Handles the Enter key press event.
 * @param {KeyboardEvent} event - The key press event.
 */
function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(event.target);
  }
}

/**
 * Handles the Arrow Up key press event.
 * @param {KeyboardEvent} event - The key press event.
 */
function handleArrowUpKeyPress(event) {
  if (event.key === "ArrowUp" && commandIndex > 0) {
    commandIndex--;
    event.target.value = commandHistory[commandIndex];
  }
}

/**
 * Handles the Arrow Down key press event.
 * @param {KeyboardEvent} event - The key press event.
 */
function handleArrowDownKeyPress(event) {
  if (event.key === "ArrowDown" && commandIndex < commandHistory.length) {
    commandIndex++;
    event.target.value = commandHistory[commandIndex] || "";
  }
}
