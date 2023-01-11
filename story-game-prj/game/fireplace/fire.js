class Fire{
    #SMALL_FIRE
    #MIDDLE_FIRE
    #BIG_FIRE
    #curFire
    constructor(){
        this.#SMALL_FIRE = document.querySelector(".small-fire");
        this.#MIDDLE_FIRE = document.querySelector(".middle-fire");
        this.#BIG_FIRE = document.querySelector(".big-fire");
        this.#curFire = this.#SMALL_FIRE;
        
    }
}