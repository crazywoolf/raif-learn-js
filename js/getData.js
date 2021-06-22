import {renderList} from './renderList.js';

export const getData = (url, params, callback) => fetch(url, params)
	.then(res => res.json())
	.then(res => {
		console.log(res);
		if (typeof callback === 'function') {
			callback(res);
		}
	})
	.catch(err => console.log(err));

getData('http://localhost:3000/data', {}, renderList);
