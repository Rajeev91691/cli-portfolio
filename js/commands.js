// Define usedQuotes set
const usedQuotes = new Set();

// Constants for social media links and user information
const TWITTER = "https://x.com/RajeevNandanD"; // Placeholder or his actual x handle if he has one
const LINKEDIN = "https://linkedin.com/in/rajeev-nandan-damarla";
const LEETCODE = "https://leetcode.com/u/Rajeev91691/";
const GITHUB = "https://github.com/Rajeev91691";
const EMAIL = "rajeevnandan382@gmail.com";
const USERNAME = "Rajeev91691";

// Array of quotes for the 'quote' command
const QUOTES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "There are 10 types of people in the world: those who understand binary and those who don't.",
  "I would love to change the world, but they won’t give me the source code.",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "I don't always test my code, but when I do, I do it in production.",
  "To understand recursion, you must first understand recursion.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "There are only two hard things in Computer Science: cache invalidation and naming things.",
  "If at first you don’t succeed; call it version 1.0.",
  "Programming is like writing a book... except if you miss out a single comma on page 126 the whole thing makes no sense.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "Why do programmers hate nature? It has too many bugs."
];

// Array of lines for the 'about' command
const ABOUT = [
  "<br>",
  "Hello there!👋",
  "              ",
  "I'm Rajeev Nandan Damarla, a Software Engineer & AI Developer",
  "with a passion for Deep Learning and Full-Stack Web Development! 🧑‍💻",
  "                            ",
  "My journey with technology began",
  "through exciting projects like",
  "optimizing Stable Diffusion model serving latency at IIT Kanpur,",
  "structuring vector databases for semantic document search,",
  "and building high-performance interactive Web3D portfolios.",
  "                             ",
  "I thrive on solving complex",
  "problems using Python, React, and TypeScript. My expertise",
  "spans WebGL (Three.js), API design (FastAPI/Node.js), and MLOps.",
  "                                     ",
  "I am always eager to explore cutting-edge",
  "technologies and build production-grade, low-latency applications. 🚀",
  "<br>"
];

// Array of social media links for the 'social' command
const SOCIAL = [
  "<br>",
  'linkedin       <a href="' +
    LINKEDIN +
    '" target="_blank">linkedin/' +
    USERNAME +
    "</a>",
  'github         <a href="' +
    GITHUB +
    '" target="_blank">github/' +
    USERNAME +
    "</a>",
  'leetcode       <a href="' +
    LEETCODE +
    '" target="_blank">leetcode/' +
    USERNAME +
    "</a>",
  'portfolio      <a href="https://rajeevnandan.rweb.site" target="_blank">rajeevnandan.rweb.site</a>',
  "<br>"
];

// Array of project descriptions for the 'projects' command
const PROJECTS = [
  "<br>",
  "Here are some of my featured projects:",
  "<br>",
  "<strong> - Insight GPT (Semantic Search & RAG Pipeline) </strong>",
  "Developed a scalable RAG web application featuring a vector search engine powered by local FAISS indexing.",
  "Designed asynchronous document ingestion pipelines that parsed 500+ PDF manuals (80K pages), achieving a 35% decrease",
  "in query latency through Redis caching and embedding dimension optimization.",
  "<a href='https://huggingface.co/spaces/Rajeev91691/genai-assistant' target='_blank' rel='noopener noreferrer'>Hugging Face Space</a>",
  "Tech stack: Python, FastAPI, FAISS, Sentence Transformers, Redis",
  "<br>",
  "<strong> - Interactive Web3D Portfolio Website </strong>",
  "Built an editorial portfolio using Next.js 15 (App Router), TypeScript, and Tailwind CSS.",
  "Developed a high-performance scroll-driven animation pipeline utilizing ImageBitmap video-frame extraction (90 frames)",
  "to achieve constant 60 FPS and custom GLSL vertex/fragment shaders in WebGL via Three.js.",
  "<a href='https://rajeevnandan.rweb.site' target='_blank' rel='noopener noreferrer'>Live Link</a>",
  "Tech stack: Next.js 15, TypeScript, Tailwind CSS, Three.js, GSAP",
  "<br>",
  "<strong> - Real-Time Object Detection (Computer Vision Serving) </strong>",
  "Implemented real-time DETR-ResNet-50 object detection at 15 FPS with < 100 ms inference latency.",
  "Quantized models post-training, reducing memory footprint by 25% and startup latency by 40%.",
  "<a href='https://github.com/Rajeev91691' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>",
  "Tech stack: PyTorch, OpenCV, React.js, WebSockets",
  "<br>",
  "<strong> - Candidate Intake & Automated Recruiter Dashboard </strong>",
  "Built a secure candidate intake platform featuring a multi-step registration wizard with Zod schema validation.",
  "Architected a recruiter dashboard equipped with live telemetry cards, fuzzy matching algorithms, and complex index filtering.",
  "<a href='https://goldman-intake-portal.vercel.app' target='_blank' rel='noopener noreferrer'>Live Link</a>",
  "Tech stack: React, Node.js, Express, MongoDB, Vercel, Docker",
  "<br>",
  "<strong>Check out more projects in my </strong> <a href='" + GITHUB + "' class='command' target='_blank' rel='noopener noreferrer'>GitHub profile</a>",
  "<br>"
];

// Array of available commands for the 'help' command
const COMMAND_LIST = [
  "<br>",
  '<span class="command">about</span>          Learn more about me',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">education</span>      Show my education',
  '<span class="command">projects</span>       View some of my projects',
  '<span class="command">history</span>        Show command history',
  '<span class="command">email</span>          Feel free to reach out',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">echo</span>           Print any given string',
  '<span class="command">ls</span>             List directory content',
  '<span class="command">cd &lt;directory&gt</span> Change directory',
  '<span class="command">help</span>           Display all commands',
  '<span class="command">quote</span>          Get a random quote',
  '<span class="command">skills</span>         Show my skills',
  '<span class="command">youtube</span>        Easter egg video',
  "<br>"
];

// Array of directories for the 'ls' command
const DIRECTORIES = ["<br>", "github", "music", "leetcode", "<br>"];

// Array of email information for the 'email' command
const EMAIL_INFO = [
  "                 ",
  "✉️ " + "<a href=mailto:" + EMAIL + ">" + EMAIL + "</a>",
  "                  "
];

// Array of sudo information for the 'sudo' command
const SUDO = [
  "                                                                ",
  'Only rajeev has <span class="command">admin</span> privileges :(',
  "                                                                "
];

// Array of education information for the 'education' command
const EDUCATION_INFO = [
  "<br><strong>Bachelor of Technology in Computer Science and Engineering</strong>",
  "GITAM University, Visakhapatnam  |  2023 - Present",
  "Current CGPA: 9.27 / 10  |  Expected Graduation: May 2027",
  "                                                  ",
  "<strong>Generative AI & Machine Learning Research Intern</strong>",
  "E&ICT Academy, IIT Kanpur  |  June 2025 - August 2025",
  "• Optimized distributed model inference serving systems on Linux GPU environments, reducing latency by 22% via FP16 batching.",
  "• Programmed interactive evaluation harnesses in React to benchmark prompt engineering taxonomies.",
  "                                                  ",
  "<strong>Key Coursework</strong>",
  "• Machine Learning, Deep Learning, Natural Language Processing, Computer Vision",
  "• Data Structures & Algorithms, Database Management Systems, Compiler Design, Linear Algebra, Statistics",
  "<br>"
];

// Array of banner lines for the terminal (ASCII Art for RAJEEV)
const BANNER = [
  "██████╗  █████╗   █████╗███████╗███████╗██╗   ██╗",
  "██╔══██╗██╔══██╗   ╚══██║██╔════╝██╔════╝██║   ██║",
  "██████╔╝███████║      ██║█████╗  █████╗  ██║   ██║",
  "██╔══██╗██╔══██║██    ██║██╔══╝  ██╔══╝  ╚██╗ ██╔╝",
  "██║  ██║██║  ██║╚██████╔╝███████╗███████╗ ╚████╔╝ ",
  "╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝  ╚═══╝  ",
  "                                                 ",
  "Type 'help' to see list of available commands."
];

// Array of terminal information for the 'help' command
const TERMINAL_INFO = [
  "Welcome to Rajeev Nandan Damarla's interactive web terminal portfolio.",
  "For a list of available commands, type <span class=\"command\">'help'</span>.",
];

// Array of terminal information for mobile view
const TERMINAL_INFO_MOBILE = [
  "Welcome to Rajeev's terminal web portfolio!",
  "                                 ",
  "For a list of available commands,",
  "type <span class=\"command\">'help'</span>.",
  "                                          ",
  "Version (1.0)",
  "                                          "
];

// Array of banner lines for mobile view
const MOBILE_BANNER = [
  "██████╗  █████╗  ██████╗███████╗███████╗██╗   ██╗",
  "██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝██║   ██║",
  "██████╔╝███████║   ██║   █████╗  █████╗  ██║   ██║",
  "██╔══██╗██╔══██║   ██║   ██╔══╝  ██╔══╝  ╚██╗ ██╔╝",
  "██║  ██║██║  ██║   ██║   ███████╗███████╗ ╚████╔╝ ",
  "╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝  ╚═══╝  "
];

// Link to the resume
const RESUME_LINK = "https://github.com/Rajeev91691/Certifications"; // Or update as needed

// Array of skills for the 'skills' command
const SKILLS = [
  "<br>",
  "Languages: Python, JavaScript, TypeScript, Java, C/C++, SQL",
  "Frameworks: React.js, Next.js (App Router), Node.js, Express, FastAPI",
  "Databases: MongoDB, PostgreSQL, MySQL, SQLite, FAISS Vector DB",
  "Tools: Git, GitHub, Docker, Linux, Vercel, Redis, CI/CD (GitHub Actions), Jest, PyTest",
  "<br>"
];

// Function to get a random quote
function getRandomQuote() {
  const availableQuotes = QUOTES.filter(quote => !usedQuotes.has(quote));
  const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
  usedQuotes.add(randomQuote);
  if (usedQuotes.size === QUOTES.length) {
    usedQuotes.clear();
  }
  return randomQuote;
}

// Function to process commands
function processCommand(command) {
  switch (command) {
    case "skills":
      renderMultipleLines(SKILLS, 80);
      break;
    case "quote":
      const randomQuote = getRandomQuote();
      renderMultipleLines([randomQuote], 80);
      break;
  }
}

// Add youtube to the command suggestions
function suggestCommands(input) {
  const commands = [
    "help", "about", "social", "projects", "email", "banner", "curriculum",
    "clear", "ls", "sudo", "education", "pwd", "echo", "cd", "history", "quote", "skills", "youtube"
  ];
  return commands.filter(cmd => cmd.includes(input));
}
