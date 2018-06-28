
$('.pagination-inner a').on('click', function () {
	$(this).siblings().removeClass('pagination__active');
	$(this).addClass('pagination__active');
})
	// Custom JS


