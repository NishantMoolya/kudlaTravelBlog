const baseURL = process.env.REACT_APP_BASE_URL;


const blogCreator = async (data) => {
    const url = `${baseURL}/blog/new`;
    const options = {
        method:"POST",
        body:data
    }
    try {
        const res = await fetch(url,options);
        return res;
    } catch (err) {
        const res = {status:500};
        console.log(`enable to post blog data(blogCreator):${err}`);
        return res;
    }
};

export { blogCreator };