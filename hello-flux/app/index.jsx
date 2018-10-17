import React from 'react'
import ReactDom from 'react-dom'
import constants from './constants/app-constants.js'

console.log(constants)

class App extends React.Component {
	render() {
		return (
			<div> Hello </div>
	 	)	
	}
}

ReactDom.render(<App/>, document.getElementById("app"))
