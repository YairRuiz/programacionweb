var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', (data) => {
    console.log(data);

    render(data);
});

function render(data) {

    let html = data.map((elem) => {
        return (
            `<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
            </div>`
        );
    }).join(' ');

    document.getElementById('messages').innerHTML = html;
}

function addMessage(form) {
    let payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };

    if (payload.author == "" || payload.text == "") {
        alert("Por favor llena todos los campos")
        return false;
    } else {
        socket.emit('new-message', payload);
        let inputMessage = document.getElementById('text');
        inputMessage.value = "";
        inputMessage.focus();
    }
    return false;
}
