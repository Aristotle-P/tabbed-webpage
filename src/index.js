import tabOne from './tab-1';
import tabTwo from './tab-2';
import tabThree from './tab-3';
const titleNode = document.createElement("p");
const textForTitleNode = document.createTextNode("Aristotle's Famous New York Hot Wings");
const blurbNode = document.createElement("p");
const textForBlurbNode = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae fugit voluptate! Illum nostrum deserunt, quae ipsa nobis voluptatem provident beatae harum aut fuga sit fugit molestiae ducimus! Vero, mollitia?");
const imgNode = document.createElement("IMG");
titleNode.appendChild(textForTitleNode);
blurbNode.appendChild(textForBlurbNode);
imgNode.setAttribute("src", "../images/rest.jpg");
imgNode.setAttribute("width", "500");
imgNode.setAttribute("height", "300");

document.getElementById("content").appendChild(titleNode);
document.getElementById("content").appendChild(imgNode);
document.getElementById("content").appendChild(blurbNode);

document.body.appendChild(tabOne());

document.getElementById("tab-1").addEventListener("click", function(e) {
  let div = document.getElementById("tab");
  div.parentNode.removeChild(div);
  if (e.target && e.target.nodeName == "LI") {
    document.body.appendChild(tabOne());
  }
});

document.getElementById("tab-2").addEventListener("click", function(e) {
  let div = document.getElementById("tab");
  div.parentNode.removeChild(div);
  if (e.target && e.target.nodeName == "LI") {
    document.body.appendChild(tabTwo());
  }
});

document.getElementById("tab-3").addEventListener("click", function(e) {
  let div = document.getElementById("tab");
  div.parentNode.removeChild(div);
  if (e.target && e.target.nodeName == "LI") {
    document.body.appendChild(tabThree());
  }
});