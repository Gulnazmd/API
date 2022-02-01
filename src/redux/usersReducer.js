const defaultState = {
  gitUsers: [],
}

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'prev':
      return { ...state, currentPage: state.currentPage - action.payload }
    case 'next':
      return { ...state, currentPage: state.currentPage + action.payload }
    default:
      return state
    }
}