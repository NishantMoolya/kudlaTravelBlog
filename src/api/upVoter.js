const baseURL = process.env.REACT_APP_BASE_URL;

const upVoter = async (_id,voted) => {
    const url = `${baseURL}/blog/vote/${_id}?voted=${voted}`;
    try {
        await fetch(url,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            credentials:'include'
        });
    } catch (err) {
        console.log(`enable to vote blog(upVoter):${err}`);
    }
};

const totalBlogsVoted = async () => {
    const url = `${baseURL}/user/vote`;
    try {
        const res = await fetch(url,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            },
            credentials:'include'
        });
        const data = await res.json();
        if(res.status === 200) return data.blogs_voted;
        else return [];
    } catch (err) {
        console.log(`enable to vote blog(upVoter):${err}`);
        return [];
    }
};

export { upVoter,totalBlogsVoted };