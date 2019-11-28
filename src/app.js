import React, { Component } from "react";
import {  Route } from "react-router-dom";
import { connect } from "react-redux";
import { menu } from "./actions";
import { bindActionCreators } from "redux";
import NavMenu from "./components/NavMenu";
import Sidebar from "./components/Sidebar";
import BackgroundOnMenu from "./components/BackgroundOnMenu";
import ProductsContainer from "./views/ProductsContainer";
import Home from "./views/Home";
import "./App.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";


class App extends Component {
   state ={
    sidebarOpen:false
   }

   toggleHandler=()=>{
     this.setState((prevState)=>{
       return{sidebarOpen:!prevState.sidebarOpen}
     })
   }
  
   backgroundHandler = () =>{
      this.setState({sidebarOpen:false})
   }
  componentWillMount() {
    this.props.menu();
  }

  render() {
    let menuCategories = this.props.items.menuList;
   
    let backgroundOnMenu;
    if(this.state.sidebarOpen){
      backgroundOnMenu = <BackgroundOnMenu click={this.backgroundHandler}/>
    }
    console.log(menuCategories)
    return (
      <div style={{height:'100%'}}>
       
        <Router>
          <NavMenu menuItems={menuCategories} menuHandler={this.toggleHandler}/>
          <Sidebar show={this.state.sidebarOpen} menuItems={menuCategories}/>
          {backgroundOnMenu}
          <Route path="/" exact component={Home}/>
          <Route path="/:id" component={ProductsContainer} />
        </Router>
      </div>
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
