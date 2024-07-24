import "channels"
import { addData } from "./data"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-data-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.getElementById("data-input")
        addData(input.value)
        input.value = ""
    })
})