function Boy(x,y){
        this.x = x || 100;
        this.y = y || 100;
        // var dx = 100*arguments[2];
        // var dy = 100*arguments[3];

        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*1;
        this.sy = this.sh*2;
        this.isFirst = true;
}

Boy.prototype = {
    draw : function(ctx){
        img = new Image();
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
    },
    move : function(dir){
        switch(dir){
            case "ArrowUp": //up
                this.y -= 10;
                break;
            case "ArrowRight": // right
                this.x += 10;
                break;
            case "ArrowLeft": // left
                this.y += 10;
                break;
            case "ArrowDown": // down
                this.x -= 10;
                break;
        }
    },
    
}