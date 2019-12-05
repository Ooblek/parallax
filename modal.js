var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

var imgSrc = "";
$(".responsive-image").click(function(){
    imgSrc = $(this).attr('src')
    modal.style.display = "block";
    modalImg.src = imgSrc;
    console.log(imgSrc)
    });


var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 