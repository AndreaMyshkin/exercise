import React, { Component } from "react";
import { connect } from "react-redux";
import { allProducts } from "../actions";
import { bindActionCreators } from "redux";
import moment from "moment";
import Products from "../components/Products";
import ButtonPreviousPage from "../components/ButtonPreviousPage";
import ButtonNextPage from "../components/ButtonNextPage";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
      page: 1,
      disabled: false,
      value: [""],
      allFilters: "",
 
    };
  }

  componentWillMount(id) {
    this.setState({
      slug: this.props.match.params.id,
      page: this.state.page + 1,
      disabled: true
    });
    console.log(this.state.page);
    this.props.allProducts(
      this.state.slug,
      this.state.page,
      this.state.allFilters
    );
  }

  handleOnChange =(e)=> {
    let newFilter = e.target.value;
    let filters = this.state.value;
    filters.indexOf(newFilter) === -1
      ? filters.push(newFilter)
      : filters.length === 1
      ? (filters = [])
      : filters.splice(filters.indexOf(newFilter));
    this.setState({ value: filters, allFilters: this.state.value.join("&") });
  }
  
  handleButtonSubmit=(e)=> {
    e.preventDefault();
    this.props.allProducts(
      this.state.slug,
      this.state.page,
      this.state.allFilters
    ).then(this.setState({
    allFilters:[]
    }));
  }
  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
    if (this.state.page > 0) {
      this.setState({
        disabled: false
      });
      this.props.allProducts(
        this.state.slug,
        this.state.page,
        this.state.allFilters
      );
    }
  };
  previousPage = () => {
    this.setState({
      page: this.state.page - 1
    });
    if (this.state.page <= 2) {
      this.setState({
        disabled: true
      });
    } else {
      this.props.allProducts(
        this.state.slug,
        this.state.page,
        this.state.allFilters
      );
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      let newSlug = nextProps.match.params.id;
      this.setState({
        slug: newSlug,
        page: 1,
        disabled: true,
        allFilters: ""
      });

      this.props.allProducts(newSlug, this.state.page, this.state.allFilters);
    }
  }
  render() {
    let products = this.props.items.allProducts;
    console.log(products);
    let getCategory = this.props.match.params.id;
    let deliveryDate = "delivery_date=";
    let { page } = this.state;
  

    return (
      <div>
        <h3>{getCategory} resultados </h3>
         <ButtonPreviousPage onClick={this.previousPage} disabled={this.state.disabled}/>
         <ButtonNextPage onClick={this.nextPage}/>
        <div>
          <h2>Page: {page} </h2>
        
          <form onSubmit={this.handleButtonSubmit}>
            <label>
              <select
                multiple={true}
                value={this.state.value}
                onChange={this.handleOnChange}
              >
                <option value="" />
                <option value="max_price=100">Debajo de 100</option>
                <option value="min_price=100&max_price=200">100-200</option>
                <option value="min_price=200&max_price=300">200-300</option>
                <option value="min_price=300&max_price=400">300-400</option>
                <option value="min_price=400&max_price=500">400-500</option>
              </select>
              <select
                multiple={true}
                value={this.state.value}
                onChange={this.handleOnChange}
              >
                <option value="" />
                <option value="zone=monterrey">Monterrey</option>
                <option value="zone=area-metropolitana">
                  Area Metropolitana
                </option>
                <option value="zone=national">nacional</option>
              </select>
              <select
                multiple={true}
                value={this.state.value}
                onChange={this.handleOnChange}
              >
                <option value="" />
                <option value={deliveryDate + moment().format("YYYY-MM-DD")}>
                  Recíbelo hoy
                </option>
                <option
                  value={
                    deliveryDate +
                    moment()
                      .add(1, "day")
                      .format("YYYY-MM-DD")
                  }
                >
                  Recíbelo mañana
                </option>
                <option
                  value={
                    deliveryDate +
                    moment()
                      .add(1, "week")
                      .format("YYYY-MM-DD")
                  }
                >
                  Recíbelo la siguiente semana
                </option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
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
  return bindActionCreators({ allProducts }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
