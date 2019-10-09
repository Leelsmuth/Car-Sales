import * as types from "./actionTypes";

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF

export const addFeature = feature => {
  return { type: types.BUY_ITEM, payload: feature };
};

export const removeFeature = feature => {
  return { type: types.REMOVE_FEATURE, payload: feature };
};
