let unwanted_elements = [
    document.getElementById("header"),
    document.getElementById("maintabbarbottom"),
]

let team_imgs = document.getElementsByClassName("team-img")

node = document.createElement("div")
node.setAttribute("id", "modded-topbar")
document.body.appendChild(node)


for (i = 0; i < unwanted_elements.length; i++) {
    try {unwanted_elements[i].remove()
    } catch {}
}

pokeball_button = document.getElementById("pokeball_button")

pokeball_button.addEventListener('click',() => {
    black = document.createElement("div")
    black.setAttribute("id", "black-curtain")
    document.body.appendChild(black)

    document.getElementById("center-on-page").style.visibility = "hidden"
    document.getElementsByClassName("menugroup")[0].style.visibility = "visible"
    document.getElementsByClassName("menugroup")[0].style.zIndex = "1"

    black.addEventListener('click', () => {
        document.getElementById("center-on-page").style.visibility = "visible"
        document.getElementsByClassName("menugroup")[0].style.visibility = "hidden"
        document.getElementsByClassName("menugroup")[0].style.zIndex = "0" 
        black.style.visibility = "hidden"
    }, false)

} , false)

window.addEventListener("message", ({ data, source }) => {
    localStorage.showdown_teams = data[1]
    for(i = 0; i < 6; i++) {
        team_imgs[i].src = `frontend/node_modules/pokemon-assets/assets/img/pokemon/${data[0][i].species.toLowerCase()}.png`
    }

})
