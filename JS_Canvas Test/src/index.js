const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const clearBtn = document.getElementById('clearBtn');
const checkBtn = document.getElementById('checkBtn');
const resultText = document.getElementById('result');

let isDrawing = false;
ctx.lineWidth = 12;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000000';

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => { isDrawing = false; ctx.beginPath(); });
canvas.addEventListener('mousemove', draw);
clearBtn.addEventListener('click', clearCanvas);
checkBtn.addEventListener('click', verifyDrawing);

const LETTER_TEMPLATES = {
    'A': [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1]
};

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resultText.innerText = "";
    resultText.style.color = "black";
}

function verifyDrawing() {
    const userPattern = getGridPattern();
    console.log(userPattern)
    const targetPattern = LETTER_TEMPLATES['A'];

    let matchCount = 0;
    for (let i = 0; i < targetPattern.length; i++) {
        if (userPattern[i] === targetPattern[i]) {
            matchCount++;
        }
    }

    const accuracy = (matchCount / targetPattern.length) * 100;

    // Set matching criteria threshold to 75%
    if (accuracy >= 75) {
        resultText.innerText = `Correct! Match accuracy: ${accuracy.toFixed(0)}%`;
        resultText.style.color = "green";
    } else {
        resultText.innerText = `Incorrect. Match accuracy: ${accuracy.toFixed(0)}%. Try again!`;
        resultText.style.color = "red";
    }
}

function getGridPattern() {
    const gridMatrix = [];
    const gridSize = 5;
    const cellWidth = canvas.width / gridSize;
    const cellHeight = canvas.height / gridSize;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Read pixel data for the specific grid cell block
            const imgData = ctx.getImageData(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
            const data = imgData.data;
            let blackPixelCount = 0;

            // Loop through alpha channel to find drawn marks
            for (let i = 3; i < data.length; i += 4) {
                if (data[i] > 50) {
                    blackPixelCount++;
                }
            }

            // If more than 5% of the cell has ink, mark it as active (1)
            const threshold = (cellWidth * cellHeight) * 0.05;
            gridMatrix.push(blackPixelCount > threshold ? 1 : 0);
        }
    }
    return gridMatrix;
}

// Calculate accuracy percentage

