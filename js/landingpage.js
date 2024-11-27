// HEADER ANIMATION
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// SCROLLSPY
$(document).ready(function() {
  $(".nav-link").click(function() {
      var t = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(t).offset().top - 75
      }, {
          duration: 1000,
      });
      $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
      return false;
  });

});

// AOS
AOS.init({
    offset: 120, 
    delay: 0,
    duration: 1200, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
    disable: "mobile"
  });

//SIDEBAR-OPEN
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").removeClass("sidebar-open");
  })

  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $("body").addClass("sidebar-open");
  })


  window.onresize = function() {
    var w = window.innerWidth;
    if(w>=992) {
      $('body').removeClass('sidebar-open');
      $('#navbarSupportedContent').removeClass('show');
    }
  }
  // HEADER ANIMATION
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// SCROLLSPY
$(document).ready(function() {
  $(".nav-link").click(function() {
      var t = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(t).offset().top - 75
      }, {
          duration: 1000,
      });
      $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
      return false;
  });

});

// AOS
AOS.init({
    offset: 120, 
    delay: 0,
    duration: 1200, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
    disable: "mobile"
  });

//SIDEBAR-OPEN
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").removeClass("sidebar-open");
  })

  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $("body").addClass("sidebar-open");
  })


  window.onresize = function() {
    var w = window.innerWidth;
    if(w>=992) {
      $('body').removeClass('sidebar-open');
      $('#navbarSupportedContent').removeClass('show');
    }
  }

  document.querySelector('.searchbar').value = "";

const list = document.querySelector('.list');

const searchimg = document.getElementById("search-img-js"); 
searchimg.addEventListener('click', searchshow);
searchimg.addEventListener('keyup', enterkeyShow);

const searchbar = document.querySelector('.searchbar'); 
searchbar.addEventListener('keyup', search);

const closeimg = document.getElementById("close-img-js"); 
closeimg.addEventListener('click', closeimgfunction);
closeimg.addEventListener('keyup', enterkeyClose);

// Hide All function when you click anywhere on the background
function hideallfunction(){
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))
    document.querySelector('.searchbar').value = "";
    document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    document.getElementById('close-img-js').setAttribute("tabindex", "-1");
    window.setTimeout(hideallfunction2, 500);
}

function hideallfunction2(){
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))
}

//showing the list under circumstances (if it's not empty, you show the list with the result when you click on the search icon.
// if it isn't empty it focuses on the search bar so you'd type something.)
function searchshow(){
    let input = document.querySelector('.searchbar').value

if (input !== "") {
    document.querySelector('.list').classList.add('add');
    document.querySelector('.closeimg').classList.add('add');
    document.querySelector('.borderbetween').classList.add('add');
    document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    document.getElementById('close-img-js').setAttribute("tabindex", "4");
    window.setTimeout(searchshow2, 100);
} else {
    document.querySelector('.searchbar').focus();
    document.querySelector('.searchbar').setAttribute("placeholder", "Please search something...");
}
}

function searchshow2(){
    document.querySelector('.list').classList.add('show');
    document.querySelector('.closeimg').classList.add('show');
    document.querySelector('.borderbetween').classList.add('show');
}

//global search function
function search() {
	let input = document.querySelector('.searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('section');
    let noresult = document.querySelector('.noresult');
    let list= document.querySelector('.list').childElementCount;

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
            list -= 1;
		} else {
			x[i].style.display="list-item";
            list += 1;
		}

 if (list === 1) {
    noresult.style.display="list-item";
} else {
 noresult.style.display="none";
}

}
}

//function for when you click ENTER or ESC on keyboard when interacting with the search bar.
searchbar.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      searchshow();
    } else if (event.keyCode === 27) {
        event.preventDefault();
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    }
  }); 

list.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        closeimgfunction();
    }
  }); 

//the function for the X button and closing the list
function closeimgfunction() {
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('show'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('hide'))
    document.querySelector('.searchbar').value = "";
    document.getElementById('close-img-js').setAttribute("tabindex", "-1");
    window.setTimeout(closeimgfunction2, 500);
}

function closeimgfunction2() {
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.remove('add'))
    document.querySelectorAll('.globalsearchremove').forEach(el => el.classList.add('remove'))
}

//keyboard functions
function enterkeyShow(event) {
    if (event.keyCode === 13) {
        searchshow();
    }
}

function enterkeyClose(event) {
    if (event.keyCode === 13) {
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
    }
}

function esckey(event) {
    if (event.keyCode === 27) {
        closeimgfunction();
        document.querySelector('.searchbar').setAttribute("placeholder", "Search...");
}
}