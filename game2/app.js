import GameCanvas from "./panel/game-canvas.js";

window.addEventListener("load", function(){

    const gameCanvas = new GameCanvas();
    gameCanvas.run();
    
    //gameCanvas.pause();

    //main(UI) thread와 gameCanvas thread를 분리
    //상태 변수를 가지고 두 스레드가 소통
});