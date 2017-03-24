header = document.querySelector('#adil .header');
container = document.querySelector('#adil .container');
footer = document.querySelector('#adil .footer');
searchPlaceholder = document.querySelector('#adil .searchPlaceholder');
input = document.querySelector('#adil .searcher input');
middle = document.querySelector('#adil .middle');
menu = document.querySelector('#adil .menu');
innerLeftContainer = document.querySelector('#adil .innerLeftContainer');
innerRightContainer = document.querySelector('#adil .innerRightContainer');
u = document.querySelector('#adil .menu .u');
l = document.querySelector('#adil .menu .l');
(function() {
    input.addEventListener('click', function() {
        searchPlaceholder.style.fontSize = '.9em';
        searchPlaceholder.style.top = '-27px';
        middle.style.display = 'flex';
    });

})();
function deactive() {
  if (input.value.length == 0) {
    searchPlaceholder.style.fontSize = '1.8em';
    searchPlaceholder.style.top = '0';
    middle.style.display = 'none';
  }
}
menu.addEventListener('mouseover', function() {
    u.style.top = '32px';
    l.style.top = '52px';
});
menu.addEventListener('mouseout', function() {
    u.style.top = '35px';
    l.style.top = '49px';
});

// murad
var backImg=["images_adil/ferdi.jpg","images_adil/businessman.jpg"]
var sliderMain=["images_adil/novQaz1.jpg","images_adil/novQaz2.jpg","images_adil/emekKrediti.jpg"]
var ferdi = document.querySelector('.ferdi');
var korporativ=document.querySelector('.korporativ');
var adil=document.querySelector('.fullWindow_clip');
var elaqe = document.querySelector('.elaqe');
var innerContainer=document.querySelector('.innerContainer');
var close_active=document.querySelector('.close_active');
var ferdi_content=document.querySelector('.ferdi_content');
var korporativ_content=document.querySelector('.korporativ_content');
var menu=document.querySelector('.menu');
var fullWindow_lent=document.querySelector('.fullWindow_item_lent');
var height=document.getElementById('fullWindow_item_lent_first').clientHeight;
var slider=document.querySelector('.slider');
var slider_array=document.querySelector('.below_item ul').children;
var below_item_div=document.querySelector('.below_item div');
var contact_btn=document.querySelector('.contact_btn');
var contactUs=document.querySelector('.contactUs');
var close_x=document.querySelector('.close_x');
var main_body=document.querySelector('#adil');
var curtain=document.querySelector('.adil_body_curtain');

ferdi.addEventListener("click",function() {
setTimeout(function(){
  korporativ_content.style.opacity="0";
  },10);
setTimeout(function(){
    innerContainer.style.top="-500px";
    setTimeout(function(){
      fullWindow_lent.style.top="0px";
      innerContainer.style.position="relative";
      innerContainer.style.top="-500px";
      setTimeout(function(){
        ferdi_content.style.opacity="2";
        setTimeout(function(){
          adil.classList.add("active");
        },200);
      }, 500);
    }, 100);
  }, 100);
})

korporativ.addEventListener("click",function() {
if (adil.classList.contains("active")){
  setTimeout(function(){
      ferdi_content.style.opacity="0";
      setTimeout(function(){
        korporativ_content.style.opacity="2";
      }, 500);
    }, 100);

  fullWindow_lent.style.top= "-"+(height)+"px";
  innerContainer.style.position="relative";
}
else {
  setTimeout(function(){
      innerContainer.style.top="-500px";
      setTimeout(function(){
        adil.classList.add("active");
        fullWindow_lent.style.top= "-"+(height)+"px";
        setTimeout(function(){
          korporativ_content.style.opacity="2";
        },100);
      }, 800);
    }, 100);
  }
})

close_active.addEventListener("click",function () {
  setTimeout(function(){
    ferdi_content.style.opacity="0";
    korporativ_content.style.opacity="0";
  },10);
  setTimeout(function(){
      innerContainer.style.top="30px";
    }, 1000);
  setTimeout(function(){
      adil.classList.remove("active");
    }, 100);
});


for(i=0;i<slider_array.length;i++){
    slider_array[i].addEventListener("click",function(e){
      val=e.target.getAttribute("data-value");
      for (var i = 0; i < sliderMain.length; i++) {
          slider_array[i].classList.remove("dot_active")
          slider_array[i].style.backgroundColor="white";
        }
          if (val === "2") {
            below_item_div.style.display="block";
          } else {
            below_item_div.style.display="";
          }
        slider.style.backgroundImage="url("+sliderMain[val]+")";
        e.target.style.backgroundColor="transparent";
        e.target.classList.add("dot_active");
    })
}

contact_btn.addEventListener("click",function () {
  setTimeout(function(){
      main_body.classList.add("main_body_active");
      setTimeout(function(){
          contactUs.style.right="0";
        }, 200);
    }, 100);
})
close_x.addEventListener("click",function() {
  setTimeout(function(){
      contactUs.style.right="-360px";
      setTimeout(function(){
          main_body.classList.remove("main_body_active");
        }, 200);
    }, 100);
})
curtain.addEventListener("click",function() {
  setTimeout(function(){
      contactUs.style.right="-360px";
      setTimeout(function(){
          main_body.classList.remove("main_body_active");
        }, 200);
    }, 100);
});

// slider_1.addEventListener("click",function() {
//   for (var i = 0; i < sliderMain.length; i++) {
//     slider_array[i].classList.remove("dot_active")
//   }
//   slider.style.backgroundImage="url("+sliderMain[0]+")";
//   slider_1.style.backgroundColor="transparent";
//   slider_1.classList.add("dot_active");
// })
// slider_2.addEventListener("click",function() {
//   for (var i = 0; i < sliderMain.length; i++) {
//     slider_array[i].classList.remove("dot_active")
//   }
//   slider.style.backgroundImage="url("+sliderMain[1]+")";
//   slider_2.style.backgroundColor="transparent";
//   slider_2.classList.add("dot_active");
// })
// slider_3.addEventListener("click",function() {
//   for (var i = 0; i < sliderMain.length; i++) {
//     slider_array[i].classList.remove("dot_active");
//   }
//   slider.style.backgroundImage="url("+sliderMain[2]+")";
//   slider_3.style.backgroundColor="transparent";
//   slider_3.classList.add("dot_active");
// })
