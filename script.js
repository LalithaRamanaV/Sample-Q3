const inputText=document.querySelector(".input-text");
const h1Button=document.querySelector(".h1");
const h2Button=document.querySelector(".h2");
const h3Button=document.querySelector(".h3");
const showBtn=document.querySelector(".show");
const output=document.querySelector(".output");

showBtn.addEventListener("click",()=>{
  output.innerText=inputText.value;
})
h1Button.addEventListener('click', () => {
  output.style.fontSize = "2em";
  output.style.fontWeight = "bolder";
})
h2Button.addEventListener('click', () => {
  output.style.fontSize = "1.5em";
  output.style.fontWeight = "bolder";
})

h3Button.addEventListener('click', () => {
  output.style.fontSize = "1.17em";
  output.style.fontWeight = "bolder";
})