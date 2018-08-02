
function genDivs (v) {
    let e = document.querySelector('#gameboard');

    //create rows within the only div written in html page
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        //create cells within each row
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.classList.add('gridsquare');
            //cell.id = "square";
            row.appendChild(cell);
        };

        e.appendChild(row);
    };
    
    //document.getElementById("container").innerText = e.innerHTML;
};

var mouse = document.getElementById("gameboard");

mouse.addEventListener("mouseover", function( e ) {   
    // highlight the mouseover target
    e.target.style.backgroundColor = "#EEB127";

    // reset the color after a short delay
    setTimeout(function() {
      e.target.style.backgroundColor = "";
    }, 1000);
  }, false);


genDivs(16);