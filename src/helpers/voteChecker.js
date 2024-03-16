const blogVotedList = ["65f5f442fb5b857986594481","65f5f480fb5b857986594483","65f5f4defb5b857986594489"];
const voteChecker = (blogId) => {
    return blogVotedList.includes(blogId);
};

export { voteChecker };