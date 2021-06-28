$('.btn.edit-address').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').show();
    $(this).siblings('.btn.edit-address-cancel').show();
    $(this).siblings('.btn.edit-address-submit').show();
    $(this).siblings('.btn.delete-address').hide();
    $(this).parents('td').siblings('.address-record').hide()
  });
  
  $('.btn.edit-address-submit').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').hide();
    $(this).siblings('.btn.edit-address-cancel').hide();
    $(this).siblings('.btn.edit-address').show();
    $(this).siblings('.btn.delete-address').show();
    $(this).parents('td').siblings('.address-record').show()
  });
  
  $('.btn.edit-address-cancel').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').hide();
    $(this).siblings('.btn.edit-address-submit').hide();
    $(this).siblings('.btn.edit-address').show();
    $(this).siblings('.btn.delete-address').show();
    $(this).parents('td').siblings('.address-record').show()
  });
  
  $('.carousel').carousel()
  
  // $('.single-product-images').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   customPaging : function(slider, i) {
  //     var thumb = $(slider.$slides[i]).data('thumb');
  //     return `<a><img class="img-fluid" src=${thumb} /></a>`;
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
  
  function getVariantFromOptions() {
    let variantArr = []
    $(".product-category select").map(function(i, el) {
      variant = {value: $(el).val(), index: $(el).data('index')};
      variantArr.push(variant)
    });
    return variantArr;
  }
  
  function updateHistoryState(variant) {
    if (!history.replaceState || !variant) {
      return;
    }
  
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?variant=' +
      variant.id;
    
    window.history.replaceState({ path: newurl }, '', newurl);
  }
  
  $('.product-category select').on('change', function() {
    var selectedValues = getVariantFromOptions();
    var variants = window.product.variants;
    
    
    var found = _.find(variants, function(variant) {
      return selectedValues.every(function(values) {
        return _.isEqual(variant[values.index], values.value);
      });
    });
    updateHistoryState(found)
    $('#variant-id').val(found.id)
  });
  


//   $('.product-slideshow').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     asNavFor: '.product-slideshow-nav'
//   })

//   $('.product-slideshow-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     asNavFor: '.product-slideshow',
//     dots: false,
//     arrows: true,
//     focusOnSelect: true,
//     nextArrow: '<button type="button" class="slick-next">&raquo;</button>',
//     prevArrow: '<button type="button" class="slick-prev">&laquo;</button>'

//   });



//   $(function () {
//     var slickOpts = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true
//     };

//     // Init the slick    
//     $('.single-item').slick(slickOpts);
// });


// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
//   });
 
//  $('.slider-nav').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  asNavFor: '.slider-for',
//  dots: true,
//  centerMode: true,
//  focusOnSelect: true
//  });


//  $('.single-item').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: true,
//   dots: true,
//   arrows: false,
//   speed: 1,
//   touchMove: false,
//   responsive: [{
//       breakpoint: 769,
//       settings: {
//           arrows: false,
//           dots: true,
//           touchMove: true
//       }
//   }]
// });
 



// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
	autoplay: false
});
$('.slider-nav').slick({
  slidesToShow: matchMedia,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
	infinite: true,
	centerPadding: '0px'
});










function updateHistoryState(variant) {
  if (!history.replaceState || !variant) {
    return;
  }

  var newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?variant=' +
    variant.id;
  
  window.history.replaceState({ path: newurl }, '', newurl);
}

$(document).ready(function () {
    $('#product-size').change(function() {
      var selectedValues = getVariantFromOptions();
      var variants = window.product.variants;

      // Search for product variants based on what was selected in the dropdowns
      var found = _.find(variants, function(variant) {
        return selectedValues.every(function(values) {
          return _.isEqual(variant[values.index], values.value);
        });
      });

      updateHistoryState(found);
      $('#variant-id').val(found.id);
    });
});




$('#close').on('hide.bs.dropdown', function () {
  return false;
});



$(function() {
  var elem = $.InvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
      {
     // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
          console.log(percent);
      }
  });
  $(window).resize(function() {
    if ($(window).width() <= 768) {
      elem.destroy();
    }
    else {
      elem.reinitialize();
    }
  });
});


$('.dec-btn').click(function () {
  var siblings = $(this).siblings('input.quantity-no');
  if (parseInt(siblings.val(), 10) >= 1) {
      siblings.val(parseInt(siblings.val(), 10) - 1);
  }
});

$('.inc-btn').click(function () {
  var siblings = $(this).siblings('input.quantity-no');
  siblings.val(parseInt(siblings.val(), 10) + 1);
});



$(document).ready( function() {
  $('a[href^="/account/logout"]').on("click", function() {
    $.ajax( $(this).attr('href') )
      .done(function() {
        // Here you will change the url to whatever page you want to redirect to
        window.location.href = "/";
      });
    return false;
  });
});

$(document).ready( function() {
  $('a[href^="/account/login"]').on("click", function() {
    $.ajax( $(this).attr('href') )
      .done(function() {
        // Here you will change the url to whatever page you want to redirect to
        window.location.href = "/";
      });
    return false;
  });
});

// $(document).ready( function() {
//   $('a[href^="/account/register"]').on("click", function() {
//     $.ajax( $(this).attr('href') )
//       .done(function() {
//         // Here you will change the url to whatever page you want to redirect to
//         window.location.href = "/";
//       });
//     return false;
//   });
// });