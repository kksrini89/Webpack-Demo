import './app.scss'

if (module.hot) {
  module.hot.accept();
}

const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)

button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
    chat.init();
    console.log("Really cool! Finally achieved My learning Goal");
  })
}