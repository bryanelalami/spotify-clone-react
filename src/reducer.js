export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  current_playlist: null,
  tracks: null,
  track: null,
  token: null,
  // REMOVE AFTER FINISH DEVELOPING...
  // token:"BQBXNXTDvQVaNcQLZs8PrT7s3mKIFjR43El8t_acmVbiHrvmUREECvjqN56IgfDMOBnUiW5izWjT-uGA1MM_heTL7wkZXDrEvBCfqlFNmHD5fs8EY-T-_vZtv0RxO4uvGGfE4oZXpUltCkBrW3H2UccKUNKh",
};

const reducer = (state, action) => {

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    

    case "SET_CURRENT_PLAYLIST": {
      let currentPlaylist = null;
      state.playlists.items.forEach(playlist => {
        if (playlist.id === action.id) {
          currentPlaylist = playlist;
        }
      });
      return {
        ...state,
        current_playlist: currentPlaylist,
      };
    }
    case "SET_TRACKS": {
      return {
        ...state,
        tracks: action.tracks,
      };
    }
    case "SET_TRACK": {
      return {
        ...state,
        track: action.track,
      };
    } 
    default:
      return state;
  }
};

export default reducer;
