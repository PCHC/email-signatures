export function updateText(action) {
  return {
    type: 'UPDATE_TEXT',
    payload: action.text,
    name: action.name
  }
}

export function updateLocation(action) {
  return {
    type: 'UPDATE_LOCATION',
    payload: action
  }
}

export function updateFax(action) {
  return {
    type: 'UPDATE_FAX',
    payload: action
  }
}

export function updateCanvas(action) {
  return {
    type: 'UPDATE_CANVAS',
    payload: action
  }
}
