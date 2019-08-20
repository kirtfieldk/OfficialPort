const navEducation = document.querySelector("#education")
const navProjects = document.getElementById("projects")
const navTech = document.getElementById("tech")
const navWork = document.getElementById("work")
//  Light up the nav components
const navVcu = document.getElementById("vcu")
const navEarthsis = document.getElementById("earthsis")
const egr = document.getElementById("egr")
const ytClone = document.getElementById("ytclone")
const languages = document.getElementById("languages")
const softwear = document.getElementById("softwear")
const freelance = document.getElementById("freelance")
const contact = document.getElementById("contact")
const title = document.getElementById("nav-title")
// Display bio of tech 
const vueBtn = document.getElementById("vue-btn")
const adobeBtn = document.getElementById("adobe-btn")
const reactBtn = document.getElementById("react-btn")
const nodeBtn = document.getElementById("node-btn")
const firebaseBtn = document.getElementById("firebase-btn")
const mongoBtn = document.getElementById("mongo-btn")
const dockerBtn = document.getElementById("docker-btn")
// ICONS
const eduIcon = document.getElementById("education-icon")
const projectIcon = document.getElementById("projects-icon")
const techIcon = document.getElementById("tech-icon")
const workIcon = document.getElementById("work-icon")
const contactIcon = document.getElementById("contact-icon")

const infoBody = document.getElementById("info-body")
// TECH BIOS
const vue = document.getElementById("vue")
const adobe = document.getElementById("adobe")
const react = document.getElementById("react")
const node = document.getElementById("node")
const firebase = document.getElementById("firebase")
const mongo = document.getElementById("mongo")
const docker = document.getElementById("docker")
// Reducer Button
const reducer = document.getElementById("reducer")
const leftNav = document.getElementById("left-nav")
// Init conditions
navEducation.classList.add("yellow")
navVcu.classList.add("background-color")





document.querySelector(".info-body").addEventListener("scroll", () => {
    var scrollTop = document.querySelector(".info-body").scrollTop;

    // console.log(scrollTop)
    if (scrollTop < 476) {
        navEducation.classList.add("yellow")
        navVcu.classList.add("background-color")
        navProjects.classList.remove("yellow")
        navEarthsis.classList.remove("background-color")
    }
    if (scrollTop > 476) {
        navEducation.classList.remove("yellow")
        navVcu.classList.remove("background-color")
        navProjects.classList.add("yellow")
        navTech.classList.remove("yellow")
        navEarthsis.classList.add("background-color")
        egr.classList.remove("background-color")
        if (scrollTop > 1150) {
            navEarthsis.classList.remove("background-color")
            egr.classList.add("background-color")
            ytClone.classList.remove("background-color")
        }
        if (scrollTop > 1700) {
            ytClone.classList.add("background-color")
            egr.classList.remove("background-color")
            languages.classList.remove("background-color")
        }

    }
    if (scrollTop > 2200) {
        navProjects.classList.remove("yellow")
        navTech.classList.add("yellow")
        navWork.classList.remove("yellow")

        ytClone.classList.remove("background-color")
        languages.classList.add("background-color")
        softwear.classList.remove("background-color")
        if (scrollTop > 2600) {
            softwear.classList.add("background-color")
            languages.classList.remove("background-color")
            freelance.classList.remove("background-color")
        }
    }
    if (scrollTop > 2800) {
        navTech.classList.remove("yellow")
        navWork.classList.add("yellow")

        freelance.classList.add("background-color")
        softwear.classList.remove("background-color")
    }
});
const addHidden = (value) => {
    let arrToUse = []
    if (value === "bio")
        arrToUse = [vue, adobe, react, node, firebase, mongo, docker]
    else
        arrToUse = [navEducation, navProjects, title, navTech, navWork, navVcu, navEarthsis, egr, ytClone, languages, softwear, freelance, contact]
    arrToUse.filter((doc) => {
        return !doc.classList.contains("hidden")
    }).map(doc => {
        doc.classList.contains("hidden") ? doc.classList.add("") : doc.classList.add("hidden")
    })
}
const makeVis = (value) => {
    let arrToUse = []
    if (value === "icon")
        arrToUse = [eduIcon, projectIcon, techIcon, workIcon, contactIcon]
    arrToUse.filter((doc) => {
        return doc.classList.contains("hidden")
    }).map(doc => {
        doc.classList.contains("hidden") ? doc.classList.remove("hidden") : doc.classList.add("")
    })
}
vueBtn.addEventListener("click", () => {
    addHidden("bio")
    vue.classList.remove("hidden")
})
adobeBtn.addEventListener("click", () => {
    addHidden("bio")
    adobe.classList.remove("hidden")
})
reactBtn.addEventListener("click", () => {
    addHidden("bio")
    react.classList.remove("hidden")
})
nodeBtn.addEventListener("click", () => {
    addHidden("bio")
    node.classList.remove("hidden")
})
firebaseBtn.addEventListener("click", () => {
    addHidden("bio")
    firebase.classList.remove("hidden")
})
mongoBtn.addEventListener("click", () => {
    addHidden("bio")
    mongo.classList.remove("hidden")
})
dockerBtn.addEventListener("click", () => {
    addHidden("bio")
    docker.classList.remove("hidden")
})

reducer.addEventListener("click", () => {
    addHidden("icon")
    leftNav.classList.add("shrink")
    makeVis("icon")
    // infoBody.classList.add("grid-2-12")
})



