function visaDestination() {
    let destination = document.getElementById("destinationInput").value;

    if (destination === "") {
        document.getElementById("resultat").innerText =
            "Du måste skriva in en destination!";
    } else {
        document.getElementById("resultat").innerText =
            "Det låter fantastiskt! " +
            destination +
            " verkar vara ett drömresemål!";
    }
}

//function förklarar vilken funktion som ska användas när man klickar på knappen. ID
//sammanlänkar java med html. I resultat visar vad som dyker upp när läsaren 
// skickar in sitt svar. 