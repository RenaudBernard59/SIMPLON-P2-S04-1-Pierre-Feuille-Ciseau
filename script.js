/* ========== Partie 3 - Exercice 10 ========== */
/*
Pierre Feuille Ciseau

Pierre 	> Ciseau || Ciseau 	< Pierre
Pierre 	< Feuille || Feuille > Pierre
Feuille < Ciseau || Ciseau 	> Feuille





 */




//===========================================================


//Initialisation des variables

var reponsePlayer = ["", ""];
var scorePlayer = [0, 0];
var actions = ["Pierre", "Papier", "Ciseau"];


// Définitions Fonctions

// ==================== ALGO JEU ====================


function randomEntier() {
  randInt = Math.random() * (2 - 0) + 0;
  return randInt = parseInt(randInt);
} //END  randomEntier

function inputReponse(reponse) {
	 var clickPierre = document.getElementById('pierre');

    element.onclick = function() {
    	return reponse = reponsePlayer[0];
    }

    	var clickFeuille = document.getElementById('feuille');

    element.onclick = function() {
    	return reponse = reponsePlayer[1];
    }

    var clickCiseau = document.getElementById('ciseau');

    element.onclick = function() {
    	return reponse = reponsePlayer[2];
    }

}

function reponseDefinitions(actions, reponse) {
	randomEntier(); 
//Réponse Joueur 1
	/* Plus maintenant
	reponsePlayer[0] = parseInt(prompt("Choisissez [0] : Pierre // [1] : Papier // [2] : Ciseau"));
	*/
	reponsePlayer[0] = actions[inputReponse(reponse)]

//Réponse Joueur 2
	reponsePlayer[1] = actions[randomEntier()];
} //END reponseDefinitions
	
function testActions(reponsePlayer) {

	if (reponsePlayer[0] === reponsePlayer[1]) { 
    // En cas d'égalité
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1]
		 	+ " --- Egalité");
		afficherResultat("Egalité");
    //END
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Pierre") && (reponsePlayer[1] = "Papier")) {
    //Si Pl1 = Pierre - Pl2 = Papier > Pl2 +1
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player2 Win");
		scorePlayer[1]++; //Pl2 +1
		return afficherResultat("Player2 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Pierre") && (reponsePlayer[1] = "Ciseau")) {
    //Si Pl1 = Pierre - Pl2 = Ciseau > Pl1 +1
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player1 Win");
		scorePlayer[0]++; //Pl1 +1
		return afficherResultat("Player1 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Papier") && (reponsePlayer[1] = "Pierre")) {
    //Si Pl1 = Papier - Pl2 = Pierre > Pl1 +1
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player1 Win");
		scorePlayer[0]++; //Pl1 +1
		return afficherResultat("Player1 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Papier") && (reponsePlayer[1] = "Ciseau")) {
     //Si Pl1 = Papier - Pl2 = Ciseau > Pl2 +1
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player2 Win");
		scorePlayer[1]++; //Pl2 +1
		return afficherResultat("Player2 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Ciseau") && (reponsePlayer[1] = "Pierre")) {
    //Si Pl1 = Ciseau - Pl2 = Pierre > Pl1 +1
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player2 Win");
		scorePlayer[1]++; //Pl1 +1
		return afficherResultat("Player2 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else if ((reponsePlayer[0] = "Ciseau") && (reponsePlayer[1] = "Papier")) {
    //Si Pl1 = Ciseau - Pl2 = Papier > Pl1 +2
		alert("Pl1 : " + reponsePlayer[0] + " - Pl2 : " + reponsePlayer[1] 
			+ " --- Player1 Win");
		scorePlayer[0]++; //Pl2 +1
		return afficherResultat("Player1 Win"), reponsePlayer;
    //////////////////////////////////////////////////////////////////////////////////
	} else {
		alert("Error");
	}
} //END  testActions


function theGame(reponsePlayer, scorePlayer, actions) {

	while (scorePlayer[0] <= 3 || scorePlayer[1] <= 3) {
		if (scorePlayer[0] === 3) {
			alert("Player1 Win the Game !");
			break;
		} else if (scorePlayer[1] === 3){
			alert("Player2 Win the Game !");
			break;
		} else {
   			reponseDefinitions(actions);
   			afficherTimer(temps);
     		testActions(reponsePlayer); //FUNC

			changerScorePl1(scorePlayer[0]);
			changerScorePl2(scorePlayer[1]);
		}
	}


} //END theGame



// ==================== DOM ====================

	function timer() {

		var temps = window.setTimeout("mafonction()",5000);
		return temps

	}

	function afficherTimer(temps) {

		document.getElementById("timer").style.display="block";
		document.getElementById("timer").innerHTML = temps
	}

	function changerScorePl1(scorePlayer[0]) {

		document.getElementById("scorePl1").innerHTML = scorePlayer[0];

	}

	function changerScorePl2(scorePlayer[1]) {

		document.getElementById("scorePl2").innerHTML = scorePlayer[1];

	}


// Appel fonctions

theGame(reponsePlayer, scorePlayer, actions); 

