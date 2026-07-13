/**
 * Constants
 */
const MOVE_STEP = 10;

/**
 * DOM Elements
 */
const cursor = document.getElementById("cursor");
const typerElement = document.getElementById("typer");
const textAreaInput = document.getElementById("texter");
const terminal = document.getElementById("terminal");

/**
 * ASCII Art for Banner
 */
const ASCII_ART = [
  '<span class="ascii-art">88      a8P                                                                        </span>',
  '<span class="ascii-art">88    ,88\'                                                                  ,d     </span>',
  '<span class="ascii-art">88  ,88"                                                                    88     </span>',
  '<span class="ascii-art">88,d88\'       ,adPPYba,   8b,dPPYba,   ,adPPYba,   ,adPPYba,  8b,dPPYba,  MM88MMM  </span>',
  '<span class="ascii-art">8888"88,     a8"     "8a  88P\'   `"8a  I8[    ""  a8P_____88  88P\'    "8a   88     </span>',
  '<span class="ascii-art">88P   Y8b    8b       d8  88       88   `"Y8ba,   8PP"""""""  88       d8   88     </span>',
  '<span class="ascii-art">88     "88,  "8a,   ,a8"  88       88  aa    ]8I  "8b,   ,aa  88b,   ,a8"   88,    </span>',
  '<span class="ascii-art">88       Y8b  `"YbbdP\'"   88       88  `"YbbdP\'"   `"Ybbd8"\'  88`YbbdP\'"    "Y888  </span>',
  '<span class="ascii-art">                                                              88                   </span>',
  '<span class="ascii-art">                                                              88                   </span>'
];

/**
 * Initialize the terminal on window load
 */
window.onload = () => {
  init();
  setupTabNavigation();
};

/**
 * Initialize cursor position and render banner
 */
function init() {
  cursor.style.left = "0px";
  renderBanner();
}

/**
 * Setup tab navigation for links
 */
function setupTabNavigation() {
  const links = document.querySelectorAll('a');
  let currentLinkIndex = 0;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      links[currentLinkIndex].focus();
      currentLinkIndex = (currentLinkIndex + 1) % links.length;
    }
  });
}

/**
 * Render the banner based on screen size
 */
function renderBanner() {
  renderMultipleLines(ASCII_ART, 80, "", true);
  setTimeout(() => {
    renderMultipleLines(TERMINAL_INFO, 80, "highlightColor");
  }, 1200);
}

/**
 * Event listener for text area input
 */
textAreaInput.addEventListener("input", (event) => {
  typerElement.textContent = event.target.value;
  handleAutocomplete(event.target.value);
});

textAreaInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(textAreaInput);
  } else {
    moveCursor(event.target.value.length, event);
  }
});

/**
 * Move the cursor based on arrow key input
 * @param {number} count - The number of characters in the input
 * @param {Event} event - The keyboard event
 * @param {number} moveStep - The step size for cursor movement
 */
function moveCursor(count, event, moveStep = MOVE_STEP) {
  const keyCode = event.key;
  if (!isArrowKey(keyCode)) return;
  const currentLeft = getCurrentLeftOffset(cursor);
  const newPosition = calculateCursorPosition(keyCode, currentLeft, count, moveStep);
  if (newPosition !== undefined) cursor.style.left = newPosition + "px";
}

document.getElementById("mobileInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(event.target);
  } else {
    moveCursor(event.target.value.length, event);
  }
});

/**
 * Get the current left offset of an element
 * @param {HTMLElement} element - The element to get the offset for
 * @returns {number} - The current left offset
 */
function getCurrentLeftOffset(element) {
  return parseInt(element.style.left) || 0;
}

/**
 * Calculate the new cursor position based on the key pressed
 * @param {string} key - The key pressed
 * @param {number} currentLeftOffset - The current left offset of the cursor
 * @param {number} count - The number of characters in the input
 * @param {number} moveStep - The step size for cursor movement
 * @returns {number|undefined} - The new cursor position or undefined if no change
 */
function calculateCursorPosition(key, currentLeftOffset, count, moveStep = MOVE_STEP) {
  if (isLeftArrow(key) && currentLeftOffset >= -((count - 1) * moveStep)) {
    return currentLeftOffset - moveStep;
  } else if (isRightArrow(key) && currentLeftOffset + moveStep <= 0) {
    return currentLeftOffset + moveStep;
  }
}

/**
 * Check if the key is the right arrow key
 * @param {string} key - The key pressed
 * @returns {boolean} - True if the key is the right arrow key, false otherwise
 */
function isRightArrow(key) {
  return key === "ArrowRight";
}

/**
 * Check if the key is the left arrow key
 * @param {string} key - The key pressed
 * @returns {boolean} - True if the key is the left arrow key, false otherwise
 */
function isLeftArrow(key) {
  return key === "ArrowLeft";
}

/**
 * Check if the key is an arrow key
 * @param {string} key - The key pressed
 * @returns {boolean} - True if the key is an arrow key, false otherwise
 */
function isArrowKey(key) {
  return key === "ArrowLeft" || key === "ArrowRight";
}

/**
 * Handle autocomplete suggestions based on input
 * @param {string} input - The input text
 */
function handleAutocomplete(input) {
  const suggestions = suggestCommands(input);
  if (suggestions.length > 0) {
    console.log("Suggestions:", suggestions);
  }
}

/**
 * Suggest commands based on input
 * @param {string} input - The input text
 * @returns {Array} - An array of suggested commands
 */
function suggestCommands(input) {
  return [];
}

/**
 * Render a line of text with optional style and delay
 * @param {string} text - The text to render
 * @param {string} style - The style to apply
 * @param {number} time - The delay before rendering
 * @param {boolean} asciiArt - Whether the text is ASCII art
 */
function renderLine(text, style, time, asciiArt = false) {
  let formattedText = asciiArt ? formatASCIIArt(text) : formatText(text);
  setTimeout(() => {
    const next = document.createElement("p");
    if (style) {
      next.classList.add(style);
    }
    if (asciiArt) {
      next.classList.add('ascii-art');
    }
    next.innerHTML = `<span class="${style}">${formattedText}</span>`;
    contentHook?.parentNode?.insertBefore(next, contentHook);
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "smooth"
    });
  }, time);
}
