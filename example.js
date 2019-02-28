var colors = require('./colors');

var colorsObj = function(bgcolor, primaryColor, secondaryColor, detailColor) {

	var newObj = {
		bgcolor: bgcolor,
		primaryColor: primaryColor,
		secondaryColor: secondaryColor,
		detailColor: detailColor,
	}

	console.log(newObj);

}

console.log(colors.ImageAnalyzer('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', colorsObj));
