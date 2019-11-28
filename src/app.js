import React, { Component } from "react";
import {  Route } from "react-router-dom";
import { connect } from "react-redux";
import { menu } from "./actions";
import { bindActionCreators } from "redux";
import NavMenu from "./components/NavMenu";
import ProductsContainer from "./views/ProductsContainer";
import "./App.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";


class App extends Component {
  componentWillMount() {
    this.props.menu();
  }

  render() {
    let menuCategories = this.props.items.menuList;
    console.log(menuCategories)
    return (
      <>
       
        <Router>
          <NavMenu menuItems={menuCategories} />
          <Route path="/:id" component={ProductsContainer} />
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ menu }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
