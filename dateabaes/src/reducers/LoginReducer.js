const INITIAL_STATE = { username: '', password: '', likes: {}, dislikes: {} }

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'user_login':
      console.log(action.userData);
      return Object.assign({}, state, action.userData);
    case 'user_login_failed':
      return Object.assign({}, state, { username: '', password: '' });
    case 'login_username_change':
      return Object.assign({}, state, { username: action.username });
    case 'login_password_change':
      return Object.assign({}, state, { password: action.password })
    case 'swipe_yes':
      return Object.assign({}, state, { likes: action.likes });
    case 'swipe_no':
      return Object.assign({}, state, { dislikes: action.dislikes });
    case 'matches_found':
      return Object.assign({}, state, { matches: action.matches });
    case 'update_messages':
      return Object.assign({}, state, { messages: action.messages });
    default:
      return state;
  }
}
