$(document).ready(function(){console.log('Welcome to theme 2');var toggleBodyScroll=function(state=true){state?$('body').addClass('nav-open'):$('body').removeClass('nav-open');}
$('.sub-nav__menu').on('click',function(e){e.preventDefault();$('.sub-nav-content').toggleClass('is-active');$('.nav-overlay').toggleClass('is-active');toggleBodyScroll()})
$('.sub-nav__close').on('click',function(){$('.sub-nav-content').removeClass('is-active');$('.nav-overlay').removeClass('is-active');toggleBodyScroll(false);})
$('.nav-overlay').on('click',function(){$('.sub-nav-content').removeClass('is-active');$('.nav-overlay').removeClass('is-active');toggleBodyScroll(false);})
$('.main-slider').slick({arrows:false,autoplay:true,dots:true,rtl:true});$('.main-slider .slick-slide').focus(function(){this.blur();});$('.products-listing').slick({autoplay:true,arrows:false,dots:false,rtl:true,speed:300,slidesToShow:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]});$('.testimonails-listing').slick({autoplay:true,arrows:false,dots:true,rtl:true,speed:300,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:true,dots:true}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});var productListing=$('.products-listing');if(productListing.length){productListing.each(function(){var slider=$(this),nextBtn=slider.parent().find('.button-next'),prevBtn=slider.parent().find('.button-prev');prevBtn.on('click',function(e){e.preventDefault();slider.slick('slickPrev');})
nextBtn.on('click',function(e){e.preventDefault();slider.slick('slickNext');})})}});