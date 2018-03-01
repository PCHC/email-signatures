import { combineReducers } from 'redux';
import SignatureReducer from './reducer_signature';
import CanvasReducer from './reducer_canvas';
import Locations from '../data/Locations';

const rootReducer = combineReducers({
  signature: SignatureReducer,
  locations: Locations,
  canvas: CanvasReducer,
});

export default rootReducer;
