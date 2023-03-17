/* SELECTORS */
export const selectAllPosts = ({ posts }) => posts;
export const selectPostById = ({ posts }, id) =>
  posts.find((post) => post.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/posts/${actionName}`;

export const removePost = (payload) => ({
  type: createActionName("REMOVE_POST"),
  payload,
});

/* ACTION CREATORS */
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case createActionName("REMOVE_POST"):
      return [...statePart.filter((post) => post.id !== action.payload)];

    default:
      return statePart;
  }
};
