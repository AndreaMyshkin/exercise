import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { menu } from "./actions";
import { bindActionCreators } from "redux";

import NavMenu from "./components/NavMenu";

class Routes extends Component {
  componentWillMount() {
    this.props.menu();
  }

  render() {
    let menuCategories = this.props.menuList.menuList;
    console.log(menuCategories);
    return (
      <div>
        <NavMenu menuItems={menuCategories} />

        {menuCategories && menuCategories.length > 0
          ? menuCategories.map(item => (
            <Switch>
              <Route path={item.slug}  key={item.slug} exact/>
              </Switch>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuList: state.menuList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ menu }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
