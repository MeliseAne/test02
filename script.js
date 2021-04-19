function showImg() {
            let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
            var img = "";
            for (var i = 0; i < images.length; i++) {
                var image = images[i];
                img += '<div><img src="images/' + image + '"/></div>';
            }
            var getImg = document.getElementById('photos').innerHTML = img;
        }

$('.show__btn').on('click', function() {
	$(".slider").css("display", "block");
	$(".show__btn").css("display", "none");
		$('.slider').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,        
	});
});




