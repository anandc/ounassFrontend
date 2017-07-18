import 'whatwg-fetch';
const fetchProducts = () => {
	return fetch('http://localhost:4000/search/?searchString=', {
      method: "POST",
      body: ''
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      return data;
    });
};
export { fetchProducts };
