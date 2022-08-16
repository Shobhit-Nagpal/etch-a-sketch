

const container = document.querySelector('#container');

 for (let i = 0 ; i < 8 ; i++) {
    for (let j = 0 ; j < 8 ; j++) {

        const div = document.createElement('div');
        div.classList.add('sketch-divs');
        container.appendChild(div);
    }
} 

console.log("File is here");