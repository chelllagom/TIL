import fire from "./fire.js";
import {context} from "../context.js";

export default class Boy{
    //private 속성 추가(캡슐화)
    //클래스 내부에서 변수명이 변경되거나 로직이 바뀌어도
    //외부에서 getter, setter를 통한 접근을 하기 때문에 js에서 캡슐화 및 은닉화 가능해짐
    #speedNameChange;

    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;
        
        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.ix = 1;
        this.iy = 2;
        
        this.keyWalk = false;
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.#speedNameChange = 0;

        this.img = document.querySelector("#boy");
        this.halfX = this.img.width/2;
        this.halfY = this.img.height/2;
        this.centerX = this.x+this.halfX;
        this.centerY = this.y+this.halfY;
        
        this.sw = 106;
        this.sh = 148.25;

        this.isFirst = true;
        this.walkDelay = 0;
     }
    
    //speed getter, setter
    // ver1
    /*setSpeed(speed){
        this.#speed = speed;
    }
    getSpeed(){
        return this.#speed;
    }*/
    // ver2
    set speed(value){
        this.#speedNameChange = value;
    }
    get speed(){
        return this.#speedNameChange;
    }


    walkStatus(){
        if((this.vx === 0 || this.vy === 0) && !this.keyWalk){
            this.ix = 1;
        }else{
            this.walk();
        }
    }

    walk(){
        if(this.walkDelay++ > 40){
            this.walkDelay = 0;
            if(this.ix === 1)
                this.ix = 0;
            else
                this.ix = this.ix === 0 ? 2 : 0;
        }
    }

    update(){
        for(let enemy of context.enemies){
            // let w = enemy.halfX + this.halfX;
            // let h = enemy.halfY + this.halfY;
            let destructionDistance = enemy.halfX + this.halfX;
            let realX = enemy.centerX - this.centerX;
            let realY = enemy.centerY - this.centerY;
            let r1r2 = Math.sqrt(realX*realX+realY*realY);

            //console.log(`destructionDistance : ${destructionDistance}`);
            //console.log(`r1r2 : ${r1r2}`);
            if(destructionDistance >= r1r2)
                console.log(`충돌발생`);
        }

        this.walkStatus();
        
        if( (this.dx-1 <= this.x && this.x <= this.dx+1) || 
            (this.dy-1 <= this.y && this.y <= this.dy+1) ){
            this.vx = 0;
            this.vy = 0;
        }
        this.x += this.vx;
        this.y += this.vy;

        //move refactoring
        if(this.moveUp)
            this.y -= 1 + this.#speedNameChange;
        if(this.moveDown)
            this.y += 1 + this.#speedNameChange;
        if(this.moveLeft)
            this.x -= 1 + this.#speedNameChange;
        if(this.moveRight)
            this.x += 1 + this.#speedNameChange;
        //move refactoring
    }
    
    draw(ctx){
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        // let img = new Image();
        // img.src = "./img/boy.png";
        // img.onload = function(){
        //     console.log(this);
        // }.bind(this);
        // if(this.isFirst){
        //     this.isFirst = false;
        // }else{
        //     ctx.clearRect(0,0,700,600);
        // }
        ctx.drawImage(this.img,
            this.sx,this.sy,this.sw,this.sh,
            this.x-this.sw/2,this.y-this.sh+15,this.sw,this.sh);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sw/2, 0, 2 * Math.PI);
        ctx.stroke();
    }
    move(dir){
        this.keyWalk = true;
        switch(dir){
            case "ArrowUp":
                this.moveUp = true;
                this.iy = 0;
                break;
            case "ArrowRight":
                this.moveRight = true;
                this.iy = 1;
                break;
            case "ArrowDown":
                this.moveDown = true;
                this.iy = 2;
                break;
            case "ArrowLeft":
                this.moveLeft = true; 
                this.iy = 3;
                break;
            case "Space":
                new fire(this.x, this.y);
        }
    }
    stop(dir){
        this.keyWalk = false;
        switch(dir){
            case "ArrowUp":
                this.moveUp = false;
                this.iy = 0;
                break;
            case "ArrowRight":
                this.moveRight = false;
                this.iy = 1;
                break;
            case "ArrowDown":
                this.moveDown = false;
                this.iy = 2;
                break;
            case "ArrowLeft":
                this.moveLeft = false;
                this.iy = 3;
                break;
        }
    }
    moveTo(vx,vy){
        this.dx = vx;
        this.dy = vy;

        let w = vx - this.x;
        let h = vy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
    }
}