import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchProduct} from "../actions";
import  Search from "../components/Search";
import Products from "../components/Products";
import HomeText from "../components/HomeText";

class Home extends Component {
    componentWillMount() {
        this.props.searchProduct();
      }

      getKeywords = (event) => {
        let key = event.target.value;
        this.props.searchProduct(key);
        console.log(key)
    }
  render() {
    let products = this.props.items.searchProduct;
    return (
      <div className="container">
        <section className="space_section"></section>   
         <HomeText/>  
         <Search keywords={this.getKeywords}/>
         <Products products={products}/>
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
  return bindActionCreators({ searchProduct }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
