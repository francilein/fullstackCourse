//alert("Hello, World!");

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("myParagraph").innerText =
    "I hope you had a great time working at Exxeta!";
  document.getElementById("myParagraph").style.color = "red";
  document.getElementsByTagName("h1")[0].classList.add("invisible"); // damit style in css bleibt aber man trotzdem style mit js anpassen kann
  document.getElementsByTagName("h1")[1].innerText = "You are fired!!!";
});

document.getElementById("myCheckbox").addEventListener("click", function () {
  if (document.getElementById("myCheckbox").checked) {
    document.getElementById("myParagraph").innerText =
      "I hope you had a great time working at Exxeta!";
    document.getElementById("myParagraph").style.color = "blue";
  } else {
    document.getElementById("myParagraph").innerText = "Hello, World!";
    document.getElementById("myParagraph").style.color = "black";
  }
});
