const schema = {
    name: "",
    imgSrc: [],
    liveLink: "",
    repoLink: "",
    description: {
      head: "",
      tools: [],
      features: [],
    },
  };

const data = [
  {
    name: "Steps Todo",
    imgSrc: [
      "steps_to.png",
      "steps_to_mobile (childrens).png",
    ],
    liveLink: "https://sironi-00.github.io/steps-to",
    repoLink: "https://github.com/Sironi-00/steps-to",
    description: {
      head: "A Todo App stores parent and children(s) todos.",
      tools: ["Html", "CSS", "JavaScript"],
      features: [
        "Responsive",
        "Use local Storage to store todos across sessions.",
        "Use Cookies to store theme preferrence.",
        "Dark & Light modes",
        "Export & Import todos as JSON file",
      ],
    },
  },
  {
    name: "Nintendo Switch",
    imgSrc: ["nintendo.png", "nintendo_blue.png"],
    liveLink: "https://sironi-00.github.io/Playground/handheld_console",
    repoLink:
      "https://github.com/Sironi-00/Playground/tree/main/handheld_console",
    description: {
      head: "A Nintendo Switch design site that as functional buttons and screen ",
      tools: ["Html", "CSS", "JavaScript"],
      features: [
        "The user can draw on the screen with the D-pads (directional keys)",
        "More features can be access with all other buttons, such as changing Background or Foreground colors",
        "Dark & Light modes",
        "The visuals are only Html and CSS, and Dynamics and logic are handle by JavaScript.",
      ],
    },
  },
  {
    name: "Interactive Quotes",
    imgSrc: ["interactive_quotes.png"],
    liveLink: "https://sironi-00.github.io/interactive-quotes",
    repoLink: "https://github.com/Sironi-00/interactive-quotes",
    description: {
      head: "A site that randomly generate Quiz from quotes.",
      tools: ["Html", "CSS", "JavaScript"],
      features: [
        "Reload gets a different quote (selected at random).",
        "Reveal fills the auto automatically, Allowing the user to view complete quote. ",
        "Clear to return quotes to unfilled state",
        "Using an API would result in broader and diverse quotes",
      ],
    },
  },
  {
    name: "Jamming",
    imgSrc: [],
    liveLink: "",
    repoLink: "",
    description: {
      head: "Make Spotify music playlist using the Spotify API and React",
      tools: ["npm", "JavaScript", "React"],
      features: ["Make request to API", "Search and Render fetched song.", "Saves playlist in user's account"],
    },
  }, {
    name: "Adopt A Pet",
    imgSrc: [],
    liveLink: "",
    repoLink: "https://github.com/Sironi-00/adopt-a-pet",
    description: {
      head: "Using React Router to render pets and filter based on user's search",
      tools: ["React", "ReactRouter", "npm"],
      features: ["Search for pet", "Pets based on Category"],
    },
  }, {
    name: "E-Commerce API",
    imgSrc: ["eCommerce-api.png"],
    liveLink: "",
    repoLink: "https://github.com/Sironi-00/eCommerceProject",
    description: {
      head: "This is a Rest API that use OpenAPI Swagger documentation for the routes and functions",
      tools: ["ExpressJs", "Postgres", "Swagger", "NodeJs"],
      features: ["A Restful API", "An API server uses postgres", "Session authentication with express-session"],
    },
  }
];

export default data;
