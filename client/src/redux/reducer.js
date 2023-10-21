import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from './actions-types';


const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
   
        myFavorites: state.myFavorites.concat(action.payload),
        allCharacters: state.allCharacters.concat(action.payload),
      };

    case REMOVE_FAV:
      return {
        ...state,

        myFavorites: state.myFavorites.filter((fav) => fav.id !== action.id),
        allCharacters: state.allCharacters, 


      };

      case FILTER:
        return {
          ...state,
          myFavorites: state.allCharacters.filter((character) =>
            character.gender.toLowerCase() === action.payload.toLowerCase()
          ),
        };

        case ORDER:
          const sortedCharacters = [...state.allCharacters].sort((a, b) => {
            if (action.payload === "A") {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          });
        
          return {
            ...state,
            myFavorites: sortedCharacters,
          };
        
    default:
      return state;
  }
}

export default rootReducer;
