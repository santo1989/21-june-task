  function createDiv(id, color, width, height) {
      let div = document.createElement("div");
      div.setAttribute("id", id);
      if (color === undefined) {
        let colors = ["green", "red", "blue", "purple", "black"];
        div.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      } else {
        div.style.backgroundColor = color;
      }
      if (width === undefined || height === undefined) {
        let dstyle = [Math.floor(Math.random() * 500)] + "px";
        div.style.height = dstyle;
        div.style.width = dstyle;
      } else {
        div.style.height = height;
        div.style.width = width;
      }
      document.body.appendChild(div);
    }

      createDiv('first');
      createDiv('second');
      createDiv('third');

      function make_handler(el) {
        return function() {
          return document.createElement(el);
        };
      }

      let divs = ["div", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6"];
      for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let handler = make_handler(div);
        handler();
      }

      make_handler("div");