/* SELECTORS */
export const selectAllPosts = ({ posts }) => posts;
export const selectPostById = ({ posts }, id) =>
  posts.find((post) => post.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/posts/${actionName}`;

/* ACTION CREATORS */
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
