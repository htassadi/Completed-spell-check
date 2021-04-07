// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;
let returnedIndex;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();


//Search & Sort Functions

//Fetch User Inputs:
document.getElementById("oneWordCheckSubmitBtn").addEventListener("click", checkInputs);
document.getElementById("aliceCheckSubmitBtn").addEventListener("click", checkInputAlice);


function checkInputs(){
    searchTypeChosen = document.getElementById("searchAlgorithmType").value
    searchItemInputed = document.getElementById("oneWordUserInput").value
    
    // Checking values are not ""
    console.log("searching for "+searchItemInputed + " through " + searchTypeChosen +" algorithm search");

    if (searchTypeChosen == "binary"){
        binarySearchGen(dictionary, searchItemInputed);
            if (returnedIndex == -1) {
                document.getElementById("searchOutput").innerHTML = searchItemInputed + "is NOT in the dictionary."
            } else{
                document.getElementById("searchOutput").innerHTML = searchItemInputed + " is IN the dictionary at position " + returnedIndex;
            }

    } else{
        linearSearchGen(dictionary, searchItemInputed) 
            if (returnedIndex == -1) {
                document.getElementById("searchOutput").innerHTML = searchItemInputed + "is NOT in the dictionary."
            } else{
                document.getElementById("searchOutput").innerHTML = searchItemInputed + " is IN the dictionary at position " + returnedIndex;
            }
    }
}

function checkInputAlice(){
    console.log("Checking Input..")
    wordsNotFound = 0;
    searchTypeChosen = document.getElementById("searchAlgorithmTypeAlice").value
    
    if (searchTypeChosen == "binary"){
        for (i=0; i < aliceWords.length ; i++) {
            binarySearchGen(dictionary, aliceWords[i]);

            if (returnedIndex == -1) {
                console.log(aliceWords[i]+" is NOT in the dictionary");
                wordsNotFound++ ;
            }
        }

        console.log("# of words not found: "+ wordsNotFound);
        document.getElementById("aliceSearchOutput").innerHTML = wordsNotFound + " word(s) NOT in the dictionary.";
    
    } else {
        for (n=0; n < aliceWords.length ; n++) {
            linearSearchGen(dictionary, aliceWords[n]);

            if (returnedIndex == -1) {
                console.log(aliceWords[n]+" is NOT in the dictionary");
                wordsNotFound++ ;
            }
        }

        console.log("# of words not found: "+ wordsNotFound);
        document.getElementById("aliceSearchOutput").innerHTML = wordsNotFound + " word(s) are NOT in the dictionary.";
    }
}


function linearSearchGen (anArray, item){
    for (i=0; i < anArray.length ; i++){
        if (anArray[i] == item){
            returnedIndex = i
            return returnedIndex;
        } 
    }

    // Went through for loop without finding item, so... 
    returnedIndex = -1 
    return returnedIndex;
} 


//Binary Search
function binarySearchGen(anArray, item){
    lowerIndex = 0;
    upperIndex = anArray.length + 1;

    while (lowerIndex<=upperIndex) {
        midIndex = Math.floor((lowerIndex + upperIndex)/2);
        if (anArray[midIndex] == item){
            returnedIndex = midIndex
            return returnedIndex;
        } else if (item < anArray[midIndex]) {
            upperIndex = midIndex -1
        } else { // item > than the value at the middle index
           lowerIndex = midIndex + 1
        }
    }
      
    // Went through loop without finding item, so...
    returnedIndex = -1 
    return returnedIndex;
}
