import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCakes } from "../actions";

class CakesIndex extends Component {
  componentDidMount() {
    this.props.fetchCakes();
  }

  renderCakes() {
    return _.map(this.props.cakes, cake  => {
      return (
        <li className="list-group-item list-group-item-action" key={cake.id}>
          <Link to={`/cakes/${cake.id}`}>
            {cake.name}
          </Link>
          <div>
            {cake.imageUrl}
          </div>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.cakes)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary btn-lg" to="/cakes/new">
            Add a Cake
          </Link>
        </div>
        <h3>Cakes</h3>
        <ul className="list-group">
          {this.renderCakes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cakes: state.cakes };
}

export default connect(mapStateToProps, { fetchCakes })(CakesIndex);
