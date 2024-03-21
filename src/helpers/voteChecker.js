const voteChecker = (blogVotedList,blogId) => {
    return blogVotedList.includes(blogId);
};

export { voteChecker };