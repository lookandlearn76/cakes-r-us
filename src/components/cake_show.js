import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCake, deleteCake } from '../actions';

class CakeShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCake(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteCake(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { cake } = this.props;

    if (!cake) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <Link to="/">
          <div className="btn btn-primary">Back To Index</div>
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Cake
        </button>
        <h1>Cake Name: {cake.name}</h1>
        <h2>Comments: {cake.comment}</h2>
        <iframe
          title={cake.name}
          className="embed-responsive-item"
          src={cake.imageUrl}
        >
          <img minWidth="100%" src={cake.imageUrl} />
        </iframe>
        <h3>Yum Factor: {cake.yumFactor}</h3>
      </div>
    );
  }
}

function mapStateToProps({ cakes }, ownProps) {
  return { cake: cakes[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCake, deleteCake })(CakeShow);
