import React from "react";
import { connect } from "react-redux";

import { changePageTitle, incrementPageCounter } from "./redux";
import { ClickBarChart } from "./component/barchart";
import { DataFetcher } from "./data/data";

// App.js
export class App extends React.Component {
  buttonClick = () => {
    this.props.incrementPageCounter();
    this.props.changePageTitle(
      "You clicked: " + this.props.pageContent.clickCounter + " times"
    );
  };

  getButton = color => {
    return (
      <button
        style={{ color: "white", backgroundColor: color }}
        onClick={this.buttonClick}
      >
        {color}
      </button>
    );
  };

  render() {
    return (
      <div>
        <h1>{this.props.pageContent.title}</h1>
        {this.getButton("blue")}
        {this.getButton("red")}
        {this.getButton("green")}

        <h2>Click Counters</h2>
        {/* TODO#1: Link the barchart to the number of click for each color */}
        <ClickBarChart />

        {/* TODO#2: 
            Instead of using only static data, 
            create a new React component and 
            visualize another dataset obtained 
            from some URL. You can pick some visualization from:
            https://rma-consulting.github.io/react-easy-chart/ */}
        {/*<DataFetcher />*/}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  pageContent: state.pageContent
});

const mapDispatchToProps = {
  changePageTitle,
  incrementPageCounter
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
