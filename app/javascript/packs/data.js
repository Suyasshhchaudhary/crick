export function addData(data) {
    fetch("/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").getAttribute("content")
        },
        body: JSON.stringify({ data: data })
    })
}