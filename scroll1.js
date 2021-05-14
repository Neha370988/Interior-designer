$(document).ready(function () {
    //for tabs show hide
    $(".tab_click li a")
      .on("click", function (e) {
        $(this.hash).fadeIn(200).siblings().fadeOut(200);
        e.preventDefault();
      })
      .first()
      .click();
  
    // for active class
    $(".tab_click li").on("click", function () {
      $(".tab_click li.current").removeClass("current");
      $(this).addClass("current");
    });
  });
  /** Smooth Scrolling Functionality **/
  $(document).ready(function () {
    // Init controller
    var controller = new ScrollMagic.Controller();
    // Change behavior of controller
    // to animate scroll instead of jump
    controller.scrollTo(function (target) {
      TweenMax.to(window, 2, {
        scrollTo: {
          y: target - 65, // scroll position of the target along y axis
          autoKill: true, // allows user to kill scroll action smoothly
        },
        ease: Cubic.easeInOut,
      });
    });
    //  Bind scroll to anchor links
    $(document).on("click", "a[href^=#]", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();
        // trigger scroll
        controller.scrollTo(id);
        // If supported by the browser we can also update the URL
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    });
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#myBtn").fadeIn();
      } else {
        $("#myBtn").fadeOut();
      }
    });
    $("#myBtn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  