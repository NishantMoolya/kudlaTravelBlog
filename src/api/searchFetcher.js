const baseURL = process.env.REACT_APP_BASE_URL;

const placeURL = `${baseURL}/place`;
const accessSearchData = async () => {
    const url = `${placeURL}/search`;
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch searching data(searchFetcher):${err}`);
        return [];
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
        return [];
    }
}
export { accessSearchData,fetchResults };