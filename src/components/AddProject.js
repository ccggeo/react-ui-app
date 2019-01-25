import React, { Component } from 'react';

class AddProject extends Component { 
//store data we submit into state within constructor 
  constructor(){
	  super();
	  this.state ={
	  newProject:{}
  }
  }


  static defaultProps = {
	categories: ['Web Design', 'Web Development', 'Mobile Development']

  }

handleSubmit(e){
// Not console logging because its submitting the form
	e.preventDefault();
//	console.log(this.refs.title.value);
	console.log("Hello");
}

render() { 
//	console.log("Render Triggered");
	let categoryOptions = this.props.categories.map(category => {


	return <option key={category} value ="category">{category}</option>
		});

    return (
      <div>
	      <h3>Add Project!</h3>
	      <form onSubmit={this.handleSubmit.bind(this)}/>
	      <form>
		      <div>
			      <label>Title</label><br />
			      <input type="text" ref="title" />
		      </div>
		      <div>
			      <label>Category</label><br />
			      <select ref="category">
				      {categoryOptions}
			      </select>
		      </div>
		      <input type="submit" value="Submit"/>
	      </form>
      </div>
    );
  }
}

export default AddProject;
