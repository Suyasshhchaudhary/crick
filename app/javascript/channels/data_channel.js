// app/javascript/channels/data_channel.js
import consumer from "./consumer"

consumer.subscriptions.create("DataChannel", {
  connected() {
    console.log("Connected to DataChannel")
  },

  disconnected() {
    console.log("Disconnected from DataChannel")
  },

  received(data) {
    const dataList = document.getElementById("data-list")
    const newItem = document.createElement("li")
    newItem.innerText = data.data
    dataList.prepend(newItem)
  }
})
