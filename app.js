const btn2 = document.getElementById("decision1").style.display = "none";
document.getElementById("decision2").style.display = "none";
document.getElementById("decision3").style.display = "none";
let scene = 0;
document.getElementById("decision0").onclick = () => {
    gameInit(1)
}

const gameInit = (scene) => {
    if (scene === 1) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "block";
        // Change page text
        document.getElementById("headerText").textContent = "It's Monday Morning";
        document.getElementById("mainText").textContent = "You wake up and you have a decision to make. What will you do today?";
        // change button text  
        document.getElementById("decision1").textContent = "Go to work";
        document.getElementById("decision2").textContent = "Check the mail";
        document.getElementById("decision3").textContent = "Go out for coffee";

        document.getElementById("decision1").onclick = () => { gameInit(2); }
        document.getElementById("decision2").onclick = () => { gameInit(3); }
        document.getElementById("decision3").onclick = () => { gameInit(4); }
    } else if (scene === 2) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "What a boring day."
        document.getElementById("mainText").textContent = "But, at least work has free coffee. You go home. Do you want to:";
        // change button text  
        document.getElementById("decision1").textContent = "Start a new day";
        document.getElementById("decision2").textContent = "End the game";

        document.getElementById("decision1").onclick = () => { gameInit(1); }
        document.getElementById("decision2").onclick = () => { gameInit(100); }
    } else if (scene === 100) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "block";
        document.getElementById("decision1").style.display = "none";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "The End."
        document.getElementById("mainText").textContent = "";
        // change button text  
        document.getElementById("decision0").textContent = "Restart";

        document.getElementById("decision1").onclick = () => { gameInit(1); }
    }
}




// const changeScene = (decision) => {

//     let headerText = "";
//     let mainText = "";
//     let decision1 = "";
//     let decision2 = "";
//     let decision3 = "";

//     switch (currentScene) {
//         case 1:
//             currentScene = 1;
//             headerText = "It's Monday Morning"
//             mainText = "You wake up and you have a decision to make. What will you do today?";
//             document.getElementById("decision0").style.display = "none";
//             document.getElementById(decision1).style.display = "block";
//             document.getElementById(decision2).style.display = "block";
//             document.getElementById(decision3).style.display = "block";
//             decision1 = "Go to work";
//             decision2 = "Check the mail";
//             decision3 = "Go out for coffee";
//             break;
//         case 2:
//             if (decision == 1) {
//                 currentScene = 2;
//                 mainText = "What a boring day. But, at least work has free coffee. You go home";
//                 decision1 = "Start a new day";
//                 decision2 = "The end";
//                 decision3 = "";
//                 document.getElementById(decision3).style.visibility = "hidden";
//             } else if (decision == 2) {
//                 currentScene = 2;
//                 mainText = "You have mail! Whoa, it's an invite from a mysterious wizzard. Do you...";
//                 decision1 = "Go on an adventure?";
//                 decision2 = "Tuen the wizzard down?";
//                 decision3 = "";
//                 document.getElementById(decision3).style.visibility = "hidden";
//             } else {
//                 currentScene = 2;
//                 mainText = "The queue at the coffee place is massive. You decide to...";
//                 decision1 = "Go to work";
//                 decision2 = "Go home and check the mail";
//                 decision3 = "";
//                 document.getElementById(decision3).style.visibility = "hidden";
//             }

//             document.getElementById(sceneImg).src = "" + currentScene + ".png";

//             replaceText("scenetext", message);
//             replaceText("decision1", decision1);
//             replaceText("decision2", decision2);
//             replaceText("decision3", decision3);
//     }



// }