class GameCanvas{
    constructor(){
        this.dom = document.querySelector(".game-canvas");
        //key 이벤트를 받지 않는 html tag에는 tabindex 속성을 사용하여
        //강제적으로 이벤트를 발생 시킬 수 있다.
        this.dom.focus();
        this.dom.onkeydown = this.keyDownHandler.bind(this);

        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(100, 100);
        this.bg = new Background();

        //상태변수
        this.gameOver = false;
        this.pause = false;

        //bind를 통해서 this가 dom->GameCanvas로 변경됨
        this.dom.onclick = this.clickHandler.bind(this);
        //document.querySelector("#wrap").onkeydown = this.keyDownHandler.bind(this);
        //document.onkeydown = this.keyDownHandler.bind(this);
    }
    
    run(){
        if(this.pause)
            return;

        //60 frame으로 화면을 다시 그리는 코드
        this.update();
        this.draw();

        //window.setTimeout(
            //여기서 this는 실행 객체가 window이기 때문에 window.run()을 의미함으로
            //bind를 추가하여 GameCanvas를 this로 변경해준다.
        //    this.run.bind(this)
        //, 2000);
        window.setTimeout(() => {
            //화살표 함수는 지역화가 안되기 때문에 this가 없다.
            //this를 사용하면 상위의 this가 사용되기 때문에 GameCanvas를 말한다.
            this.run();
        }, 1);
    }
    pauser(){
        this.pause = true;
    }
    update(){
        this.boy.update();
       //this.boy.move(2);
    }
    draw(){
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
    }
    clickHandler(e){
        //this.pauser();
        this.boy.moveTo(e.x,e.y);
        //this.boy.move(2);
        //this.boy.draw(this.ctx);  
    }
    keyDownHandler(e){
        this.boy.move(e.code);
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