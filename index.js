AOS.init();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        

let y = $('.About').position().top;


window.addEventListener("scroll",function(){
  var target = $('.navbar')
  if(window.pageYOffset > y-100){
   target.fadeIn()
  }
  else if(window.pageYOffset < y-100){
    target.fadeOut();
  }

  if(window.pageYOffset > $('.Home').position().top){
  	$(".nav-item").removeClass("active");
 $('.homenav').addClass('active');
  }
  if(window.pageYOffset > $('.About').position().top ){
  	$(".nav-item").removeClass("active");
 $('.aboutnavb').addClass('active');
  }
  if(window.pageYOffset > $('.Skills').position().top){
  	console.log('hello in skills')
    $(".nav-item").removeClass("active");
 	$('.skillsnav').addClass('active');
  }
  if(window.pageYOffset > $('.OurWork').position().top){
   $(".nav-item").removeClass("active");

 $('.OurWorknav').addClass('active');
  }
  if(window.pageYOffset > $('.Contact').position().top){
    $(".nav-item").removeClass("active");

 $('.Contactnav').addClass('active');
  }
},false);

$('.homenav').click( () =>{
$('html, body').animate({scrollTop:$('.Home').position().top}, 'slow');
$(".nav-item").removeClass("active");
$('.homenav').addClass('active')

})
$('.aboutnavb').click( () =>{
$('html, body').animate({scrollTop:$('.About').position().top}, 'slow');
$(".nav-item").removeClass("active");
 $('.aboutnavb').addClass('active');
})
$('.skillsnav').click( () =>{
$('html, body').animate({scrollTop:$('.Skills').position().top}, 'slow');
$(".nav-item").removeClass("active");
 $('.skillsnav').addClass('active');
})
$('.OurWorknav').click( () =>{
$('html, body').animate({scrollTop:$('.OurWork').position().top}, 'slow');
$(".nav-item").removeClass("active");

 $('.OurWorknav').addClass('active');
})
$('.Contactnav').click( () =>{
$('html, body').animate({scrollTop:$('.Contact').position().top}, 'slow');
$(".nav-item").removeClass("active");

 $('.Contactnav').addClass('active');
})
var options = {
  strings: ["Rafik Kasmi"],
  typeSpeed: 50,
   startDelay:300
}

var typed = new Typed("#Titre", options);

var optionsS = {
  strings: ["Front-End","Back-End","Mobile Apps","Full-Stack"],
  typeSpeed: 40,
startDelay:300
}

var typeds = new Typed("#subTitle", optionsS);


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Html", "Css", "Javascript", "Vuejs", "PHP", "Laravel", "NodeJS","Django"],
        datasets: [{
            label: "Perfection",
            backgroundColor: 'grey',
            borderColor: 'grey',
            data: [89,86,80,76,90,75,60,55],
        }]
    },

    // Configuration options go here
    options: {
		scales: {
            yAxes: [{
                ticks: {
	                  min:0,
	                  max:100
                }
            }]
        }

    }
});

var $contactForm = $('#contactform');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://www.enformed.io/wr08sqll',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		
		success: function(data) {
			$.notify("Sent!", "success");
		},
		error: function(err) {
      $.notify("Sent!", "success");
		}
	});
});