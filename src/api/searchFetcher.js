const baseURL = 'http://localhost:8000/v1/api/place';
const accessSearchData = async () => {
    const url = `${baseURL}/search`;
    try {
        //console.log('accessing');
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch searching data(searchFetcher):${err}`);
        return null;
    }
};

const fetchResults = async (_id) => {
    const url = `${baseURL}/search/${_id}`;
    try {
        console.log('accessing');
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch search result for the place(searchFetcher):${err}`);
        return null;
    }
}
export { accessSearchData,fetchResults };