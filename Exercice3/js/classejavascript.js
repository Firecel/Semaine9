$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");


/*selection*/
	function selectionne(e) {
		e.target.classList.toggle("selected");
	}

/*suppression*/
	function supprimer() {
		for (i = 0; i < $liste.children.length; i++) {
			if ($liste.children[i].classList.contains("selected")) {
				$liste.children[i].classList.add("poubelle");
			}
		}
	}

/*restauration*/
	function restaurer() {
		for (i = 0; i < $liste.children.length; i++) {
			$liste.children[i].classList.remove("poubelle");
		}
	}

	
$liste.onclick = selectionne;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;