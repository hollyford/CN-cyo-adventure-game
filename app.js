let currentScene = 0;

const replaceNodeText = (id, newText) => {
    let node = document.getElementById(id);
    while (node.firstChild)
        node.removeChild(node.firstChild);
    node.appendChild(document.createTextNode(newText));
}

const changeScene = (decision) => {
    let message = "";
    let decision1 = "";
    let decision2 = "";
    let decision3 = "";

    switch (currentScene) {
        case 0:
            currentScene = 1;
            message = "It's Monday Morning. You wake up and you have a decision to make. What will you do today?";
            decision1 = "Go to work";
            decision2 = "Check the mail";
            decision3 = "Go out for coffee";
            document.getElementById(decision2).style.visibility = "visible";
            document.getElementById(decision3).style.visibility = "visible";
        break;
        case 1: 
            if (decision == 1){
                currentScene = 2;
                message = "What a boring day. But, at least work has free coffee. You go home";
                decision1 = "Start a new day";
                decision2 = "The end";
                decision3 = "";
                document.getElementById(decision3).style.visibility = "hidden";
            } else if (decision == 2) {
                currentScene = 2;
                message = "You have mail! Whoa, it's an invite from a mysterious wizzard. Do you...";
                decision1 = "Go on an adventure?";
                decision2 = "Tuen the wizzard down?";
                decision3 = "";
                document.getElementById(decision3).style.visibility = "hidden";
            } else {
                currentScene = 2;
                message = "The queue at the coffee place is massive. You decide to...";
                decision1 = "Go to work";
                decision2 = "Go home and check the mail";
                decision3 = "";
                document.getElementById(decision3).style.visibility = "hidden";
            }
    }
    replaceNodeText("scenetext", message);
	replaceNodeText("decision1", decision1);
	replaceNodeText("decision2",decision2);
	replaceNodeText("decision3",decision3);

}