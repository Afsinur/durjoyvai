//! for css class based

//! width = w-
//! height = h-
//! background-color = bg-
//! padding = p-
//! margin = m-
//! color = cl-
//! font-size = fs-
//! font-weight = fw-

//! border-radius = b-rds-
//! border = br-
//! border-right = br-r-
//! border-bottom = br-b-
//! border-left = br-l-
//! border-top = br-t-

//! top = t-
//! right = r-
//! bottom = b-
//! left = l-
//! box-shadow = bx-shd-
//! text-shadow = tx-shd-

//! min-width = min-w-
//! max-width = max-w-

//! line-height = line-h-
//! letter-spacing = lt-sp-

//! media queries
//! fs = s-max-768-fs-
//! w = s-max-768-w-
//! r = s-max-768-r-

const cssJs = () => {
  for (let i = 0; i < document.getElementsByTagName("*").length; i++) {
    const el = document.getElementsByTagName("*")[i];

    //width
    let mtc = "w-";
    let arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { width: splt[1] });
      }
    }

    //height
    mtc = "h-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { height: splt[1] });
      }
    }

    //border-radius
    mtc = "b-rds-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "border-radius": splt[1] });
      }
    }

    //line-height
    mtc = "line-h-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "line-height": splt[1] });
      }
    }

    //letter-spacing
    mtc = "lt-sp-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "letter-spacing": splt[1] });
      }
    }

    //border
    mtc = "br-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { border: `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { border: `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //border-right
    mtc = "br-r-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { "border-right": `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { "border-right": `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //border-bottom
    mtc = "br-b-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { "border-bottom": `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { "border-bottom": `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //border-left
    mtc = "br-l-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { "border-left": `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { "border-left": `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //border-top
    mtc = "br-t-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { "border-top": `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { "border-top": `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //background-color
    mtc = "bg-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "background-color": splt[1] });
      }
    }

    //color
    mtc = "cl-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { color: splt[1] });
      }
    }

    //font-size
    mtc = "fs-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "font-size": splt[1] });
      }
    }

    //font-weight
    mtc = "fw-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "font-weight": splt[1] });
      }
    }

    //padding
    mtc = "p-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, {
            padding: `${sprt[0]} `,
          });
        } else if (sprt.length === 2) {
          css(el, {
            padding: `${sprt[0]} ${sprt[1]}`,
          });
        } else if (sprt.length === 4) {
          css(el, {
            padding: `${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
          });
        }
      }
    }

    //margin
    mtc = "m-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, {
            margin: `${sprt[0]} `,
          });
        } else if (sprt.length === 2) {
          css(el, {
            margin: `${sprt[0]} ${sprt[1]}`,
          });
        } else if (sprt.length === 4) {
          css(el, {
            margin: `${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
          });
        }
      }
    }

    //top
    mtc = "t-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { top: splt[1] });
      }
    }

    //right
    mtc = "r-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { right: splt[1] });
      }
    }

    //bottom
    mtc = "b-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { bottom: splt[1] });
      }
    }

    //left
    mtc = "l-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { left: splt[1] });
      }
    }

    //box-shadow
    mtc = "bx-shd-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        css(el, {
          "box-shadow": ` ${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]} ${sprt[4]} `,
        });
      }
    }

    //text-shadow
    mtc = "tx-shd-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        css(el, {
          "text-shadow": ` ${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
        });
      }
    }

    //min-w-
    mtc = "min-w-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, {
          "min-width": splt[1],
        });
      }
    }

    //max-w-
    mtc = "max-w-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, {
          "max-width": splt[1],
        });
      }
    }

    //media query
    mtc = "s-max-768-fs-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        if (window.innerWidth <= 768) {
          css(el, {
            "font-size": splt[1],
          });
        }
      }
    }

    //media query
    mtc = "s-max-768-r-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        if (window.innerWidth <= 768) {
          css(el, {
            right: splt[1],
          });
        }
      }
    }

    //media query
    mtc = "s-max-768-w-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        if (window.innerWidth <= 768) {
          console.log(el);
          css(el, {
            width: splt[1],
          });
        }
      }
    }

    //media query
    mtc = "s-max-768-p-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (window.innerWidth <= 768) {
          if (sprt.length === 1) {
            css(el, {
              padding: `${sprt[0]} `,
            });
          } else if (sprt.length === 2) {
            css(el, {
              padding: `${sprt[0]} ${sprt[1]}`,
            });
          } else if (sprt.length === 4) {
            css(el, {
              padding: `${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
            });
          }
        }
      }
    }
  }
};

cssJs();
