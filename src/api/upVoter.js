const baseURL = 'http://localhost:8000/v1/api';

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

export { upVoter };