import {gc} from "./panel/game-canvas.js"
import {sc} from "./panel/story-canvas.js";

window.addEventListener("load",function(){
       gc.run();
       sc.run();
});