var k = 0 ;
     function loadingflight(){
      k = 1;
 if(k==1){
    document.getElementById("laodinginner2").style.display="none";
    document.getElementById("laodinginner1").style.display="block";
}
else if(k==2){
    document.getElementById("laodinginner1").style.display="none";
    document.getElementById("laodinginner2").style.display="block";
}
else if (k==0){
    document.getElementById("laodinginner2").style.display="none";
    document.getElementById("laodinginner1").style.display="block";

}
       
    }
    function loadingtrain(){
        k=2;
       
        if(k==1){
            document.getElementById("laodinginner2").style.display="none";
            document.getElementById("laodinginner1").style.display="block";
        }
        else if(k==2){
            document.getElementById("laodinginner1").style.display="none";
            document.getElementById("laodinginner2").style.display="block";
        }
        else if (k==0){
            document.getElementById("laodinginner2").style.display="none";
            document.getElementById("laodinginner1").style.display="block";
        
        }
    }
    // function exploreeventbtn1(){
    //     window.location="movies.html"
    // }

    function exploreeventbtn2(){
        window.open="m.html"
    }

    function exploreeventbtn3(){
        window.open="t.html"
    }

    function changeVal() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("dropdown");
        var btnText = document.getElementById("about-btn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read Less...";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read More...";
          moreText.style.display = "inline";
        }
      }

    document.getElementById("about-btn").addEventListener("click", function () {
        var dropdown = document.getElementById("dropdown");
        dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
    });

    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
