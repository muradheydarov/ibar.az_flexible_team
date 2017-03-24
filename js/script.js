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
var sliderMain=["images_adil/ferdi.jpg"]
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
})

menu.addEventListener("click",function () {

})
