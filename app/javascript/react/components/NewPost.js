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
        <div className="forum-photo">
          <h1 className="forum-title">
            Community Forum
          </h1>
        </div>
        <div className="forum-description">
          <p>Science and technology are the tools of liberation. With those tools, we can collectively build a path to the future. Therefore, people of color, and sympathetic people of good will, must seize and construct that path or equality will remain just a dream deferred. This forum is meant to be a place to discuss their findings from the search engine, to ask questions, and address on a political level the inequalities they may be experiencing.


</p>
        </div>
        <a href="/signout">Sign Out</a>
        <ul>{errors}</ul>
        <div className="form-container">
            <div className="forum-text-container">
              <p>This is a project to help liberate technology by opening the doors of educational opportunity and resources at an early age to POC. Helping families of color make better informed educational choices is a starting point in transforming the system. Enabling parents to compare science curricula in different districts is a way of empowering communities. Understanding this comparison helps level the playing field. A level playing field becomes a diverse and a fair playing field. As agents of change, we seek to create a safe space for this to happen.</p>
            </div>
          <form className="new-post-form">
            <h1 className="new-forum-post">New Forum Post</h1>
            <label>Title
              <input
                className="post-title"
                name={"title"}
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
              />
            </label>

            <label>Body
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
      </div>
    )
  }
}

export default NewPost
