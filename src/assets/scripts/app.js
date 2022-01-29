const Portfolio = function() {
	function makeWords() {
		return [
			{
				text: "Scratch",
				weight: 14
			}, {
				text: "CSS",
				weight: 13
			}, {
				text: " C Language",
				weight: 14
			}, { 
				text: "Programming",
				weight: 12
			}, {
				text: "python",
				weight: 16
			}, {
				text: "qazi",
				weight: 14
			}, {
				text: "HTML",
				weight: 13
			}, {
				text: "SQL",
				weight: 14
			}
		];
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a college student.", "love everything about code.", "try to put my best."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#000000", "background-color": "#00d56f"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
