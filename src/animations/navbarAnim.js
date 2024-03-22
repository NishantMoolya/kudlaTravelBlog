const menu = {
    start:{
      y:"-100vh"
    },
    end:{
      y:0,
      transition:{
        duration:0.5
      }
    },
    exit:{
      y:"-100vh",
      transition:{
        delay:0.9,
        duration:0.5
      }
    }
  }

  const link = {
    start:{
      opacity:0,
      y:-20
    },
    end:{
      opacity:1,
      y:0
    },
    exit:{
      opacity:0,
      y:-20
    }
  }

  export { menu,link };