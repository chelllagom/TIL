export default class Enemy{
    constructor(x = 100, y = 100){
        this.x = x;
        this.y = y;
        this.img = document.querySelector(`#enemy`);
    }

    update(){

    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }
}