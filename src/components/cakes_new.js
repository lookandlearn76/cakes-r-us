import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createCake } from "../actions";
const required = value => (value ? undefined : 'Required')
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue1 = minValue(1)
const maxValue = max => value =>
    value && value > max ? `Must be less than ${max}` : undefined
const maxValue5 = maxValue(5)

class CakesNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createCake(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Cake"
          name="name"
          validate={[required]}
          component={this.renderField}
        />
        <Field
          label="Comment"
          name="comment"
          validate={[required]}
          component={this.renderField}
        />
        <Field
          label="ImageUrl"
          name="imageUrl"
          placeholder="If you have an image link you can enter the address here"
          component={this.renderField}
        >"If you have an image you can enter it here"</Field>
        <Field
          label="Yum Factor"
          name="yumFactor"
          validate={[required, number, minValue1, maxValue5]}
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary btn-large">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: "CakesNewForm"
})(connect(null, { createCake })(CakesNew));
