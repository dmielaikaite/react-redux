//reducer cannot return undefined, it should return any value besides that one
export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return action.payload
    default:
      return posts
  }
}
