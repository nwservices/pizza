// Header Text Sizing
jQuery(".home-hero").fitText(.76);
jQuery(".about-hero").fitText(1.3);
jQuery(".ingredients-hero").fitText(.9);
jQuery(".contact-hero").fitText(.85);

// FastClick
jQuery(function() {
    FastClick.attach(document.body);
});

jQuery(".header-fixed-offset").height(jQuery(".site-header").outerHeight());


function equalHeightTestimonials() {
	// create an array of testimonial heights
	jQuery(".testimonial-body").height("auto");
	var elementHeights = jQuery(".testimonial-body").map(function() {
		return jQuery(this).height();
	});

	// find the largest in the array
	var tallestTestimonial = Math.max.apply(null, elementHeights);

	// apply the largest to all testimonails
	jQuery(".testimonial-body").height(tallestTestimonial);
}

// run on page load
jQuery(window).load(function() {
	equalHeightTestimonials();
});

var updateTestimonials = _.debounce(function() {
	equalHeightTestimonials();
	
	
}, 250);

jQuery(window).resize(updateTestimonials);




Response.create({
    prop: "width"  // "width" "device-width" "height" "device-height" or "device-pixel-ratio"
  , prefix: "min-width- r src"  // the prefix(es) for your data attributes (aliases are optional)
  , breakpoints: [767, 320, 0] // min breakpoints (defaults for width/device-width)
  , lazy: true // optional param - data attr contents lazyload rather than whole page at once
});

// Masonry
var ingredients = jQuery(".ingredients").masonry({
	itemSelector: '.ingredient',
	columnWidth: '.item-sizer',
	gutter: '.gutter-sizer'
});

ingredients.imagesLoaded(function() {
	ingredients.masonry();
});


// Cards
jQuery(".card").click(function() {
	jQuery(this).toggleClass("flipped");
});

var headerHeight = (jQuery(".site-header").outerHeight()) * -1;

// Smooth Scroll
jQuery(".smooth-scroll").smoothScroll({
	offset: headerHeight,
});






// Sign Up


jQuery("body").append('<div class="modal-container"><div class="modal-window"><span class="modal-close-x modal-close"><i class="fa fa-times"></i></span><div class="modal-window-inner"></div></div></div>');
jQuery(".modal-container").css("display", "none");

jQuery(".sign-up").click(function() {
	jQuery(".modal-container").css("display", "block");

	jQuery("body, html").addClass("is-locked");

	setTimeout(function() {
		
		jQuery(".modal-container").addClass("is-visible");
	}, 20);

	

	// Only Insert the modal content once
	if (jQuery(".modal-window-inner").is(':empty')) {
		jQuery(".modal-window-inner").append(jQuery("#order-now-form"));
	}

	return false;
});

function closeModal() {
	jQuery("body, html").removeClass("is-locked");
	jQuery(".modal-container").removeClass("is-visible");
	setTimeout(function() {
		jQuery(".modal-container").css("display", "none");
	}, 600);
}

jQuery(".modal-close").click(function() {
	closeModal();
});

jQuery(document).keyup(function(e) {
	if (e.keyCode == 27) {
		closeModal();
	}
});

