//ADIL'S SCRIPT STARTED
searchPlaceholder = document.querySelector('#adil .searchPlaceholder');
input = document.querySelector('#adil .searcher input');
middle = document.querySelector('#adil .middle');
menu = document.querySelector('#adil .menu');
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
        searchPlaceholder.style.fontSize = '1em';
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

usTitle = document.querySelector('.usTitle');
onBg = document.querySelector('.onBg');
onBg_width = document.querySelector('.onBg').clientWidth;
title = document.querySelector('.usTitle p');
goBack = document.querySelector('.goBack');
writeUs = document.querySelector('.writeUs');
diver = document.querySelector('.diver');
writeUs.addEventListener('click', function() {
    function deleteDefault(event) {
        event.preventDefault();
    }
    diver.style.right = "40px";
    setTimeout(function() {
        goBack.style.display = 'block';
        usTitle.style.borderBottom = '1px solid rgba(255, 255, 255, .5)';
    }, 300);
    title.style.left = '32px';
    onBg.style.backgroundColor = '#2e56a6';
});
goBack.addEventListener('click', function() {
    function deleteDefault(event) {
        event.preventDefault();
    }
    diver.style.right = -onBg_width + "px";
    setTimeout(function() {
        goBack.style.display = 'none';
    }, 200);
    title.style.left = '0px';
    onBg.style.backgroundColor = 'transparent';
    usTitle.style.borderBottom = '1px solid rgba(255, 255, 255, .1)';
});

//MURAD'S SCRIPT STARTED

var ferdi_content = document.querySelector('.ferdi_content');
var adil = document.querySelector('.fullWindow_clip');
var fullWindow_lent = document.querySelector('.fullWindow_item_lent');
var innerContainer = document.querySelector('.innerContainer');
var korporativ_content = document.querySelector('.korporativ_content');
var height = document.getElementById('fullWindow_item_lent_first').clientHeight;
var ferdi = document.querySelector('.ferdi');
ferdi.addEventListener("click", function() {
    setTimeout(function() {
        korporativ_content.style.opacity = "0";
    }, 10);
    setTimeout(function() {
        innerContainer.style.top = -height + "px";
        setTimeout(function() {
            fullWindow_lent.style.top = "0px";
            innerContainer.style.position = "relative";
            innerContainer.style.top = -height + "px";
            setTimeout(function() {
                adil.classList.add("active");
                setTimeout(function() {
                    ferdi_content.style.opacity = "2";
                }, 800);
            }, 500);
        }, 100);
    }, 100);

})

var korporativ = document.querySelector('.korporativ');
korporativ.addEventListener("click", function() {
    if (adil.classList.contains("active")) {
        setTimeout(function() {
            ferdi_content.style.opacity = "0";
            setTimeout(function() {
                korporativ_content.style.opacity = "2";
            }, 500);
        }, 100);

        fullWindow_lent.style.top = -height + "px";
        innerContainer.style.position = "relative";
    } else {
        setTimeout(function() {
            innerContainer.style.top = -height + "px";
            setTimeout(function() {
                adil.classList.add("active");
                fullWindow_lent.style.top = -height + "px";
                setTimeout(function() {
                    korporativ_content.style.opacity = "2";
                }, 300);
            }, 800);
        }, 100);
    }
})

var close_active = document.querySelector('.close_active');

close_active.addEventListener("click", function() {
    setTimeout(function() {
        ferdi_content.style.opacity = "0";
        korporativ_content.style.opacity = "0";
        setTimeout(function() {
            adil.classList.remove("active");
        }, 500);
    }, 100);
    setTimeout(function() {
        innerContainer.style.top = "0px";
    }, 1000);
});

var sliderMain = ["images_adil/novQaz1.jpg", "images_adil/novQaz2.jpg", "images_adil/emekKrediti.jpg"];
var slider_array = document.querySelector('.below_item ul').children;
var below_item_div = document.querySelector('.below_item div');
var slider = document.querySelector('.slider');
val = 0;
for (i = 0; i < slider_array.length; i++) {
    slider_array[i].addEventListener("click", function(e) {
        val = e.target.getAttribute("data-value");
        for (var i = 0; i < sliderMain.length; i++) {
            slider_array[i].classList.remove("dot_active")
            slider_array[i].style.backgroundColor = "white";
        }
        if (val === "2") {
            below_item_div.style.display = "block";
        } else {
            below_item_div.style.display = "";
        }
        slider.style.backgroundImage = "url(" + sliderMain[val] + ")";
        e.target.style.backgroundColor = "transparent";
        e.target.classList.add("dot_active");
    })
}

function slider_auto() {
    for (var i = 0; i < slider_array.length; i++) {
        slider_array[i].classList.remove("dot_active");
        slider_array[i].style.backgroundColor = "white";
    }
    slider_array[val].classList.add("dot_active");
    slider_array[val].style.backgroundColor = "transparent";
    slider.style.backgroundImage = "url(" + sliderMain[val] + ")";
    if (val == 2) {
        below_item_div.style.display = "block";
    } else {
        below_item_div.style.display = "";
    }
    val++;
    if (val == sliderMain.length) {
        val = 0;
    }
}
setInterval(slider_auto, 2000);

var contactUs = document.querySelector('.contactUs');
var main_body = document.querySelector('#adil');
var contact_btn = document.querySelector('.contact_btn');
contact_btn.addEventListener("click", function() {
    setTimeout(function() {
        main_body.classList.add("main_body_active");
        setTimeout(function() {
            contactUs.style.right = "0px";
        }, 200);
    }, 100);
})

var close_x = document.querySelector('.close_x');
var curtain = document.querySelector('.adil_body_curtain');
var usBg = document.querySelector('.usBg').clientWidth;

close_x.addEventListener("click", delete_x)
curtain.addEventListener("click", delete_x)

function delete_x() {
    setTimeout(function() {
        contactUs.style.right = -(contactUs.clientWidth + 300) + "px";
        setTimeout(function() {
            main_body.classList.remove("main_body_active");
        }, 200);
    }, 100);
}

var commerce_array = document.querySelector('.commerce').children;
var money_lent = document.querySelector('.money_lent');
var buy_lent = document.querySelector('.buy_lent');
var sell_lent = document.querySelector('.sell_lent');
var money = document.querySelector('.money');
var buy = document.querySelector('.buy');
var sell = document.querySelector('.sell');

plus = 0;

function currency_auto() {
    for (var i = 0; i < commerce_array.length; i++) {
        setTimeout(function() {
            money_lent.style.top = -plus + "px";
            setTimeout(function() {
                buy_lent.style.top = -plus + "px";
                setTimeout(function() {
                    sell_lent.style.top = -plus + "px";
                }, 100);
            }, 100);
        }, 100);
    }
    if (plus == 90) {
        plus = -30;
    }
    plus += 30;
    console.log(plus);
}
setInterval(currency_auto, 3000);

var allmenu = document.querySelector('.allMenu');
var menu_item_responsive = document.querySelector('.menu_item_responsive');
menu_item_responsive.style.opacity = "0";
menu_item_responsive.style.right = -(menu_item_responsive.clientWidth) + "px";
allmenu.addEventListener("click", function() {
    menu_item_responsive.style.opacity = "1";
    menu_item_responsive.style.right = "0px";
})

var close_menu = document.querySelector('.menu_item_responsive_close');
close_menu.addEventListener("click", function() {
    menu_item_responsive.style.opacity = "0";
    menu_item_responsive.style.right = -(menu_item_responsive.clientWidth) + "px";
})

//RAHİM'S SCRIPT STARTED
var adile = document.querySelector("#adil");
var menuItem = document.querySelector(".menu_item");
var menu = document.querySelector(".menu");
var close_x_second = document.querySelector('.close_x_second');
menu.addEventListener("click", function() {
    setTimeout(function() {
        main_body.classList.add("main_body_active");
        setTimeout(function() {
            menuItem.style.right = "0";
        }, 200);
    }, 100);
});

curtain.addEventListener("click", delete_x_second);
close_x_second.addEventListener("click", delete_x_second);

function delete_x_second() {
    setTimeout(function() {
        menuItem.style.right = -(menuItem.clientWidth) + "px";
        setTimeout(function() {
            main_body.classList.remove("main_body_active");
        }, 200);
    }, 100);
}

var menuLenta = document.querySelector('.menu_item .menu_item_lent');
var about = document.querySelector('.menu_item  .about');
var korporative = document.querySelector('.menu_item .head .heady ul li:last-child a');

korporative.addEventListener("click", function() {
    menuLenta.style.right = menuItem.clientWidth + "px";
})
var feridFirst = document.querySelector('.menu_item .head a:first-child');
feridFirst.addEventListener("click", function() {
    menuLenta.style.right = 0 + "px";
})
