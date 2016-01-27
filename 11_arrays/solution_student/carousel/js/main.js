
// prev is disabled
// when user clicks next
	// the image changes to the next image, 
	// and previous button is enabled

// when user clicks prev
	// the images changes to the previous image,
	// when on last image next button is disabled


var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];
var currentIndex = 0;

$('#next').on('click', function() {
	currentIndex += 1;
	$('#image-to-vote-on').attr('src', images[currentIndex]);
	$('#prev').prop('disabled', false);
	displayLikeCount();
	if (currentIndex === images.length - 1) {
		$('#next').prop('disabled', true);
	}
});

$('#prev').on('click', function() {
	currentIndex -= 1;
	$('#image-to-vote-on').attr('src', images[currentIndex]);
	$('#next').prop('disabled', false);	
	displayLikeCount();
	if (currentIndex < 1) {
		$('#prev').prop('disabled', true);	
	}	
});

// each image has a like count of 0 to start
// for each image, if user clicks thumbs up, add 1 to that like count
// display like count
// for each image, if user clicks thumbs down, subtract 1 from that like count
// display like count 

var imageLikes = [0,0,0,0,0,0];

$('#upvote').on('click', function() {
	imageLikes[currentIndex] += 1;
	displayLikeCount();
});

$('#downvote').on('click', function() {
	imageLikes[currentIndex] -= 1;
	displayLikeCount();
});


function displayLikeCount() {
	$('#votes').html('Likes: ' + imageLikes[currentIndex]);
};