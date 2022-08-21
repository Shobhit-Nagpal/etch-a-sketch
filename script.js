const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const changeSizeBtn = document.querySelector('#change-size');
let squareSize = 16;



createDivs(16);


//    FUNCTION TO CREATE DIVS

function createDivs(squareSize) {
    for (let i = 0 ; i < squareSize ; i++) {
        for (let j = 0 ; j < squareSize ; j++) {
    
            const div = document.createElement('div');
            div.classList.add('sketch-divs');
            container.appendChild(div);
        }
    } 
    container.setAttribute(`style`,`grid-template-columns: repeat(${squareSize},1fr); grid-template-rows: repeat(${squareSize},1fr);`);
}


function removeDivs() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}



const divs = document.querySelectorAll('.sketch-divs');
console.log(divs);

//    FUNCTION TO SKETCH ON THE CANVAS

function sketchCanvas() {
    divs.forEach((div) => {
        div.addEventListener('mouseover', function() {
            console.log('Clicked a div');
            div.style.background = 'black';
        });
    });
}

sketchCanvas();


//     CLEAR ALL BUTTON

clearBtn.addEventListener('click', function(){

    const divs = document.querySelectorAll('.sketch-divs');
    for (const div of divs) {
        div.style.background = 'transparent';
    }
    sketchCanvas();
});


//    CHANGE SIZE BUTTON

changeSizeBtn.addEventListener('click', function() {

    //    ASKING USER FOR PROMPT

    let squareSize = Number(prompt("Enter square number for canvas (Max: 100)"));

    if (squareSize > 100) {
        alert("Exceeded maximum limit. Try again");
        return;
    }

    if (squareSize < 2) {
        alert("Too low a number to make canvas. Try again");
        return;
    }
    
    //    REMOVING ALL DIVS PRESENT BEFORE

    removeDivs();


    //    ADDING NEW DIVS ACC TO SIZE CHOSEN BY USER
    
    createDivs(squareSize);

    //   DETECTS THE DIVS AGAIN TO SKETCH AFTER SIZE CHANGES

    const divs = document.querySelectorAll('.sketch-divs');
    console.log(divs);

    divs.forEach((div) => {
        div.addEventListener('mouseover', function() {
            console.log('Clicked a div');
            div.style.background = 'black';
        });
    });

    return;

});