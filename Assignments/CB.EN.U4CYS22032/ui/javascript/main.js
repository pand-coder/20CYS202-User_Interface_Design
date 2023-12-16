$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var outputMessage = "Thank you for submitting the form! We will contact you soon.";
  
    alert(outputMessage);
  
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
  
  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var email = document.getElementById('emailInput').value;
  
    alert("Thank you for subscribing!");
  
 
    document.getElementById('emailInput').value = '';
  });
  

  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum + '+');
      }
    });
  });


  });