/* SELECTORS */

/* ACTIONS */
const createActionName = (actionName) => `app/posts/${actionName}`;

/* ACTION CREATORS */
export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
