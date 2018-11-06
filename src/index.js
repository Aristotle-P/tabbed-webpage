const node = document.createElement("p");
const textNode = document.createTextNode("Aristotle's Famous New York Hot Wings");
const imgNode = document.createElement("IMG");
node.appendChild(textNode);
imgNode.setAttribute("src", "../images/rest.jpg")
document.getElementById("content").appendChild(imgNode)
//const blurbNode = document.createElement(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae fugit voluptate! Illum nostrum deserunt, quae ipsa nobis voluptatem provident beatae harum aut fuga sit fugit molestiae ducimus! Vero, mollitia?</p>`)
