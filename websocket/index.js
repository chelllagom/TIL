window.addEventListener("load", function(){
    let inputSend = document.querySelector(".input-send");
    let btnSend = document.querySelector(".btn-send");
    let btnConn = document.querySelector(".btn-conn");
    let socket = null;

    btnConn.onclick = function(e){
        // WebSocket 연결 생성, new WebSocket을 호출하면 되는데
        //이때 ws라는 특수 프로토콜을 사용합니다.
        //wss 프로토콜의 관계는 HTTP와 HTTPS의 관계와 유사합니다.
        socket = new WebSocket(`ws://localhost/webPrj/chat`);

        // 연결이 열리면
        socket.addEventListener('open', function (event) {
            //socket.send('Hello Server!');
        });

        // 메시지 수신
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
    }

    btnSend.onclick = function(e){
        let msg = inputSend.value;
        console.log(msg);
        if(socket !== null)
            socket.send(msg);
    }
});