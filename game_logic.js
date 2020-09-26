var grid;
var moves = 0;

// Setup blank Canvas with Grid
function setup() {
    createCanvas(400, 400);
    noLoop();
    grid = blankGrid();

    updateCanvas();
}

// Returns solved Grid
function blankGrid() {
    return [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]];
}


function updateCanvas() {
    background(250);
    drawGrid();
}

// Draws the given grid over canvas
function drawGrid() {
    var w = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            noFill();
            strokeWeight(2);
            let val = grid[j][i];
            let s = val.toString();

            stroke(0);
            fill(colorsSizes[s].color);

            rect(i * w, j * w, w, w);
            if (grid[i][j] !== 0) {
                textAlign(CENTER, CENTER);
                noStroke();
                fill(0);
                textSize(colorsSizes[s].size);
                text(val, i * w + w / 2, j * w + w / 2);
            }
        }
    }
}