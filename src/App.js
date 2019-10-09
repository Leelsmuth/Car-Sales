import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import * as actionCreators from "./state/actionCreators";

export const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const addFeature = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  // `count` comes from the state of the app
  // `increment` is an action creator
  // THE GOODIES COME FROM PROPS!!!!! YOU WILL FORGET THIS

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// `connect` PLUGS THE APP STATE AND THE ACTION CREATORS
// INTO THE COMPONENT!!! (through its props)
export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators // we get all action creators through props (9)
)(App);
