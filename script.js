const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const changeSizeBtn = document.querySelector('#change-size');
const divs = document.getElementsByClassName('sketch-divs');


//    DEFAULT GRID CREATION
createDivs();

function createDivs() {
    for (let i = 0 ; i < 16 ; i++) {
        for (let j = 0 ; j < 16 ; j++) {
    
            const div = document.createElement('div');
            div.classList.add('sketch-divs');
            container.appendChild(div);
        }
    } 
    container.setAttribute(`style`,`grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16,1fr);`);
}


//    EVENT TO DETECT HOVER AND CHANGE COLOR OF DIVS

for (const div of divs) {
    div.addEventListener('mouseover', function() {
        console.log('Clicked a div');
        div.classList.add('add-bg');
    });
    
}


//     CLEAR ALL BUTTON

clearBtn.addEventListener('click', function(){

    const divs = document.querySelectorAll('.sketch-divs');
    for (const div of divs) {
        div.classList.remove('add-bg');
    }
});


//    CHANGE SIZE BUTTON

changeSizeBtn.addEventListener('click', function() {

    //    ASKING USER FOR PROMPT

    let squareSize = Number(prompt("Total number of squares? (Maximum: 100)"));

    if (squareSize > 100) {
        alert("Exceeded maximum limit. Try again");
        return;
    }

    if (squareSize < 2) {
        alert("Too low a number to make canvas. Try again");
        return;
    }
    
    //    REMOVING ALL DIVS PRESENT BEFORE

    const divs = document.querySelectorAll('.sketch-divs');
    for (const div of divs) {
        container.removeChild(div);
    }


    //    ADDING NEW DIVS ACC TO SIZE CHOSEN BY USER
    
    for (let i = 0 ; i < squareSize ; i++) {
        for (let j = 0 ; j < squareSize ; j++) {
    
            const div = document.createElement('div');
            div.classList.add('sketch-divs');
            container.appendChild(div);
        }
    }

    container.setAttribute(`style`,`grid-template-columns: repeat(${squareSize},1fr); grid-template-rows: repeat(${squareSize},1fr);`);

});
