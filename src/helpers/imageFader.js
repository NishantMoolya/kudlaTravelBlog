//import beach1 from "../assets/beach1.jpg"
//import hotel from '../assets/hotel.jpg'
//let imageList = [5,6,7,8];
//let i = -1;
const imageFader = (imageList,i) => {
    i = (i+1)%imageList;
    return i;
}

export { imageFader };