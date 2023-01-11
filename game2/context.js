class Context{
    #enemies;

    constructor(){
        this.#enemies = null;
    }

    get enemies(){
        return this.#enemies;
    }

    set enemies(e){
        this.#enemies = e;
    }
}

export let context = new Context();