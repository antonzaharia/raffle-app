export default function NotificationReducer(
  state = { notifications: [] },
  action
) {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS":
      return { ...state, notifications: [...action.payload] };
    default:
      return state;
  }
}
