var numSelected = null;
var tileSelected = null;
var levelSelected = 'easy';
var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var boardMedium = [
    "-2-6-8---",
    "58---97--",
    "----4----",
    "37----5--",
    "6-------4",
    "--8----13",
    "----2----",
    "--98---36",
    "---3-6-9-"
]

var solutionMedium = [
    "123678945",
    "584239761",
    "967145328",
    "372461589",
    "691583274",
    "458792613",
    "836924157",
    "219857436",
    "745316892"
]
var boardHard = [
    "43-----69",
    "---5-643-",
    "8-6--4---",
    "-----1-9-",
    "1--8---45",
    "-64--27-1",
    "-8-12----",
    "-1-------",
    "543---812"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    //Digits
    for (let i = 1; i <=9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        number.addEventListener('click', selectNumber);
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                tile.classList.add("tile");
                if (board[r][c] != "-") {
                    tile.innerText = board[r][c];
                    tile.classList.add("tile-start");
                }
                if (r == 2 || r == 5) {
                    tile.classList.add("horizontal-border");
                }
                if (c == 2 || c == 5) {
                    tile.classList.add("vertical-border");
                }
                if (r == 0) {
                    tile.classList.add("horizontal-top-border");
                }
                if ( c == 0) {
                    tile.classList.add("vertical-left-border");
                }
                if (r == 8) {
                    tile.classList.add("horizontal-border-bottom");
                }
                if (c == 8) {
                    tile.classList.add("vertical-border-right");
                }
                tile.addEventListener('click', selectTile);
                document.getElementById("board").append(tile);
               
            }
        }
    }


const levelEasy = document.getElementById('easy');
levelEasy.addEventListener('click', () => {
    levelSelected = 'easy';
    levelEasy.classList.add('selected-level');
    levelHard.classList.remove('selected-level');
    levelMedium.classList.remove('selected-level');
    resetBoard();

});

const levelMedium = document.getElementById('medium');
levelMedium.addEventListener('click', () => {
    levelSelected = 'medium';
    levelEasy.classList.remove('selected-level');
    levelHard.classList.remove('selected-level');
    levelMedium.classList.add('selected-level');
    resetBoard();

});

const levelHard = document.getElementById('hard');
levelHard.addEventListener('click', () => {
    levelSelected = 'hard';
    levelEasy.classList.remove('selected-level');
    levelMedium.classList.remove('selected-level');
    levelHard.classList.add('selected-level');
    resetBoard();
  
});


function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    let s;
    if (levelSelected == 'easy') {
        s = solution;
    } else if (levelSelected == 'medium') {
        s = solutionMedium;
    } else {
        s = solutionHard;
    }
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if (numSelected.id == s[r][c]) {
            this.innerText = numSelected.id;
        } else {
            errors++;
            document.getElementById("errors").innerText = errors;
        }
    }
}



function resetBoard() {
    // Clear all tiles on the board
    let b;
    if (levelSelected == 'easy') {
        b = board;
    } else if (levelSelected == 'medium') {
        b = boardMedium;
    } else {
        b = boardHard;
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.getElementById(r + "-" + c);
            tile.classList.remove('tile-start');
            if (b[r][c] == "-") {
                tile.innerText = "";
            } else {
                tile.innerText = b[r][c];
                tile.classList.add('tile-start');
            }
        }
    }
}

const newGameBtn = document.getElementById('newgame');
newGameBtn.addEventListener('click', () => {
    errors = 0;
    document.getElementById("errors").innerText = errors;
    resetBoard();
});












