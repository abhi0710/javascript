import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'


export let TDS = {};

console.log(dispatcher)



dispatcher.register(action => {
	console.log(action);
})
