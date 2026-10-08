/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        title: "Classic Photobooth",
        type: "Web",

        desc:
            "An interactive classic photobooth experience built for the web, allowing users to capture and arrange photographs into a photobooth-style layout.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],

        learned:
            "Building interactive browser experiences, handling user interactions with JavaScript and creating a polished responsive interface.",

        image: "classic-photobooth.png",

        link: "https://mahishah-git.github.io/ClassicPhotoBooth/",

        color: "#E6E0F8",

        pat: "dots"
    },


    {
        title: "PVC Telescope",
        type: "Hardware",

        desc:
            "A DIY telescope created using PVC components. The project documents the construction process along with Moon images captured through the telescope.",

        tech: [
            "Hardware",
            "Optics",
            "DIY"
        ],

        learned:
            "Hands-on experimentation, basic optical concepts, physical construction and documenting a technical project from the building stage to the final result.",

        image: "pvc-telescope.png",

        link: "https://mahishah-git.github.io/TelescopePVC/",

        color: "#FADFCD",

        pat: "rings"
    },


    {
        title: "Shringaar - Figma",
        type: "Design",

        desc:
            "A UI/UX design project created in Figma, exploring visual design, interface structure and an e-commerce experience for jewellery.",

        tech: [
            "Figma",
            "UI/UX",
            "Visual Design"
        ],

        learned:
            "Creating interface layouts, designing user flows, working with visual hierarchy and developing a consistent design system.",

        image: "shringaar-figma.png",

        link: "https://www.figma.com/proto/965KPMTAZHQzrnWSoN61ae/Shringar-Indian-Jewelry-App?node-id=1-2&t=XCQKbtB0dhM03mux-1",

        color: "#F6DCE5",

        pat: "lines"
    },


    {
        title: "Who's That Pokémon?",
        type: "Web",

        desc:
            "An interactive Pokémon guessing game where players identify Pokémon from silhouettes. The game contains a collection of 20 Pokémon and selects 10 unique Pokémon for each game.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        learned:
            "Managing game state in JavaScript, random selection without repeats, dynamic content, user interaction and conditional feedback.",

        image: "whos-that-pokemon.png",

        link: "https://mahishah-git.github.io/who-is-that-pokemon/",

        color: "#DCE9F7",

        pat: "check"
    },


    {
        title: "Pokémon Theme Portfolio",
        type: "Web",

        desc:
            "An experimental Pokémon-themed interactive portfolio designed as a small Pokémon world, featuring a Pokédex, Pokémon-themed skill badges and project links.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        learned:
            "Designing an interactive themed interface, structuring multiple interactive components and using web technologies to create a distinctive portfolio experience.",

        image: "pokemon-portfolio.png",

        link: "https://mahishah-git.github.io/pokemon-world/",

        color: "#DFEBDB",

        pat: "dots"
    },


    {
        title: "Perception",
        type: "Vision",

        desc:
            "A work-in-progress project exploring computer vision and visual perception, with the goal of experimenting with how computers can interpret and respond to visual information.",

        tech: [
            "Computer Vision",
            "Python",
            "OpenCV"
        ],

        learned:
            "Exploring computer vision concepts, webcam-based interaction and the early stages of connecting visual perception with interactive systems.",

        image: "perception.png",

        link: "https://mahishah-git.github.io/Perception/",

        color: "#F1E8D2",

        pat: "grid",

        wip: true
    }

];


/* =========================================================
   SKILLS
   ========================================================= */

const skills = {

    "Programming & Development": [
        "Python",
        "C++",
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
    ],

    "Design & Tools": [
        "Figma",
        "UI/UX",
        "Blender",
        "Three.js",
        "Git",
        "GitHub",
        "VS Code"
    ],

    "Exploring": [
        "Computer Vision",
        "Creative Technology",
        "Interactive Experiences"
    ]

};


/* =========================================================
   HERO ROTATING TEXT
   ========================================================= */

const words = [
    "web apps",
    "interactive experiences",
    "designs in Figma",
    "3D visuals in Blender",
    "creative projects",
    "computer vision projects"
];


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

const $ = id => document.getElementById(id);


const esc = value =>
    String(value).replace(
        /[&<>"]/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        }[char])
    );


const pills = array =>
    array
        .map(item => `<span class="pill">${esc(item)}</span>`)
        .join("");


const two = number =>
    String(number + 1).padStart(2, "0");


/* =========================================================
   PROJECT GRID
   ========================================================= */

$("grid").innerHTML = projects
    .map((project, index) => {

        return `
            <li data-type="${project.type}">

                <button
                    class="card-p"
                    data-i="${index}"
                    aria-label="Open details for ${esc(project.title)}"
                >

                    <div
                        class="cover pat-${project.pat}"
                        style="--c:${project.color}"
                    >

                        <img
                            src="${esc(project.image)}"
                            alt="${esc(project.title)} project preview"
                        >

                        <span class="type">
                            ${esc(project.type)}
                        </span>

                        <b>${two(index)}</b>

                    </div>


                    <div class="body">

                        <h3>
                            ${esc(project.title)}
                        </h3>


                        ${
                            project.wip
                                ? `<span class="wip">Work in progress</span>`
                                : ""
                        }


                        <p>
                            ${esc(project.desc)}
                        </p>


                        <div class="pills">
                            ${pills(project.tech)}
                        </div>

                    </div>

                </button>

            </li>
        `;

    })
    .join("");


/* =========================================================
   PROJECT FILTERS
   ========================================================= */

const types = [
    "All",
    ...new Set(projects.map(project => project.type))
];


$("chips").innerHTML = types
    .map(
        (type, index) => `
            <button
                class="chip"
                data-t="${esc(type)}"
                aria-pressed="${index === 0}"
            >
                ${esc(type)}
            </button>
        `
    )
    .join("");


$("chips").addEventListener("click", event => {

    const button = event.target.closest(".chip");

    if (!button) return;

    document.querySelectorAll(".chip").forEach(chip => {

        chip.setAttribute(
            "aria-pressed",
            chip === button
        );

    });


    document.querySelectorAll("#grid li").forEach(item => {

        item.hidden =
            button.dataset.t !== "All" &&
            item.dataset.type !== button.dataset.t;

    });

});


/* =========================================================
   PROJECT DIALOG
   ========================================================= */

const dlg = $("dlg");


$("grid").addEventListener("click", event => {

    const button = event.target.closest(".card-p");

    if (!button) return;

    const project = projects[button.dataset.i];


    $("dNum").textContent =
        two(Number(button.dataset.i));


    $("dTitle").textContent =
        project.title;


    $("dText").textContent =
        project.desc;


    $("dTech").innerHTML =
        pills(project.tech);


    $("dLearn").textContent =
        project.learned;


    $("dImage").src =
        project.image;


    $("dImage").alt =
        `${project.title} project preview`;


    $("dLink").href =
        project.link;


    dlg.showModal();

});


/* Close button */

$("dClose").addEventListener("click", () => {
    dlg.close();
});


/* Close when clicking outside panel */

dlg.addEventListener("click", event => {

    if (event.target === dlg) {
        dlg.close();
    }

});


/* =========================================================
   SKILLS
   ========================================================= */

$("skillGrid").innerHTML =
    Object.entries(skills)
        .map(
            ([group, items]) => `
                <div class="col-md-4">

                    <div class="group">

                        <h3>
                            ${esc(group)}
                        </h3>

                        <div class="pills">
                            ${pills(items)}
                        </div>

                    </div>

                </div>
            `
        )
        .join("");


/* =========================================================
   HERO ROTATING WORD
   ========================================================= */

const wordElement = $("word");

let wordIndex = 0;


if (
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    setInterval(() => {

        wordElement.classList.add("out");

        setTimeout(() => {

            wordIndex =
                (wordIndex + 1) % words.length;

            wordElement.textContent =
                words[wordIndex];

            wordElement.classList.remove("out");

        }, 350);

    }, 2400);

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

$("year").textContent =
    new Date().getFullYear();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menu = $("links");
const menuButton = $("menuBtn");


menuButton.addEventListener("click", () => {

    const isOpen =
        menu.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


menu.addEventListener("click", event => {

    if (event.target.tagName === "A") {

        menu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const navLinks = [
    ...menu.querySelectorAll("a")
];


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    );

                });

            });

        },
        {
            rootMargin: "-45% 0px -50% 0px"
        }
    );


document
    .querySelectorAll("header[id], section[id]")
    .forEach(section => {

        navObserver.observe(section);

    });


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("in");

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });