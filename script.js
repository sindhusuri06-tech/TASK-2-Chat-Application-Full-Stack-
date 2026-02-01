function sendMessage() {
  let msg = document.getElementById("message").value;
  let chatBox = document.getElementById("chatBox");

  if (msg !== "") {
    chatBox.innerHTML += "<p>User: " + msg + "</p>";
    document.getElementById("message").value = "";
  }
}
