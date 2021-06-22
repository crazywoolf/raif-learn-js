import {renderList} from './renderList.js';
import {api} from "./api.js";

export const getData = (url, params, callback) => api.get(url, params)
	.then(res => res.json())
	.then(res => {
		console.log(res);
		if (typeof callback === 'function') {
			callback(res);
		}
	})
	.catch(err => console.log(err));

getData('http://localhost:3000/data', {}, renderList);
