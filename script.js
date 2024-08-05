let xTag = document.querySelector(".x");
let oTag = document.querySelector(".o");
let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");
let box4 = document.querySelector(".box-4");
let box5 = document.querySelector(".box-5");
let box6 = document.querySelector(".box-6");
let box7 = document.querySelector(".box-7");
let box8 = document.querySelector(".box-8");
let box9 = document.querySelector(".box-9");
let gameCell = document.querySelector(".game-cell");
let overlayBox = document.querySelector(".overlay-box");
let winnerPlayer = document.querySelector("#winner-player");
let restart = document.querySelector(".restart");

// Event listener for overlay box to reset the game
overlayBox.addEventListener("click", () => {
	overlayBox.style.display = "none";
	playerTurn = "";
	playerSelectionResult = "";
	document
		.querySelectorAll(".game-cell")
		.forEach((cell) => (cell.textContent = ""));
});
restart.addEventListener("click", () => {
	document
		.querySelectorAll(".game-cell")
		.forEach((cell) => (cell.textContent = ""));
});

const players = (playerTagSelection) => {
	let player1Tag = playerTagSelection;
	let player2Tag;
	if (playerTagSelection == "x") {
		player2Tag = "o";
	} else {
		player2Tag = "x";
	}

	return { player1Tag, player2Tag };
};
let playerSelectionResult;

xTag.addEventListener("click", () => {
	xTag.style.borderColor = "black";
	oTag.style.borderColor = "rgba(128, 128, 128, 0.446)";
	playerSelectionResult = players("x");
	playerTurn = "x";
});

oTag.addEventListener("click", () => {
	oTag.style.borderColor = "black";
	xTag.style.borderColor = "rgba(128, 128, 128, 0.446)";
	playerSelectionResult = players("o");
	playerTurn = "o";
});

let playerTurn = "";

document.querySelectorAll(".game-cell").forEach((cell) => {
	cell.addEventListener("click", () => {
		if (
			cell.textContent === "x" ||
			cell.textContent === "o" ||
			playerTurn === ""
		) {
			return;
		} else {
			cell.textContent = playerTurn;
			playerTurn = playerTurn === "x" ? "o" : "x";
			gameOver();
		}
	});
});

// Function to check if the game is over
const gameOver = () => {
	const cells = document.querySelectorAll(".game-cell");
	const winPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Columns
		[0, 4, 8],
		[2, 4, 6], // Diagonals
	];

	winPatterns.forEach((pattern) => {
		const [a, b, c] = pattern;
		if (
			cells[a].textContent &&
			cells[a].textContent === cells[b].textContent &&
			cells[a].textContent === cells[c].textContent
		) {
			winnerPlayer.textContent = cells[a].textContent.toUpperCase();
			overlayBox.style.display = "block";
		}
	});
};
