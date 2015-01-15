// Mobile Menu
jQuery(".menu-toggle").click(function() {
	jQuery(".mobile-menu").addClass("is-visible");

	jQuery(".page-container, .site-header").addClass("is-minimized-right");
	jQuery(".page-overlay").addClass("page-overlay-is-visible");
	jQuery(".site-header-overlay").addClass("site-header-overlay-is-visible");
	//jQuery("body").addClass("overflow-hidden");
			setTimeout(function() {
				jQuery("body").addClass("overflow-hidden");
			}, 600);
	return false;
});


jQuery(".page-overlay, .site-header-overlay, .close-mobile-menu").click(function() {
	jQuery(".order-now-form, .mobile-menu").removeClass("is-visible");
	jQuery(".page-container, .site-header").removeClass("is-minimized is-minimized-right");
	jQuery(".page-overlay").removeClass("page-overlay-is-visible");
	jQuery(".site-header-overlay").removeClass("site-header-overlay-is-visible");
			setTimeout(function() {
				jQuery("body").removeClass("overflow-hidden");
			}, 600);
	return false;
});