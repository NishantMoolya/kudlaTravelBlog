const baseURL = 'http://localhost:8000/v1/api';


const blogCreator = async (link,data) => {
    const url = `${baseURL}${link}`;
    const options = {
        method:"POST",
        body:data
    }
    try {
        const res = await fetch(url,options);
        return await res.json();
    } catch (err) {
        console.log(`enable to post blog data(blogCreator):${err}`);
    }
};

export { blogCreator };