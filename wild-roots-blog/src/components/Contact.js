import React from 'react';
import '../assets/Contact.css';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
        }
      }
      
      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3000/contact/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent."); 
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
      resetForm(){
        this.setState({name: '', email: '', message: ''})
      }
      
      render() {
        return(
          <div className="Contact-App">
            <h1>Contact Us!</h1>
            <p>If you would like to contact us for any reason at all, please fill out the form below.</p>
            <br></br>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="inputEmail">Email: </label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">Submit</button>
              <br></br>
            </form>
          </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  // handleSubmit(event) {
  // }
}

export default Contact;
