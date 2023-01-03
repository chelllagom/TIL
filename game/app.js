window.addEventListener("load", function(){

    var canvas = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
    canvas.onclick = function() {
        console.log("canvas clicked");
        boy2.move(2);
        boy2.draw(ctx);   
    }
    // var img = new Image();
    // img.src = "boy.png";
    
    // #은 id를 찾음.
    /** 집단지성 */
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");

   
                        
    var boy1 = new boy();
    boy1.draw(ctx);           
                    
    var boy2 = new boy();
    boy2.draw(ctx);
    boy2.move(2);
    boy2.draw(ctx);                    

    
    // 비동기
    // 동기
    // src io 작업 시간걸림
    

});