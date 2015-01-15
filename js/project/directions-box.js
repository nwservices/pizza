// Update Directions Box Dimensions
function updateDirectionsDimensions() {
	var canvasWidth = jQuery(".directions-canvas").outerWidth();
	var canvasHeight = jQuery(".directions-canvas").outerHeight();
	var canvasOffset = (jQuery(".left-screen").outerWidth() / canvasWidth);
	canvasOffset = canvasOffset.toFixed(3);
	travelHoriz = canvasOffset * canvasWidth;
	travelVert = canvasOffset * canvasHeight;
}

// Directions box
if (jQuery("html").hasClass("csstransforms3d")) {
	jQuery("#direction-left").click(function() {
		jQuery(".directions-canvas").addClass("pushed-right");
	});

	jQuery("#direction-right").click(function() {
		jQuery(".directions-canvas").addClass("pushed-left");
	});

	jQuery("#direction-up").click(function() {
		jQuery(".directions-canvas").addClass("pushed-down");
	});

	jQuery("#direction-down").click(function() {
		jQuery(".directions-canvas").addClass("pushed-up");
	});

	jQuery(".directions-box .screen .btn").click(function() {
		jQuery(".directions-canvas").removeClass("pushed-right");
		jQuery(".directions-canvas").removeClass("pushed-down");
		jQuery(".directions-canvas").removeClass("pushed-left");
		jQuery(".directions-canvas").removeClass("pushed-up");
	});
} else {

	jQuery("#direction-left").click(function() {
		updateDirectionsDimensions();
		jQuery(".directions-canvas").animate({
			left: travelHoriz
		}, 300);
	});
	jQuery("#direction-right").click(function() {
		updateDirectionsDimensions();
		jQuery(".directions-canvas").animate({
			left: (travelHoriz * -1)
		}, 300);
	});
	jQuery("#direction-up").click(function() {
		updateDirectionsDimensions();
		jQuery(".directions-canvas").animate({
			top: travelVert
		}, 300);
	});
	jQuery("#direction-down").click(function() {
		updateDirectionsDimensions();
		jQuery(".directions-canvas").animate({
			top: (travelVert * -1)
		}, 300);
	});
	jQuery(".directions-box .screen .btn").click(function() {
		jQuery(".directions-canvas").animate({
			left: "0",
			top: "0"
		}, 300);
	});
}
// end directions box