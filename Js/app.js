// Dom Elements //

const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


// User Class //
class User {
    constructor () {
        
    }
    
    userGamepad () {
        ctx.fillRect(125, canvas.height - 10, 100, 10)
        
    }   
}