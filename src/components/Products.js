import React, { Component } from "react";
import { connect } from "react-redux";
import { allProducts } from "../actions";
import { bindActionCreators } from "redux";

class Products extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slug: this.props.match.params.id
      };
    }
  
componentWillMount(id) {
      this.setState({
        slug: this.props.match.params.id
      });
      let slug = this.state.slug
      this.props.allProducts(slug)
    }
  
    componentWillReceiveProps(nextProps) {
      if (this.props.match.params.id !== nextProps.match.params.id) {
        let newSlug = nextProps.match.params.id;
        this.props.allProducts(newSlug)
      }
    }
    render() {
        let menuCategories = this.props.items.allProducts
    console.log(menuCategories)
      return (
        <div>
          <h3>resultados </h3>
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
    return bindActionCreators({ allProducts }, dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Products);
