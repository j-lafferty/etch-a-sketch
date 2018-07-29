
function genDivs (v) {
    let e = document.querySelector('#container');
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.classList.add('gridsquare');
            row.appendChild(cell);
        };

        e.appendChild(row);
    };
    
    //document.getElementById("container").innerText = e.innerHTML;
};

genDivs(16);