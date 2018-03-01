const INITIAL_STATE = {
  data: null,
  filename: null,
  generating: true,
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_CANVAS':
      return {
        ...state,
        data: action.payload.data,
        filename: action.payload.filename,
        generating: action.payload.generating
      };
    default:
      return state;
  }
}
