import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input className={s.input} type="text" name="name" value={name} onChange={this.handleChange} required />
        </label>

        <label>
          Number
          <input className={s.input} type="tel" name="number" value={number} onChange={this.handleChange} required />
        </label>

        <button className={s.button} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
