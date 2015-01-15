// Change Active Testimonial
function changeTestimonial(direction) {

	var testimonialCount = jQuery(".testimonial").length;
	var currentTestimonial = jQuery(".is-active-testimonial").index();
	var targetTestimonial = null;

	// Move to previous testimonial
	if (direction == "prev") {
		if ( currentTestimonial == 0 ) {
			targetTestimonial = testimonialCount -1;
		} else {
			targetTestimonial = currentTestimonial - 1;
		}
	} else {
	// Move to next testimonial
		if ( (currentTestimonial + 1) == testimonialCount ) {
			targetTestimonial = 0;
		} else {
			targetTestimonial = currentTestimonial + 1;
		}
	}

	jQuery(".testimonial").removeClass("is-active-testimonial");
	jQuery(".testimonial:eq(" + targetTestimonial + ")").addClass("is-active-testimonial");

	// update selected pager dot
	jQuery(".testimonial-pager span").removeClass("is-active-pager");
	jQuery(".testimonial-pager span:eq(" + targetTestimonial + ")").addClass("is-active-pager");

} // end change active testimonial function

var handle = setInterval(function() {
	changeTestimonial("next");
}, 5000);

function resetTestimonials() {
	clearInterval(handle);
	handle = setInterval(function() {
		changeTestimonial("next");
	}, 5000);
}


// If a testimonial pager dot is tapped
jQuery(".testimonial-pager span").click(function() {
	jQuery(this).siblings().removeClass("is-active-pager");
	jQuery(this).addClass("is-active-pager");

	var pagerIndex = jQuery(this).index() + 1;
	var currentPager = jQuery(".testimonials .testimonial:nth-child(" + pagerIndex + ")");

	jQuery(currentPager).siblings().removeClass("is-active-testimonial");
	jQuery(currentPager).addClass("is-active-testimonial");

	resetTestimonials();

});

// touch gestures

var testimonialsContainer = new Hammer(document.getElementById('testimonials'));
testimonialsContainer.on("swipeleft", function() {
	resetTestimonials();
	changeTestimonial("next");
});

testimonialsContainer.on("swiperight", function() {
	resetTestimonials();
	changeTestimonial("prev");
});