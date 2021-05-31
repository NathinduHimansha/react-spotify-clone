export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  dicover_weekly: null,
  token: null,
};

const reducer = (state, action) => {
  //action has -> type, [payload]<-can be any name
  switch (action.type) {
    case "SET_USER":
      return {
        //this keeps the current states(not overriidng) <- spread operator
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.playLists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        dicover_weekly: action.dicover_weekly,
      };

    default:
      return state;
  }
};
export default reducer;
