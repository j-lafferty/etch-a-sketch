let gameBoard = document.querySelector('#gameboard');
var mouse = document.getElementById("gameboard");
var resetButton = document.querySelector("#reset");

var gridLines = "";
var gridSquares = "";

var gridSize = 16;

function createGrid (v) {

    //create rows within the 'gameboard' div in html page
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        //create cells within each row
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.classList.add('gridSquare');
            //cell.id = "square";
            row.appendChild(cell);
        };

        gameBoard.appendChild(row);
    };
    gridSquares = document.querySelectorAll(".gridSquare");
    gridLines = document.querySelectorAll(".row");
    
    //document.getElementById("container").innerText = e.innerHTML;
};


mouse.addEventListener("mouseover", function( e ) {   
    // highlight the mouseover target
    e.target.style.backgroundColor = "#EEB127";

    // reset the color after a short delay
    /* setTimeout(function() {
      e.target.style.backgroundColor = "";
    }, 1000); */
  }, false);

resetButton.addEventListener("click", () => {
    gridSize = prompt("Enter grid size:");
    if (gridSize === null) {
        return;
    } else if (gridSize < 2 || gridSize > 64) {
        alert("Enter value between 2 and 64:");
        return;
    };
    refreshGrid();
});

function refreshGrid() {
    if (gridSquares) {
        removeGrid();
    };
    createGrid(gridSize);
};

function removeGrid () {
    gridLines.forEach((line) => {
        gameBoard.removeChild(line);
    });
};

createGrid(gridSize);