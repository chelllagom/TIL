export default class FirePlace{
    #SMALL_FIRE
    #MIDDLE_FIRE
    #BIG_FIRE
    #curFire
    #isFirst
    #curImg;

    constructor(dom){
        this.dom = dom;
        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.#SMALL_FIRE = document.querySelector(".small-fire");
        this.#MIDDLE_FIRE = document.querySelector(".middle-fire");
        this.#BIG_FIRE = document.querySelector(".big-fire");
        this.#curFire = this.#SMALL_FIRE;
        this.#isFirst = true;
        this.#curImg = document.querySelector(".basic-fireplace");

        this.isMouseOn = false;

        this.dom.onmouseover = this.mouseoverHandler.bind(this);
        this.dom.onmouseout = this.mouseoutHandler.bind(this);
        this.dom.onclick = this.clickHandler.bind(this);
    }

    update(){
        
    }
    
    draw(){
        this.ctx.drawImage(this.#curImg, 0, 0, 1400, 700);
        if(this.#isFirst)
            this.playDrawStart();
        //else

    }

    playDrawStart(){
        
        this.ctx.font = `80px bmkrhr`;
        this.ctx.textAlign = "center";
        if(this.isMouseOn){
            this.ctx.fillStyle = "orange";
            this.ctx.fillText(`불을 지펴라! \nStart`, 700, 350);
        }else{
            this.ctx.fillStyle = "black";
            this.ctx.fillText("불을 지펴라!", 700, 350);
        }
    }

    mouseoverHandler(){
        this.isMouseOn = true;
    }

    mouseoutHandler(){
        this.isMouseOn = false;
    }

    clickHandler(){
        this.#isFirst = false;
        this.#curImg = document.querySelector(".fireplace");
    }
}