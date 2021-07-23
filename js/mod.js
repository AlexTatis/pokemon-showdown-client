let unwanted_elements = [
    document.getElementById("header"),
    document.getElementById("maintabbarbottom"),
]

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
} , false)

