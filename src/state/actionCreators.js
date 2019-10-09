import * as types from "./actionTypes";

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF

export function buyItem(item) {
  return {
    type: types.BUY_ITEM,
    payload: {
      item: item
    }
  };
}

export function removeFeature(feature) {
  return {
    type: types.REMOVE_FEATURE,
    payload: {
      feature: feature
    }
  };
}
