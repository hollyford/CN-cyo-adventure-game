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
    } else if (scene === 3) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "A Wizzard!";
        document.getElementById("mainText").textContent = "You receive an invite from a mysterious wizzard";
        // change button text  
        document.getElementById("decision1").textContent = "Go on an adventure!";
        document.getElementById("decision2").textContent = "Turn the wizzard down";
        document.getElementById("decision3").textContent = "";

        document.getElementById("decision1").onclick = () => { gameInit(6); }
        document.getElementById("decision2").onclick = () => { gameInit(5); }

    } else if (scene === 4) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "none";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "block";
        // Change page text
        document.getElementById("headerText").textContent = "Coffee";
        document.getElementById("mainText").textContent = "The queue is humungous! You decide to leave";
        // change button text  
        document.getElementById("decision2").textContent = "Go to work";
        document.getElementById("decision3").textContent = "Go home";

        document.getElementById("decision2").onclick = () => { gameInit(2); }
        document.getElementById("decision3").onclick = () => { gameInit(1); }
    } else if (scene === 5) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "Oh. Really?."
        document.getElementById("mainText").textContent = "Bit boring of you.";
        // change button text  
        document.getElementById("decision1").textContent = "Start a new day";
        document.getElementById("decision2").textContent = "End the game";

        document.getElementById("decision1").onclick = () => { gameInit(1); }
        document.getElementById("decision2").onclick = () => { gameInit(100); }
    } else if (scene === 6) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "Wooohoooo!";
        document.getElementById("mainText").textContent = "You jump onto the back of a uicorn and head off into the sunset...";
        // change button text  
        document.getElementById("decision1").textContent = "Continue";
        document.getElementById("decision2").textContent = "";
        document.getElementById("decision3").textContent = "";

        document.getElementById("decision1").onclick = () => { gameInit(7); }
    } else if (scene === 7) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "Shivver";
        document.getElementById("mainText").textContent = "You reach a deep dark wood";
        // change button text  
        document.getElementById("decision1").textContent = "Go around";
        document.getElementById("decision2").textContent = "Enter the wood";
        document.getElementById("decision3").textContent = "";

        document.getElementById("decision1").onclick = () => { gameInit(8); }
        document.getElementById("decision2").onclick = () => { gameInit(9); }
    } else if (scene === 8) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "YOU DIED?!."
        document.getElementById("mainText").textContent = "Turns out, the woods are so dark and so deep that they may as well go on forever. You died of hunger and exhaustion!";
        // change button text  
        document.getElementById("decision1").textContent = "Start a new day";
        document.getElementById("decision1").onclick = () => { gameInit(1); }
    } else if (scene === 9) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "Fairy";
        document.getElementById("mainText").textContent = "You meet a fairy in the woods";
        // change button text  
        document.getElementById("decision1").textContent = "Follow the fairy";
        document.getElementById("decision2").textContent = "Run away!";

        document.getElementById("decision1").onclick = () => { gameInit(10); }
        document.getElementById("decision2").onclick = () => { gameInit(11); }
    } else if (scene === 10) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "YOU DIED?!."
        document.getElementById("mainText").textContent = "The fairy ate you for dinner. What? You didn't see that one coming? Fairies of evil!";
        // change button text  
        document.getElementById("decision1").textContent = "Start a new day";
        document.getElementById("decision1").onclick = () => { gameInit(1); }
    } else if (scene === 11) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "EXIT!";
        document.getElementById("mainText").textContent = "You find the end of the woods. Turns out, it was really skinny in the middle! Imagine if you had decided to go around...";
        // change button text  
        document.getElementById("decision1").textContent = "Continue";
        document.getElementById("decision2").textContent = "";
        document.getElementById("decision3").textContent = "";

        document.getElementById("decision1").onclick = () => { gameInit(12); }
    } else if (scene === 12) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "block";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "King";
        document.getElementById("mainText").textContent = "You meet the wizzard's cousin who just happens to be the king of a far away land";
        // change button text  
        document.getElementById("decision1").textContent = "Go home and have a nap after an exausting adventure";
        document.getElementById("decision2").textContent = "Follow the king";

        document.getElementById("decision1").onclick = () => { gameInit(1); }
        document.getElementById("decision2").onclick = () => { gameInit(13); }
    } else if (scene === 13) {
        // Show/hide buttons
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "block";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "THE END";
        document.getElementById("mainText").textContent = "You followed the king. You live hapily ever after";
        // change button text  
        document.getElementById("decision1").textContent = "Start again?";
        document.getElementById("decision2").textContent = "";
        document.getElementById("decision3").textContent = "";

        document.getElementById("decision1").onclick = () => { gameInit(1); }
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
    } else {
        document.getElementById("decision0").style.display = "none";
        document.getElementById("decision1").style.display = "none";
        document.getElementById("decision2").style.display = "none";
        document.getElementById("decision3").style.display = "none";
        // Change page text
        document.getElementById("headerText").textContent = "Something went wrong"
        document.getElementById("mainText").textContent = "Hit refresh to start again";
    }
}


