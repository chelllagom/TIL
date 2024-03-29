import Boy from "../item/boy.js";
import Background from "../item/background.js";
import Enemy from "../item/enemy.js";
import Fire from "../item/fire.js";
import {context} from "../context.js";

export default class GameCanvas{
    //what is default?

    constructor(){

        this.dom = document.querySelector(".game-canvas");
        //key 이벤트를 받지 않는 html tag에는 tabindex 속성을 사용하여
        //강제적으로 이벤트를 발생 시킬 수 있다.
        this.dom.focus();
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);

        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(100, 100);
        this.bg = new Background();
        this.enemies = []; 
        context.enemies = this.enemies;

        this.fires = [];

        //상태변수
        this.gameOver = false;
        this.pause = false;
        this.enemyDelay = 60;

        //bind를 통해서 this가 dom->GameCanvas로 변경됨
        this.dom.onclick = this.clickHandler.bind(this);
        //document.querySelector("#wrap").onkeydown = this.keyDownHandler.bind(this);
        //document.onkeydown = this.keyDownHandler.bind(this);
    }

    //add enemy callback function
    onOutOfScreen(en) {
        this.enemies.splice(this.enemies.indexOf(en),1);
    }
    //////////////////////////////
    //아래 함수와 다른 점은? 화살표 함수는 내부적으로 new Function으로 
    //함수를 계속 만들어주기 때문에 멤버함수로 한번만 생성 후 
    //대입하여 사용하는 것이 바람직하다.
    // onOutOfScreen = (en) => {
    //     this.enemies.splice(this.enemies.indexOf(en),1);
    // }

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
        for(let enemy of this.enemies)
            enemy.update();
        
        for(let f of this.fires)
            f.update();
        
        if(this.enemyDelay == 0){
            this.enemyDelay = this.getRandomIntInclusive(30, 180);
            let x = this.getRandomIntInclusive(-50, this.dom.width+50);
            let y = -50;
            this.enemies.push(new Enemy(x,y, this.onOutOfScreen.bind(this)));
        }
        this.enemyDelay--;
        //this.fire.update();
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    }
    draw(){
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
        for(let enemy of this.enemies)
            enemy.draw(this.ctx);
        for(let f of this.fires)
            f.draw(this.ctx);
    }
    clickHandler(e){
        this.boy.moveTo(e.x,e.y);
    }
    keyDownHandler(e){
        this.boy.move(e.code);
    }
    keyUpHandler(e){
        this.boy.stop(e.code);
        if(e.code === "Space"){
            this.fires.push(new Fire(this.boy.x, this.boy.y));
        }
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