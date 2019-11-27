import React, { Component } from "react";
import { connect } from "react-redux";
import { allProducts } from "../actions";
import { bindActionCreators } from "redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
      page: 1,
      disabled: false
    };
  }
  componentWillMount(id) {
    this.setState({
      slug: this.props.match.params.id,
      page: this.state.page + 1,
      disabled: true
    });
    console.log(this.state.page)
    this.props.allProducts(this.state.slug, this.state.page);
  }



  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
    if(this.state.page >0){
      this.setState({
        disabled: false
      });
      this.props.allProducts(this.state.slug, this.state.page);
    
    }
 
  };
  previousPage = () => {
    this.setState({
      page: this.state.page - 1,
    });
    if(this.state.page <= 2){
      this.setState({
        disabled: true
      });      
    } else{  
      this.props.allProducts(this.state.slug, this.state.page);
    }
   
  };
 

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      let newSlug = nextProps.match.params.id;
      this.setState({
        slug:newSlug,
        page: 1, 
        disabled:true,
      });

      this.props.allProducts(newSlug, this.state.page);
    }
  }
  render() {
    let products = this.props.items.allProducts;
    console.log(products)
    let getCategory = this.props.match.params.id;
    let { page } = this.state;
    return (
      <div>
        <h3>resultados:{getCategory} </h3>
        <div>
          <h2>Page: {page} </h2>
          <button onClick={this.previousPage} disabled={this.state.disabled}> previousPage </button>
          <button onClick={this.nextPage}> nextPage </button>
        </div>
        {products ? (
          <div>
            {products.results.map(item => (
              <div className="">
                <img src={item.photo.small} />
                <h1>{item.name}</h1>
                <p>{item.store.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        ) : null}
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
