import shortid from "shortid";

/* SELECTORS */
export const selectAllPosts = ({ posts }) => posts;
export const selectPostById = ({ posts }, id) =>
  posts.find((post) => post.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/posts/${actionName}`;

export const addPost = (payload) => ({
  type: createActionName("ADD_POST"),
  payload,
});

export const removePost = (payload) => ({
  type: createActionName("REMOVE_POST"),
  payload,
});

export const editPost = (payload) => ({
  type: createActionName("EDIT_POST"),
  payload,
});

/* ACTION CREATORS */
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case createActionName("ADD_POST"):
      return [...statePart, { ...action.payload, id: shortid() }];

    case createActionName("REMOVE_POST"):
      return [...statePart.filter((post) => post.id !== action.payload)];

    case createActionName("EDIT_POST"):
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

    default:
      return statePart;
  }
};
