const route = {
    start:{
        x:'100vw',
        opacity:0
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            duration:1
        }
    },
    exit:{
        x:'-100vw',
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}

export { route };