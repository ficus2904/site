//////////// СОЗДАНИЕ ДОСКИ
let cont = document.querySelector('.cont');

for (let i = 1; i <= 8; i++ ) {
  let rows = document.createElement('div');
  rows.classList.add('rows');
  cont.appendChild(rows);
}

let rows = document.querySelectorAll('.rows');

for (let i = 0; i < 8; i++ ) {
  for (let j = 1; j <= 8; j++) {
    let div = document.createElement('div');
    div.classList.add('square');
    rows[i].appendChild(div);
  }
}
let divs = document.querySelectorAll('.square');


for (let i = 0; i < 8; i+=2 ) {
  for (let j = 0; j < 8; j+=2) {
    rows[i].children[j].classList.add('black');
    let figure = document.createElement('div');
    figure.classList.add('figure');
    rows[i].children[j].appendChild(figure);
  }
}
for (let i = 1; i < 8; i+=2 ) {
  for (let j = 1; j < 8; j+=2) {
    rows[i].children[j].classList.add('black');
    let figure = document.createElement('div');
    figure.classList.add('figure');
    rows[i].children[j].appendChild(figure);
  }
}

let blacks = document.querySelectorAll('.black');
let figures = document.querySelectorAll('.figure');
let button = document.querySelector('button');
let selectedFigure = document.getElementsByClassName('selected');
let score = document.querySelectorAll(`span`);


let hidefigures = [];
for (let i = 12; i <=19; i++) {
  hidefigures.push(figures[i])
}
let primeReds = [];
for (let i = 0; i <=11; i++) {
  primeReds.push(figures[i])
}
let primeGreens = [];
for (let i = 20; i <=31; i++) {
  primeGreens.push(figures[i])
}
let redfigures = document.getElementsByClassName(`red`);
let greenfigures = document.getElementsByClassName(`green`);



////////// ДВИЖОК
// НАЧАЛО ИГРЫ

button.addEventListener('click', newGame);

function newGame() {
  for (let figure of figures) {
    for (let primeRed of primeReds) {
      primeRed.classList.add('red');
    }
    for (let primeGreen of primeGreens) {
      primeGreen.classList.add(`green`);
    }
    
    
    
    if (!figure.classList.contains('figure')) {
      figure.classList.add('figure');
     }
    
    if (figure.classList.contains('selected')) {
      figure.classList.remove('selected')
     }
   }
  for (let hidefigure of hidefigures) {
      hidefigure.classList.remove('figure');
      hidefigure.classList.remove('red');
      hidefigure.classList.remove('green');
  }
  score[0].innerHTML = `X ${redfigures.length - 1}`;
  score[1].innerHTML = `X ${greenfigures.length - 1}`;
  
}


//// ОДИН КЛИК ПО ОБЪЕКТУ
for (let black of blacks) {
    black.addEventListener('click', function() {
        if (!this.children[0].classList.contains(`figure`) && selectedFigure.length == 0) {
          return;
        }
        if (selectedFigure.length == 0) {
          this.children[0].classList.toggle('selected');
          
        } else {
          
            if (this.children[0] === selectedFigure[0]) {
              
              this.children[0].classList.remove('selected');
            } else {
              
              this.children[0].classList.remove('selected');
              this.children[0].classList.toggle(`figure`);
                if (selectedFigure[0].classList.contains('green')) {
                  this.children[0].classList.toggle(`green`);
                  selectedFigure[0].classList.toggle('green');
                  selectedFigure[0].classList.toggle('figure');
                } else if (selectedFigure[0].classList.contains('red')) {
                    this.children[0].classList.toggle(`red`);
                    selectedFigure[0].classList.toggle('red');
                    selectedFigure[0].classList.toggle('figure');
                }
              selectedFigure[0].classList.remove('selected');
            }
          
        }
        
        
        
      
})}


////// ДВА КЛИКА ПО ОБЪЕКТУ contextmenu
for (let black of blacks) {
  black.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.target.classList.remove(`figure`);
    event.target.classList.remove(`green`);
    event.target.classList.remove(`red`);
    event.target.classList.remove(`selected`);
    
    
    score[0].innerHTML = `X ${redfigures.length - 1}`;
    score[1].innerHTML = `X ${greenfigures.length - 1}`;
    
    console.log(greenfigures.length);
    if (greenfigures.length == 1) {
          alert(`REDS WINS!`);
}       else if (greenfigures.length == 1) {
          alert(`GREENS WINS!`);
}
    
  })
}

