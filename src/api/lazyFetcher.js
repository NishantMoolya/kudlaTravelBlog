const baseURL = process.env.REACT_APP_BASE_URL;

const lazyFetcher = async (link,pageNo) => {
    const url = `${baseURL}${link}?page=${pageNo}`;
    try {
        const res = await fetch(url);
        if(res.status === 200){
            return await res.json();
        }else if(res.status === 204){
            return [];
        }
    } catch (err) {
        //console.log(`enable to fetch search result for the place(lazyFetcher):${err}`);
        throw new Error("enable to fetch more");
    }
}

//lazyFetcher('/place',10).then(data => console.log(data))

export { lazyFetcher };
