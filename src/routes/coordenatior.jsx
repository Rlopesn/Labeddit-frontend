export const goToLogin = (navigate) => {
    navigate("/");
};

export const goToSignup = (navigate) => {
    navigate("/signup");
};

export const goToPost = (navigate) => {
    navigate("/post");
};

export const goToComment = (navigate, postId) => {
    navigate("/comments/" + postId);
}