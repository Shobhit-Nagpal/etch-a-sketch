

const container = document.querySelector('#container');

 for (let i = 0 ; i < 8 ; i++) {
    for (let j = 0 ; j < 8 ; j++) {

        const div = document.createElement('div');
        div.classList.add('sketch-divs');
        container.appendChild(div);
    }
} 

console.log("File is here");

const divs = document.getElementsByClassName('sketch-divs');


for (const div of divs) {
    div.addEventListener('mouseover', function() {
        console.log('Clicked a div');
        div.classList.add('add-bg');
    });
    
}

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', function(){

    const divs = document.querySelectorAll('.sketch-divs');
    for (const div of divs) {
        div.classList.remove('add-bg');
    }
});