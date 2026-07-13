# 💻 Rajeev's Interactive CLI Portfolio

An interactive, browser-based Unix-style command-line terminal portfolio styled with the popular **Dracula** theme. 

🚀 **Live Demo:** [https://rajeev91691.github.io/cli-portfolio/](https://rajeev91691.github.io/cli-portfolio/)

---

## 🎨 Dracula Theme Color Palette
This terminal matches the classic Dracula terminal color scheme:
*   **Background:** `#282A36` (Dark Violet)
*   **Text Foreground:** `#F8F8F2` (Off-White)
*   **Selection Accent (Commands):** `#BD93F9` (Purple)
*   **Directory Highlights:** `#8BE9FD` (Cyan)
*   **Hyperlinks:** `#FF79C6` (Pink)

---

## 🛠️ Supported Commands
Type any of the following commands in the terminal and press `Enter`:

*   `about` - Learn more about my background, research interests, and full-stack focus.
*   `social` - Get links to my GitHub, LinkedIn, and Next.js portfolio.
*   `education` - Show academic history (GITAM University, Visakhapatnam) and research internship (IIT Kanpur).
*   `projects` - View detailed breakdowns and deployment links for my engineering projects.
*   `skills` - List my languages, frameworks, databases, and DevOps tools.
*   `email` - Feel free to reach out directly.
*   `ls` - List virtual directory contents (`github`, `music`, `leetcode`).
*   `cd <directory>` - Navigate and open the corresponding links in a new tab.
*   `history` - Display the history of executed commands in this session.
*   `quote` - Retrieve a random programmer quote.
*   `echo <text>` - Print any given string to the terminal console.
*   `clear` - Wipe the terminal screen clean.
*   `help` - Show all available commands.
*   `youtube` - Standard developer easter egg! 😉

---

## 🚀 Running Locally
Since this is a lightweight, pure static website (HTML5, CSS3, and JavaScript), it runs directly from the local file system.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Rajeev91691/cli-portfolio.git
    cd cli-portfolio
    ```
2.  **Open in Browser:**
    Simply double-click `index.html` in your file explorer to open it natively. No server setup required!
3.  *(Optional)* **Start Local Server:**
    If you want to run it via an HTTP server:
    ```bash
    python -m http.server 8000
    ```
    Then visit `http://localhost:8000`.

---

## ⚙️ Project Architecture
*   `index.html` - Contains the terminal viewport containers and the mobile/desktop input fields.
*   `css/style.css` - Theme colors, layout grid, typography, custom scrollbar, and caret animations.
*   `js/commands.js` - Contains the static data structure variables (banner art, lists, arrays).
*   `js/inputRenderer.js` - Manages text input rendering, autocompletion hooks, and custom cursor offsets.
*   `js/commandParser.js` - Main shell router that parses user commands, routes to specific functions, and executes terminal state changes.
