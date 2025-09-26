
//declare variables
const myInput = document.querySelector("#myInput");
const toUpper = document.querySelector("#toUpper");
const transformBtn = document.querySelector("#transformBtn");

//add event listener to button
transformBtn.addEventListener("click", tranformToUpperCase);

//allow to enter with Enter-key
myInput.addEventListener("keydown", e =>{
    if(e.key === "Enter"){
        tranformToUpperCase();
    }
});

let inputResult = "";

//everything that happens when smth is entered
function tranformToUpperCase(){

    //read input
    inputResult = myInput.value;

    //inform if nothing is entered
    if(inputResult.trim().length === 0){
        toUpper.setAttribute("class", "notice");
        toUpper.textContent = `Please write something to enable transformation!`;
        return;
    }

    toUpper.classList.remove("notice");

    toUpper.textContent = `Here is your word in upper case: `;

    //create <span> to enter input result in bold
    const boldSpan = document.createElement("span");
   
    //show entered string in upper case, in bold
    boldSpan.classList.add("toUpperInput");
    boldSpan.textContent = inputResult.toUpperCase();
    toUpper.appendChild(boldSpan);
    
    //clear input 
    myInput.value = "";
}

