const sendBtn = document.getElementById('sendBtn');
const messageIn = document.getElementById('messageIn');
const messageOut = document.getElementById('messageOut');

messageIn.addEventListener('keydown', e => {
    if(e.keyCode === 13) sendMsg();
});

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    if(content === '') alert('Błąd: "Puste pole" !');
    else {
        messageOut.innerHTML = content;
        messageIn.value = "";
    }
}