// DOM Children, parent and childnodes

console.log(window.document, "Document")
// Use $0 to select perticular element to modify its css in console
console.log(document.body.firstChild, document.body.firstElementChild)
let child = document.body.childNodes[1];
console.log(child)
console.log(child.firstChild, child.firstElementChild, "Different between first child and first element child")
console.log(child.childNodes, child.children) // children for htmls elements
console.log(child.children[2].previousSibling, child.children[2].nextElementSibling)

// DOM Ids, Classes and More
let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"
document.getElementById("purplebox").style.backgroundColor = "yellow"
document.querySelector(".box").style.backgroundColor = "blue"
// You have to use loop, because querySelectorAll create an array, so need to iterate it apply styles
// document.querySelectorAll(".box").forEach(e => {
//      e.style.backgroundColor = "green"
// })
console.log(document.getElementsByTagName("div"), "Get element by ag name")
let mtch = document.getElementsByTagName("div")
console.log(mtch[4].matches("#purplebox"), mtch[3].matches("#purplebox"))
console.log(mtch[1].closest(".container"), mtch[1].closest("#purplebox"))
console.log(document.querySelector(".container").contains(boxes[2]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))