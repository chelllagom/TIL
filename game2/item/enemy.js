export default class Enemy{
    
    constructor(x = 100, y = 100, func){
        this.x = x;
        this.y = y;
        this.img = document.querySelector(`#enemy`);
        this.speed = 1;
        this.onOutOfScreen = func;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }

    update(){
        this.y += this.speed;

        if(this.y > 500 && this.onOutOfScreen != null)
            this.onOutOfScreen(this);
    }

    //화면 밖으로 나간 enemy의 참조를 해제하여 가비지를 수거해주어야한다.
    //
}