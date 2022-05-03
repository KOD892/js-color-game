var uiColor = document.querySelector('#ui-color'),
    randomColor = document.querySelector('#random-color'),
    startBtn = document.querySelector('#ui-btn'),
    options = document.querySelectorAll('.option'),
    UImessage = document.querySelector('#message'),
    choice = document.querySelector('#options');
//game vars
const colornum = 6;
const colors = generateColors();
const color = selectRandomColor(colors); //chosen/correct color

//output
randomColor.innerHTML = color;
//console.log(options)
displyColors(options, false)



//event Listerners
choice.addEventListener('click', (e) => {
    if (e.target.classList.contains('col')) {
        let col = e.target.style.background;
        if (e.target.style.background.includes(color)) {
            console.log(color)
            isWin(true);
        } else {
            isWin(false);
        }
    }
    e.preventDefault();
});
startBtn.addEventListener('click', () => {
    document.location.reload();
})



//functions
function isWin(bool) {
    let gameOver = bool;
    if (gameOver == true) {
        randomColor.parentElement.style.background = color;
        displyColors(options, true)
        message(true, 'That\'s correct!')
        startBtn.innerHTML = `<div class="btn  col s6 l4 green right text-white"><i class='material-icons medium left'>replay</i>restart</div>`
    } else {
        message(false, 'wrong try again');
        setTimeout(() => {
            UImessage.innerHTML = '';
        }, 1000)
    }

}

function displyColors(options, bool) {
    let gameOver = bool;
    options.forEach((el) => {
        el.classList.remove('white');
    })
    if (gameOver != true) {
        for (var i = 0; i < options.length; i++) {
            options[i].style.background = colors[i];
        }
    } else {
        for (var i = 0; i < options.length; i++) {
            options[i].style.background = color;
        }

    }
}

function generateColors() {
    let colors = [];
    for (var i = 0; i < colornum; i++) {
        colors.push(getRandomColor());
    }
    return colors;
};

function selectRandomColor(colors) { //selects a color
    return colors[Math.floor(Math.random() * colors.length)]
};

function getRandomColor() { //generates random colors
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`

}

function message(bool, message) {
    let win = bool;
    if (win == true) {
        UImessage.classList = 'green text-white col s12';
        UImessage.appendChild(document.createTextNode(message))
    } else {
        UImessage.classList = 'red lighten-4 text-white col s12'
        UImessage.appendChild(document.createTextNode(message))
    }
}