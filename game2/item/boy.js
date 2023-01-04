class Boy{
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;
        
        this.dx = 0;
        this.dy = 0;

        this.ix = 0;
        this.iy = 0;

        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*1;
        this.sy = this.sh*2;
        this.isFirst = true;
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(ctx){
        let img = new Image();
        img.src = "./img/boy.png";
        img.onload = function(){
            console.log(this);
            if(this.isFirst){
                this.isFirst = false;
            }else{
                ctx.clearRect(0,0,700,600);
            }
            ctx.drawImage(img,
                this.sx,this.sy,this.sw,this.sh,
                this.x,this.y,106,148.25);
        }.bind(this);
    }
    move(dir){
        switch(dir){
            case 1:
                this.y -= 1;
                break;
            case 2:
                this.x += 1;
                break;
            case 3:
                this.y += 1;
                break;
            case 4:
                this.x -= 1;
                break;
        }
    }
    moveTo(dx,dy){
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.dx = w/d;
        this.dy = h/d;
    }
}