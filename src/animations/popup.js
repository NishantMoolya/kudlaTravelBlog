const popup = {
    start:{
        opacity:0,
        scale:0,
    },
    end:{
        opacity:1,
        scale:1,
        y:0,
        transition:{
            delay:0.1,
            duration:0.5,
            type:'spring'
        }
    },
    exit:{
        scale:0,
        opacity:0
    }
}


export { popup };