// Standard page variables
const headerText = document.getElementById("headerText")
const mainText = document.getElementById("mainText")
const mainImg = document.getElementById("mainImg")
let goBttn = document.getElementById("goBttn")

// buttons
const bttn2 = document.getElementById("bttn12")

// Game code begins
// first page/choice
headerText.textContent = "Welcome to the game"
mainText.textContent = "Hit start to go on an adventure!";
const bttn1 = document.createElement("button");
bttn1.innerHTML = "Start"
goBttn.appendChild(bttn1);
mainImg.setAttribute("src", "./images/placeholder-image.png");


bttn1.addEventListener("click", ()=> {
    let name = prompt("Before we begin, please tell me your name");
    if (name == "" || name == null){
        mainText.textContent = "You didnt enter a name, please try again";
    } else {
        mainText.textContent = `${name}, let's begin... Hit 'Go' to continue`;
    }
const bttn2 = document.createElement("BUTTON");
bttn2.innerHTML = "Go";
bttn2.setAttribute("id", "bttn2")
goBttn.appendChild(bttn2);

})

// second page/choice

// bttn2.addEventListener("click", ()=> {
//     headerText.textContent = "Day1"
//     mainText.textContent = `You wake up. It's Monday morning. ${name}, what do you want to do today? Click choose to see your choices.`
//     const bttn3 = document.createElement("button");
// bttn3.innerHTML = "Choose"
// goBttn.appendChild(bttn3);
// })

// bttn3.addEventListener("click", () => {
//     let choice1 = prompt("Type the 'choice' in the box Do you want to go to survive the 'earthquake', check the 'mail' or 'mind' your own business")
// })

    


// if (begin === true) {
//     
//     
// }