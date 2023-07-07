const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

document.getElementById("home-score-1").addEventListener("click", () => {
    homeScore += 1
    homeScoreEl.textContent = homeScore
})

document.getElementById("home-score-2").addEventListener("click", () => {
    homeScore += 2
    homeScoreEl.textContent = homeScore
})

document.getElementById("home-score-3").addEventListener("click", () => {
    homeScore += 3
    homeScoreEl.textContent = homeScore
})

document.getElementById("guest-score-1").addEventListener("click", () => {
    guestScore += 1
    guestScoreEl.textContent = guestScore
})

document.getElementById("guest-score-2").addEventListener("click", () => {
    guestScore += 2
    guestScoreEl.textContent = guestScore
})

document.getElementById("guest-score-3").addEventListener("click", () => {
    guestScore += 3
    guestScoreEl.textContent = guestScore
})

document.getElementById("reset-btn").addEventListener("click", () => {
    homeScoreEl.textContent = "0"
    guestScoreEl.textContent = "0"
})