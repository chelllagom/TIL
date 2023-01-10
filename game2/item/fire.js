export default class Fire{
    #x;
    #y;
    constructor(x=0,y=0){
        this.#x = x;
        this.#y = y;
        this.img = document.querySelector("#fire");
    }

    set x(x){
        this.#x = x;
    }
    get x(){
        return this.#x;
    }
    set y(y){
        this.#y = y;
    }
    get y(){
        return this.#y;
    }
    update(){
        this.y -= 1;
    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }
}