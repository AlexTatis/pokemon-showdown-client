let unwanted_elements = [
    document.getElementById("header"),
    document.getElementById("maintabbarbottom"),
    document.getElementById("pad"),
    
]

for (i = 0; i < unwanted_elements.length; i++) {
    unwanted_elements[i].remove()
}
