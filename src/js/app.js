$(document).ready(function () {
  var $button = $("button, .animation__one");
  console.log($button);

  if ($button.length) {
    $button.each(function () {
      mouseMagnetic(this);
    });
  }

  function mouseMagnetic(item) {
    var $item = $(item);

    $item.each(function () {
      var $self = $(this);
      var hover = true;
      var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
      var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

      var attachEventsListener = function () {
        $(window).on("mousemove", function (e) {
          //
          var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

          // cursor
          var cursor = {
            x: e.clientX,
            y: e.clientY,
          };

          // size
          var width = $self.outerWidth();
          var height = $self.outerHeight();

          // position
          var offset = $self.offset();
          var elPos = {
            x: offset.left + width / 2,
            y: offset.top - $(window).scrollTop() + height / 2,
          };

          // comparaison
          var x = cursor.x - elPos.x;
          var y = cursor.y - elPos.y;

          // dist
          var dist = Math.sqrt(x * x + y * y);

          // mutex hover
          var mutHover = false;

          // anim
          if (dist < width * hoverArea) {
            mutHover = true;
            if (!hover) {
              hover = true;
            }
            onHover(x, y);
          }

          // reset
          if (!mutHover && hover) {
            onLeave();
            hover = false;
          }
        });
      };

      function onHover(x, y) {
        gsap.to(
          $self,
          1.5,
          { x: x * 0.2, y: y * 0.2, rotation: x * 0.05, ease: Power2.easeOut },
          0
        );
      }
      function onLeave() {
        gsap.to(
          $self,
          1.5,
          { x: 0, y: 0, rotation: 0, ease: Elastic.easeOut },
          0
        );
      }

      attachEventsListener();
    });
  }
});

// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
$("a").on("mouseenter", function() {
    follower.addClass("active_mouse");
});
$("a").on("mouseleave", function() {
    follower.removeClass("active_mouse");
});

//Moving blob
var window_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#object').css({
            'top': object_position_left
        });
    });
});

const header = document.querySelector(".header");

window.onscroll = function () {
  // scrollFunction()
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

new WOW().init();

// $("video, audio").mediaelementplayer({});

// Lightbox

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

