var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #000 }";
    document.body.appendChild(css);
};



// =================================

  $('.carousel').slick({
    arrow: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed:2000
  });

  // $('.testimoni-carousel').slick({
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   arrow: false,
  //   infinite: true,
  //   speed: 300,
  //   autoplay: true,
  //   autoplaySpeed:2000
  // });

  const slickSettings = {
    // centerPadding: '-10px',
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

// Normalize the card height.
const handleResize = () => {
  const carouselHeight = $('.js-slick-carousel').css('height')
  $('.card').css('height', carouselHeight);
}

// Initialization
const handleSlickInit = () => {
  console.log('slick init fired');
  handleResize();
}

$('.js-slick-carousel').on('init', handleSlickInit);
$('.js-slick-carousel').slick(slickSettings);

// reinitialization
$('.js-slick-carousel').on('reInit', () => console.log('slick re-init fired'));

$( window ).resize(handleResize);


// $('.js-slick-carousel').slick({
//   centerMode: true,
//   centerPadding: '-10px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '60px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '60px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
