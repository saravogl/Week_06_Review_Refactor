/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources and store it to the variable q1. Use image1.jpeg, image2.jpeg, and image3.jpeg as the array values.
 */
<<<<<<< HEAD
 
=======
>>>>>>> GA-Chicago-FEWD6/master
var q1 = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
console.log(q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */
<<<<<<< HEAD

var q2 = q1[0]
=======
var q2 = q1[0];
>>>>>>> GA-Chicago-FEWD6/master
console.log(q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */
<<<<<<< HEAD

=======
>>>>>>> GA-Chicago-FEWD6/master
var q3 = q1.length;
console.log(q3);

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */
<<<<<<< HEAD

var q4 = q1[q1.length-1];
=======
var q4 = q1[q1.length - 1];
>>>>>>> GA-Chicago-FEWD6/master
console.log(q4);

/**
 * Question 5
 *  Using the variables from questions 2 and 4, write code that would change the src of the first image 
 on a web page to the src stored in q2 and the last image on a web page to the src stored in q4. For extra credit, 
 troubleshoot why the images still don't show up.
 */
<<<<<<< HEAD

$('#firstImage').attr('src', 'images/' + q2);

$('img').last().attr('src', 'images/' + q4);

=======
$('#firstImage').attr('src', q2);
$('img').last().attr('src', q4);
>>>>>>> GA-Chicago-FEWD6/master
