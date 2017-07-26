import axios from 'axios';


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "450688d465524dce95edd99b25bb0a1b";

const helper = {


		nytQuery: function(topic, startYear, endYear) {
		console.log("TOPIC: " + topic);
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date" + startYear + "&0101&end_date" + endYear + "0101";
		return axios.get(queryURL)
		.then(function(response) {
			var results = [];
			var responseResults = response.data.response.docs;//.docs
			var counter = 0;

			for(var i = 0; i < responseResults.length; i++) {
				if (counter < 5) {
					
			

				if (responseResults[counter].headline.main && responseResults[counter].pub_date && responseResults[counter].web_url){
					results.push(responseResults[counter]);	
				}
			}
				counter++;
			}
			console.log(responseResults);
			console.log(results);
			return results;
		})
	},

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
	}//close runSearch Function


// };
export default helper; 