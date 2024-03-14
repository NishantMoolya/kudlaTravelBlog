const baseURL = 'http://localhost:8000/v1/api';
//const blogURL = 'http://localhost:8000/v1/api/blog';
const placeURL = `${baseURL}/place`;
const accessSearchData = async () => {
    const url = `${placeURL}/search`;
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch searching data(searchFetcher):${err}`);
        return null;
    }
};

const fetchResults = async (link) => {
    const url = `${baseURL}${link}`;
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