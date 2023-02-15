let countReload = 0;
let countBold = 0;
let countItalic = 0;
let countUnderline = 0;
let countUpperLower = 0;
const message = document.getElementById("message");
document.getElementById("reload").addEventListener("click", function () {
  message.value = "";
});
document.getElementById("bold").addEventListener("click", function () {
  countBold += 1;
  if (countBold % 2 != 0) {
    document.getElementById("bold").style.backgroundColor = "orange";
    document.getElementById("bold").style.borderRadius = "5px";
    message.style.fontWeight = "bold";
  } else {
    document.getElementById("bold").style.backgroundColor = "white";
    message.style.fontWeight = "normal";
  }
});
document.getElementById("italic").addEventListener("click", function () {
  countItalic += 1;
  if (countItalic % 2 != 0) {
    document.getElementById("italic").style.backgroundColor = "orange";
    document.getElementById("italic").style.borderRadius = "5px";
    message.style.fontStyle = "italic";
  } else {
    document.getElementById("italic").style.backgroundColor = "white";
    message.style.fontStyle = "normal";
  }
});
document.getElementById("underline").addEventListener("click", function () {
  countUnderline += 1;
  if (countUnderline % 2 != 0) {
    message.style.textDecoration = "underline";
    document.getElementById("underline").style.backgroundColor = "orange";
    document.getElementById("underline").style.borderRadius = "5px";
  } else {
    document.getElementById("underline").style.backgroundColor = "white";
    message.style.textDecoration = "none";
  }
});
document.getElementById("left-align").addEventListener("click", function () {
  message.style.textAlign = "left";
});
document.getElementById("center-align").addEventListener("click", function () {
  message.style.textAlign = "center";
});
document.getElementById("right-align").addEventListener("click", function () {
  message.style.textAlign = "right";
});
document.getElementById("justify-align").addEventListener("click", function () {
  message.style.textAlign = "justify";
});
document.getElementById("number").addEventListener("click", function () {
  const numberValue = document.getElementById("number").value;
  message.style.fontSize = `${numberValue}px`;
});
document.getElementById("upperLower").addEventListener("click", function () {
  countUpperLower += 1;
  if (countUpperLower % 2 != 0) {
    document.getElementById("upperLower").style.backgroundColor = "orange";
    document.getElementById("upperLower").style.borderRadius = "5px";
    message.style.textTransform = "upperCase";
  } else {
    document.getElementById("upperLower").style.backgroundColor = "white";
    message.style.textTransform = "lowerCase";
  }
});
document.getElementById("color").addEventListener("change", function () {
  const colorValue = document.getElementById("color").value;
  message.style.color = colorValue;
});
