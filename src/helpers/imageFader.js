const imageFader = (imageList,i) => {
    i = (i+1)%imageList;
    return i;
}

export { imageFader };