/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Smoke and Guns', 'One Reason', 'Onion', 'Animal'];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var image_url=['https://i.ytimg.com/vi/ehc8w0qsEvY/maxresdefault.jpg', 'http://3.bp.blogspot.com/-l1-rhj64UhM/UWmnbr3U_5I/AAAAAAAAAVk/b5gXc4p6-ws/s1600/One+reason.jpg',
'http://www.billboard-japan.com/scale/news/00000010/10939/500x_image.jpg', 'https://thealternativesource.files.wordpress.com/2011/10/cabcabcab.jpg'
];

var artist=['Nathan Sharp', 'Fade', 'One Ok Rock', 'The Cab'];

var song_length=['3:27', '4:23', '3:19', '3:52'];

var link=[];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
