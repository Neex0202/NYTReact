import axios from 'axios';


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "450688d465524dce95edd99b25bb0a1b";

const helper = {


		nytQuery: function(topic, startYear, endYear) {
		console.log("TOPIC: " + topic);
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date" + startYear + "&0101&end_date" + endYear + "0101";
		return axios.get(queryURL)
	},

	getArticle : function() {
		return axios.get("api/saved");
	}


//POSTING ARTICLE FUNCTIONS
	// saveArticle: function(title, date, url) {
	// 	axios.post("api/saved", {title: title, date: date, url: url})
	// 	.then(function(results){
	// 		console.log();
	// 	})
	// }

	// 	return.axios.post("api/saved");

	// }


	}//close runSearch Function


// };
export default helper; 