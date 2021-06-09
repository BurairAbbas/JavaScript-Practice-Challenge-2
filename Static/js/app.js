// return all the button tag in array
var allButton = document.getElementsByTagName('button');
console.log(allButton);

var originalButtonColors = [];
for(let i = 0; i < allButton.length; i++){
    originalButtonColors[i] = allButton[i].classList[1];
}

function buttonChangeColor(selectedColor){
    // console.log(selectedColor.value);
    switch(selectedColor.value){
        case "random":
            randomColor();
            break;
        case "red":
            redColor();
            break;
        case "green":
            greenColor();
            break;
        case "reset":
            resetColor();
            break;
    }
}

function randomColor(){
    var colorChoices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
    for(let i = 0; i < allButton.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allButton[i].classList.remove(allButton[i].classList[1]);        
        allButton[i].classList.add(colorChoices[randomNumber]);
    }
}
function redColor(){
    for(let i= 0; i < allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-danger");
    }
}
function greenColor(){
    for(let i=0; i < allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add("btn-success")
    }   
}
function resetColor(){
    for(let i = 0; i< allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(originalButtonColors[i]);
    }
}