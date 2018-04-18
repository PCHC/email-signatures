export function updateForm(action) {
  return {
    type: 'UPDATE_FORM',
    payload: action.payload,
    name: action.name
  }
}

export function updateLocation(action) {
  return {
    type: 'UPDATE_LOCATION',
    payload: action
  }
}

export function updateCanvas(action) {
  return {
    type: 'UPDATE_CANVAS',
    payload: action
  }
}
