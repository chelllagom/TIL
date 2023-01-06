class Boy{
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;
        
        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.ix = 1;
        this.iy = 2;

        this.img = document.querySelector("#boy");
        this.sw = 106;
        this.sh = 148.25;
        this.isFirst = true;
        this.walkDelay = 0;
    }
    
    walk(){
        if(this.vx === 0 || this.vy === 0){
            this.ix = 1;
        }else{
            if(this.walkDelay++ > 40){
                this.walkDelay = 0;
                if(this.id === 1)
                    this.id = 0;
                else
                    this.ix = this.ix === 0 ? 2 : 0;
            }
        }
    }

    update(){

        this.walk();
        
        if( (this.dx-1 <= this.x && this.x <= this.dx+1) || 
            (this.dy-1 <= this.y && this.y <= this.dy+1) ){
            this.vx = 0;
            this.vy = 0;
        }
        this.x += this.vx;
        this.y += this.vy;
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
    }
    move(dir){
        switch(dir){
            case "ArrowUp":
                this.moveTo(this.x, this.y-10);
                //this.y -= 10;
                break;
            case "ArrowRight":
                this.moveTo(this.x+10, this.y);
                //this.moveTo(10, 0);
                //this.x += 10;
                break;
            case "ArrowDown":
                this.moveTo(this.x, this.y+10);
                //this.moveTo(0, 10);
                //this.y += 10;
                break;
            case "ArrowLeft":
                this.moveTo(this.x-10, this.y);
                //this.moveTo(-10, 0);
                //this.x -= 10;
                break;
        }
        //this.walk();
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