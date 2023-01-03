window.addEventListener("load", function(){

    var gameCanvas = new GameCanvas();
    gameCanvas.run();
    
    // var img = new Image();
    // img.src = "./img/boy.png";
    
    // var boy1 = new boy();
    // boy1.draw(ctx);           
                    
    // var boy2 = new boy();
    // boy2.draw(ctx);
    // boy2.move(2);
    // boy2.draw(ctx);                    
    // 비동기
    // 동기
    // src io 작업 시간걸림
});
window.addEventListener("keyup", function(e){
    GameCanvas.prototype.keyUpHandler(e);
});