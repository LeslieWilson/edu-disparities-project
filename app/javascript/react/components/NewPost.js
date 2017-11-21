import React, {Component} from 'react';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
    console.log(this.state.body)
  }

  clearForm(){
    this.setState({
      title: '',
      body: '',
      error: []
    })
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.title == '' || this.state.body == ''){
      let error_array = []
      if (this.state.title == ''){
        error_array.push("Please fill out a title")
      } else if (this.state.body == ''){
        error_array.push("Please create a post")
      }
      this.setState({errors: error_array})
    } else {
      let formPayload = {
        body: this.state.body,
        title: this.state.title
      }
      this.props.addNewPost(formPayload)
      console.log(formPayload)
      this.clearForm();

    }
  }

  render(){
    let errors = this.state.errors
    let error_messages = []
    if(errors.length > 0){
      error_messages = errors.map( error => {
        return(
      <li>{error}</li>
    )
  })
}
    return(
      <div>
        <div className="empty-space">
        </div>
        <a href="/signout">Sign Out from google</a>
        <ul>{errors}</ul>
        <form className="new-post-form">
        <label>Post Title:
          <input
            name={"title"}
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
          />
        </label>

        <label>Post Body:
          <textarea
            name={"body"}
            value={this.state.body}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <button className="submit-new-post" type="submit" onClick={this.handleSubmit}>Submit Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost
