import {wolf} from "wolf경로.js"
import {house} from "house경로.js"
import {firePlace} from "firePlace경로.js"

class GameCanvas{
    #wolf;
    #house;
    #firePlace;
    #objArr;
    #curObj;

    constructor(){
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.#wolf = wolf;
        this.#house = house;
        this.#firePlace = firePlace;
        this.#objArr = [wolf, house, firePlace];
        this.#curObj = wolf;

        //add eventHandler
        this.dom.addEventListener("load", this.eventHandler);
    }

    set obj(o){
        this.#curObj = this.#objArr.filter(obj => o===obj).shift();
        console.log(`this.#curObj is ${this.#curObj}`);
    }

    get obj(){
        return this.#curObj;
    }

    run(){
        this.update();
        this.draw();
        window.setTimeout(()=>{
            this.run();
        },17);
    }
    
    update(){
        this.#curObj.update();
    }

    draw(){
        this.#curObj.draw(this.ctx);
    }

    eventHandler(e){
        this.dom.onkeyup = (e)=> this.#curObj.keyUp(e);
        this.dom.onkeydown = (e)=> this.#curObj.keyDown(e);
        //add any event function
    }

}

export let gc = new GameCanvas();