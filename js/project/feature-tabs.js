// Feature Tabs
jQuery(".feature-table-nav a").click(function() {
	jQuery(this).parents("ul").find("li").removeClass("is-active");
	jQuery(this).parent("li").addClass("is-active");


	var tabIndex = jQuery(this).parent("li").index() + 1;
	
	var currentTab = jQuery(".tabs-container .tab:nth-child(" + tabIndex + ")");

	jQuery(currentTab).siblings().removeClass("is-active-tab");
	jQuery(currentTab).addClass("is-active-tab");

	return false;
});