//init
let direct_display = qs_a(".displayDiv")[0];
let animBar = qs_a("div.middleAnimBar")[0];

let nth1 = qs_a(".displayDiv > div:nth-child(1)")[0];
let nth1_h = qs_a(".displayDiv > div:nth-child(1) h1")[0];
let nth1_p = qs_a(".displayDiv > div:nth-child(1) p")[0];
let nth1_p2 = qs_a(".displayDiv > div:nth-child(1) p")[1];

let nth2 = qs_a(".displayDiv > div:nth-child(2)")[0];
let nth2_h = qs_a(".displayDiv > div:nth-child(2) h1")[0];
let nth2_p = qs_a(".displayDiv > div:nth-child(2) p")[0];
let nth2_p2 = qs_a(".displayDiv > div:nth-child(2) p")[1];

let open_ = qs_a(`img[alt="menuBar"]`)[0];
let close_ = qs_a(`img[alt="closeBar"]`)[0];

let menuDiv_ = qs_a(`.menuDiv`)[0];

let max_adjust;
let min_adjust;
let _adjust;

if (window.innerWidth >= 864) {
  max_adjust = "80%";
  min_adjust = "20%";
  _adjust = "50%";

  on(direct_display, "mouseover", () => {
    css(animBar, {
      display: "none",
    });
  });

  on(direct_display, "mouseleave", () => {
    css(nth1_p, {
      display: "none",
    });

    css(nth2_p, {
      display: "none",
    });

    setTimeout(() => {
      css(animBar, {
        display: "block",
      });

      css(nth1_p, {
        display: "block",
      });

      css(nth2_p, {
        display: "block",
      });
    }, 1000);
  });

  on(nth1, "mouseover", () => {
    css(nth1, { width: max_adjust, transition: "all 1000ms ease-in-out" });
    css(nth2, { width: min_adjust, transition: "all 1000ms ease-in-out" });

    css(nth2_h, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
  });

  on(nth1, "mouseout", () => {
    css(nth1, { width: _adjust, transition: "all 1000ms ease-in-out" });
    css(nth2, { width: _adjust, transition: "all 1000ms ease-in-out" });

    css(nth1_h, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p2, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });

    css(nth2_h, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
  });

  //----------------------------------

  on(nth2, "mouseover", () => {
    css(nth2, { width: max_adjust, transition: "all 1000ms ease-in-out" });
    css(nth1, { width: min_adjust, transition: "all 1000ms ease-in-out" });

    css(nth1_h, {
      transform: `translateX(-${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p, {
      transform: `translateX(-${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p2, {
      transform: `translateX(-${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });

    css(nth2_h, {
      transform: `translateX(0%)`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: `translateX(0%)`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: `translateX(0%)`,
      transition: "all 1000ms ease-in-out",
    });
  });

  on(nth2, "mouseout", () => {
    css(nth1, { width: _adjust, transition: "all 1000ms ease-in-out" });
    css(nth2, { width: _adjust, transition: "all 1000ms ease-in-out" });

    css(nth1_h, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p2, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });

    css(nth2_h, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: "translateX(0%)",
      transition: "all 1000ms ease-in-out",
    });
  });
} else {
  add(animBar, "hideThem");

  max_adjust = "100%";
  min_adjust = "0%";

  function forOne() {
    css(nth1, { width: max_adjust, transition: "all 1000ms ease-in-out" });
    css(nth2, { width: min_adjust, transition: "all 1000ms ease-in-out" });

    css(nth1_h, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p2, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });

    css(nth2_h, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: `translateX(${max_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
  }

  function forTwo() {
    css(nth1, { width: min_adjust, transition: "all 1000ms ease-in-out" });
    css(nth2, { width: max_adjust, transition: "all 1000ms ease-in-out" });

    css(nth1_h, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth1_p2, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });

    css(nth2_h, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
    css(nth2_p2, {
      transform: `translateX(${min_adjust})`,
      transition: "all 1000ms ease-in-out",
    });
  }

  forOne();

  function runMe(me, e) {
    if (e === 1) {
      forOne();
    } else {
      forTwo();
    }

    mk_arr(qs_a(".respButton")[0].children).forEach((cld) => {
      if (cld === me) {
        css(me, { "background-color": "#fff" });
      } else {
        css(cld, { "background-color": "#aaa" });
      }
    });
  }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        qs_a(".rightDt_")[0].click();
      } else {
        /* left swipe */
        qs_a(".leftDt_")[0].click();
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
}

//----------------------------------

on(open_, "click", () => {
  css(menuDiv_, { transform: "translateX(0%)" });
});

on(close_, "click", () => {
  css(menuDiv_, { transform: "translateX(100%)" });
});
