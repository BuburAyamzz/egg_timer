const title = document.getElementById("title")
const runny = document.getElementById("runny")
const soft = document.getElementById("soft")
const hard = document.getElementById("hard")
const container = document.getElementById("container")
const menu_container = document.getElementById("menu_container")
const time = document.getElementById("time")
const reset = document.getElementById("reset")
const border = document.getElementById("border")

reset.addEventListener("click", () => {
    resetTimer()
})

let second = 1
let intervalId

const runTimer = (interval) => {
    second = interval + 1
    if (!intervalId) {
        intervalId = setInterval(() => {
            if (second > 0) {
                second--
                time.textContent = formatedTime(second)
                if (second % 2 === 0) {
                    border.style.backgroundImage = "url('/resource/bahlil.jpg')"
                }
                else {
                   border.style.backgroundImage = "url('/resource/bahlil_merem.png')";
                }
            }
            else {
                time.textContent = "Your Egg Finished!!!"
            }
        }, 1000);
    }

}

const formatedTime = (second) => {

    const formatedSecond = (second % 60) + "'s"
    const formatedMinute = Math.floor((second / 60)) + "'m"

    return formatedMinute + " " + formatedSecond
}

const resetTimer = () => {
    clearInterval(intervalId)
    intervalId = null;
    time.textContent = ""
}


runny.addEventListener("click", () => {
    title.textContent = "Runny egg will complete in "
    runTimer(5 * 60)
})

soft.addEventListener("click", () => {

    title.textContent = "Soft egg will complete in "
    runTimer(7 * 60)
})

hard.addEventListener("click", () => {

    title.textContent = "Hard egg will complete in "
    runTimer(9 * 60)
})

