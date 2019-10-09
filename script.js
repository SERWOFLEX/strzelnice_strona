$(document).ready(function() {
    $(document).ready(function() {
        $('.gallery').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:1,
            loop:true
        });
        document.querySelector(".lSPager").style.display = 'none';
        document.querySelector(".lSpg").style.display = 'none';

        document.querySelector(".lSPrev").style.marginLeft= '25px';
        document.querySelector(".lSNext").style.marginRight = '25px';
    });
  });