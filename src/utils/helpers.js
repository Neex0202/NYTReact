import axios from 'axios';


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "450688d465524dce95edd99b25bb0a1b";

const helper = {

	// getArticle : function() {
	// 	return axios.get("api/saved");
	// }

	// postArticle : function(){

	// 	return.axios.post("api/saved");

	// }


	// runSearch : function(){

	// 	return axios.get(queryURL, {
	// 		params: {
	// 			apiKey: apiKey
	// 		// 	q: topic,
	// 		// 	begin_date: start,
	// 		// 	end_date: end
	// 		// } //end params
	// 	}).then(function(res){
	// 		console.log(res.data.results)
	// 		return res.data.results
	// 	})
	// }//close runSearch Function


};
export default helper; 