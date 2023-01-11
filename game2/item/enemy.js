export default class Enemy{
    #centerX;
    #centerY;
    
    constructor(x = 100, y = 100, func){
        this.x = x;
        this.y = y;
        this.img = document.querySelector(`#enemy`);
        this.halfX = this.img.width/2;
        this.halfY = this.img.height/2;
        this.#centerX = this.x + this.halfX;
        this.#centerY = this.y + this.halfY;

        this.speed = 1;
        this.onOutOfScreen = func;

        //fire
        this.fireImg = document.querySelector(`#fire`);
    }

    set centerY(y){
        this.#centerY = y;
    }

    get centerX(){
        return this.#centerX;
    }

    get centerY(){
        return this.#centerY;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x-this.img.width/2, this.y-this.img.height/2);

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.halfX, 0, 2 * Math.PI);
        ctx.stroke();
    }

    update(){
        this.y += this.speed;
        this.centerY = this.y + this.halfY;
        if(this.y > 500 && this.onOutOfScreen != null)
            this.onOutOfScreen(this);
    }

    //화면 밖으로 나간 enemy의 참조를 해제하여 가비지를 수거해주어야한다.
    //
}