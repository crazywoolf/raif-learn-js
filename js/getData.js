const getData = (callback) => {
    fetch("/data")
        .then(data => data.json())
        .then(data => {console.log(data); return data;})
        .then(data => {if (typeof callback == 'function') callback(data)})
        .catch(error => console.log(`error occurred: ${error}`))
}
