export default class Fire{
    #x;
    #y;
    constructor(x=0,y=0){
        this.#x = x;
        this.#y = y;
        this.img = document.querySelector("#fire");

        this.ix = 0;
        this.iy = 0;
        this.sw = this.img.width/4;
        this.sh = this.img.height/5;
         
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;
        this.delay = 0;
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
        ctx.drawImage(this.img, this.sx,this.sy,this.sw,this.sh,
            this.x-this.sw/2,this.y-this.sh+15,this.sw,this.sh);
    }
}