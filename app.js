const list = document.querySelector(".list");
const form = document.querySelector("form");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Take info from json
const getJson = async () => {
  const response = await fetch("questions.json");
  const data = await response.json();
  return data;
};
// Create list
const createList = async () => {
  const data = await getJson();
  

Array.from(data).forEach((element,index) => {

  const commonParagraph = document.createElement("div");
  commonParagraph.classList.add("question");
  // commonParagraph.classList.add("oneLine");
  

  const createList = document.createElement("div");
  createList.innerHTML = element;
  

  const newParagraph = document.createElement('div');
 

  const newYesInput = document.createElement("INPUT");
    Object.assign (newYesInput, {
      type: "radio",
      name: "myRadios"+index,
      className: "input-yes",
      value: "yes",
      id: "yes"+index,

    });
  
    const labelYes = document.createElement("label");
    labelYes.innerHTML = "Yes";

    const newNoInput = document.createElement("INPUT");
    Object.assign (newNoInput, {
      type: "radio",
      name: "myRadios"+index,
      className: "input-no",
      value: "no",
      id: "no"+index,
      required: true

    });
  
    const labelNo = document.createElement("label");
    labelNo.innerHTML = "No";

    list.appendChild(commonParagraph);
    commonParagraph.appendChild(createList);
    commonParagraph.appendChild(newParagraph);
    newParagraph.appendChild(newYesInput);
    newParagraph.appendChild(labelYes);
    newParagraph.appendChild(newNoInput);
    newParagraph.appendChild(labelNo);
  });
  


const yesInputs = document.querySelectorAll(".input-yes");
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  yesInputsCounter()
  overLay();

  
  



});

function yesInputsCounter(){
  count = 0;
  for (var i=0; i<yesInputs.length; i++) {
  if (yesInputs[i].checked === true){
      count++;
     
  }
}};
};

function messageOfCount (number) {
  let message;
  if (number>9) {
    message = "You are good as fuck";
  } else if (number>6) {
    message = "You are pretty good";
  } else if (number>3) {
    message = "You need to learn more";
  } else {
    message = "Have you ever heard that English language exists?";
  } 
  return message;
}

function overLay () {
modal.classList.add("active");
modal.innerHTML = `
<h2> ${messageOfCount(count)} </h2>
<button onclick="resetPage()"> Try the test again</button> 
`
overlay.classList.add("active");
}

function resetPage() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  location.reload();
}


function newTest(){
  createList();
};

newTest();
