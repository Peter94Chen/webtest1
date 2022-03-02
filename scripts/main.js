var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';


function Test(num1, num2) {
  let result = num1 * num2;
  return result;
}
var myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'image.jpg') {
    myImage.setAttribute('src', 'images/image2.jpg');
  } else {
    myImage.setAttribute('src', 'image.jpg');
  }
}
var myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  }
  else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
  }

}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
  setUserName();
}
