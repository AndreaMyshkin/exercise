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
      isLoaded: false,
    };
  }
  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
      slug: this.props.match.params.id
    });

    this.props.allProducts(this.state.slug, this.state.page);
  };
  previousPage = () => {
    this.setState({
      page: this.state.page - 1,
      slug: this.props.match.params.id
    });
    this.props.allProducts(this.state.slug, this.state.page);
  };
  componentWillMount(id) {
    this.setState({
      slug: this.props.match.params.id
    });
    this.props.allProducts(this.state.slug, this.state.page);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      let newSlug = nextProps.match.params.id;
      this.setState({
        page: 1
      });
      this.props.allProducts(newSlug, this.state.page);
    }
  }
  render() {
    let menuCategories = this.props.items.allProducts;
    let getCategory = this.props.match.params.id;
    let { page } = this.state;
    return (
      <div>
        <h3>resultados:{getCategory} </h3>
        <div>
          <h2>Page: {page} </h2>
          <button onClick={this.previousPage}> previousPage </button>
          <button onClick={this.nextPage}> nextPage </button>
        </div>
        {menuCategories ? (
          <div>
            {menuCategories.results.map(item => (
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
