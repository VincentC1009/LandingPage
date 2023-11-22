import React, { Component } from 'react';
import Particles from 'react-particles-bg';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Sighnin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			input: '',
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onButtonSubmit = () => {
		console.log('click');
	}

	render() {
		return (
			<div className="App">
				<Particles className='particles'
				params={particlesOptions}
				/>
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm 
				onInputChange={this.onInputChange} 
				onButtonSubmit={this.onButtonSubmit}/>
				<FaceRecognition />
			</div>
		);
	}
}


export default App;