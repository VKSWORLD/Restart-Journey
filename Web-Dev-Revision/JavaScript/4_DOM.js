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