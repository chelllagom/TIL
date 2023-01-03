class GameCanvas{
    constructor(){
        this.dom = document.querySelector(".game-canvas");
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.boy = new Boy(100, 100);

        //bind를 통해서 this가 dom->GameCanvas로 변경됨
        this.dom.onclick = this.clickHandler.bind(this);
    }
    
    run(){
        //60 frame으로 화면을 다시 그리는 코드
        this.update();
        this.draw();
    }
    update(){
       
    }
    draw(){
        this.boy.draw(this.ctx);
    }
    clickHandler(){
        this.boy.move(2);
        this.boy.draw(this.ctx);  
    }
    keyUpHandler(){
        console.log(this.event.keyCode);
    }
}

//다른곳에 위임해서 호출할 수 있다
//(인스턴스.함수 호출이 아닌 다른 변수로 함수 호출할 때)

//호출할 때 인스턴스 넘겨줌
//call

//인자 여러개
//apply

//this 위임
//bind