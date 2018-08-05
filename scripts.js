let gameBoard = document.querySelector('#gameboard');
var mouse = document.getElementById("gameboard");

var gridLines = "";
var gridSquares = "";

function genDivs (v) {

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
    setTimeout(function() {
      e.target.style.backgroundColor = "";
    }, 1000);
  }, false);


genDivs(16);