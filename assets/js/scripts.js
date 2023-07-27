$(function(){

    AOS.init({
        once: true
     });

     


    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.mainMenu').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    
    if($('input[type="text"], textarea, select').val().length > 0 ){
        $('fieldset').addClass('active');
    }
    $('.field input, .field textarea, .field select').blur(function()
    {
        if($(this).val() != ''){
        $(this).closest('.field').find('fieldset').addClass('active');
    } else {

    $(this).closest('.field').find('fieldset').removeClass('active');
    }

    });
    $('.field input, .field textarea, .field select').focusin(function()
    {
    $(this).closest('.field').find('fieldset').addClass('active');
    });

    $('.testiSLider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
         autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 1,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        
      });


// ------Pricing Tabing-----
$('.tabList ul li').click(function(){
    var tab_id = $(this).attr('data-tab');
  
    $('.tabList ul li').removeClass('active');
    $('.tab-content').removeClass('active');
  
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });
  // ------Pricing Tabing-----
      








/*Mobile Dropdown For Footer*/

if (window.innerWidth < 767) {
    $(function(){
        $('footer .fotLinks h3').click(function(){
            $(this).parents('.fotLinks ').find('ul').slideToggle();
            $(this).toggleClass('active')
        });
    });


    $('.mobSlider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        adaptiveHeight: true,
  autoplaySpeed: 2000,
    });

}

});