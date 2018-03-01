const INITIAL_STATE = {
  name: 'John Doe',
  credentials: 'MD',
  title: 'Physician',
  address: '103 Maine Avenue, Bangor, Maine 04401',
  phone: '992-9200',
  ext: '1234',
  fax: true,
  cell: '207-867-5309',
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        [action.name]: action.payload
      };
    case 'UPDATE_LOCATION':
      return {
        ...state,
        address: action.payload
      }
    case 'UPDATE_FAX':
      return {
        ...state,
        fax: action.payload
      }
    default:
      return state;
  }
}
