import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state = {

  projects: [] 
		}
	}

	componentWillMount(){

	this.setState( {projects:[

	  {
	  title: 'Business Website',
	  category: 'Web Design'
	  },

	  {
	  title: 'Social app',
	  category: 'Mobile Development'
	  },

	  {
	  title: 'Ecommerce shopping Cat',
	  category: 'Web Development'
	  }

	]});
	}

  render() {
    return (
      <div className="App">
	      <AddProject/>
	      <Projects  projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
