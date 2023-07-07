let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

let resetBtn = document.getElementById("reset-btn")

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
 

function resetGame() {
    homeScoreEl.textContent = "0"
    guestScoreEl.textContent = "0"
}
