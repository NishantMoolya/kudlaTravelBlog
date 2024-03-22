const card = {
    start:{
        opacity:0,
        y:"100vh"
    },
    end:{
        opacity:1,
        y:0,
        transition:{
            delay:0.5,
            duration:1,
            type:'spring'
        }
    }
}

const cardText = {
    start:{
        opacity:0,
        y:10
    },
    end:{
        opacity:1,
        y:0,
        transition:{
            delay:1,
            duration:1,
            type:'spring'
        }
    }
}



export { card,cardText };