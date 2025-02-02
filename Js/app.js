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


// System Class //

class System {
    constructor () {

    }

    systemGamepad () {
        ctx.fillRect(125, 0, 100, 10)
    }
}

// Window //

window.addEventListener('load', () => {
    let user = new User ()
    let system = new System ()

    user.userGamepad()
    system.systemGamepad()
})