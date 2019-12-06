////从两边吹会产生任意颜色背景
let sketch1 = function(p) {
  let ledStr = [];
  let ledStr2 = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t1 = [];
  let t2 = [];

  var changeState = false;
  ////bg
  let bg = ["#7B90D2", "#EB7A77", "#FFB11B", "#86C166", "#33A6B8", "#D05A6E"];
  let n = 0;
  ///

  class Led {
    constructor(y, spacer) {
      this.c1 = 0;
      this.c2 = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show() {
      for (let i = 0; i < this.num / 2; i++) {
        p.rectMode(p.CENTER);
        p.noStroke();
        p.fill(this.c1);
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
        p.fill(this.c2);
        p.rect((i + 8) * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);

      }

    }
    update(t1, t2) {
      for (let i = 0; i < this.num; i++) {
        this.c1 = p.color(251, 150, 110, 128 + 128 * p.cos(t1 / 10 + i / 4));
        this.c2 = p.color(251, 150, 110, 128 + 128 * p.cos(t2 / 10 + i / 4));

      }
    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);

    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      t1[j] = t2[j] = j;

    }
  }

  p.draw = function() {
    //p.background(0);
    // p.background(199,66,141);
    // p.background(240,94,28);
    // p.background(0, 92, 175);
    p.background(bg[n]);
    // p.background(240, 94, 28);
    if (p.frameCount % 360 === 0) {
      n++;
      if (n === 6) {
        n = 0;
      }
    }
    for (let j = 0; j < 30; j++) {
      if (changeState === true) {
        t1[j]++;
        t2[j]--;

      } else {
        t1[j]--;
        t2[j]++;

      }

      ledStr[j].show();
      ledStr[j].update(t1[j], t2[j]);

    }

  }
  p.mousePressed = function() {
    changeState = !changeState;
    n = n + 1;
    if (n === 6) {
      n = 0;
    }
    console.log(changeState);
  }
}




let canvas1 = new p5(sketch1, "c1");
//////////////////

let sketch2 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];


  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(203, 64, 66, 128 + 128 * p.cos(t / 50 + i / 2));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      t[j] = 0;
      //t[j]= 0;
    }
  }

  p.draw = function() {
    p.background(0);
    for (let j = 0; j < 30; j++) {
      //  t[j] = j * cos(millis()/1000);
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show(t[j]);
    }
  }
}

let canvas2 = new p5(sketch2, "c2");
/////////////////

let sketch3 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];


  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(251, 150, 110, 128 + 128 * p.cos(t / 50 + i / 4));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      // t[j] = j;
      t[j] = 0;
    }
  }

  p.draw = function() {
    p.background(0);
    for (let j = 0; j < 30; j++) {
      //  t[j] = j * cos(millis()/1000);
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show(t[j]);
      // ledStr[j].update(t[j]);
    }

  }

}

let canvas3 = new p5(sketch3, "c3");


//////////////

let sketch4 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];
  var changeState = false;
  ////bg
  let bg = ["#7B90D2", "#EB7A77", "#FFB11B", "#86C166", "#33A6B8", "#D05A6E"];
  let n = 0;
  ///

  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(251, 150, 110,128 + 128 * p.sin(t / 30 + i / 4));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      t[j] = 20 * p.cos(p.millis() / 1000 + j);

    }
  }

  p.draw = function() {
    p.background(bg[n]);
    if (p.frameCount % 360 === 0) {
      n++;
      if (n === 6) {
        n = 0;
      }
    }
    for (let j = 0; j < 30; j++) {
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show(t[j]);
    }

  }
  p.mousePressed = function() {
    changeState = !changeState;
    n = n + 1;
    if (n === 6) {
      n = 0;
    }
    console.log(changeState);
  }
}

let canvas4 = new p5(sketch4, "c4");
/////////////////


let sketch5 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];
  let changeState = false;
  ////bg
  let bg = ["#7B90D2", "#EB7A77", "#FFB11B", "#86C166", "#33A6B8", "#D05A6E"];
  let n = 0;
  ///
  let texts;
  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(255, 128 + 128 * p.tan(t / 30 + i / 4));
        //this.c = p.color(203,64,66, 128 + 128 * p.cos(t / 10 + i / 4));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      // t[j] = j;
      //t[j]= 0;
      t[j] = 20 * p.cos(p.millis() / 1000 + j);

    }
  }

  p.draw = function() {
    p.background(bg[n]);
    if (p.frameCount % 360 === 0) {
      n++;
      if (n === 6) {
        n = 0;
      }
    }
    for (let j = 0; j < 30; j++) {
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show(t[j]);
    }

  }
  p.mousePressed = function() {
    changeState = !changeState;
    n = n + 1;
    if (n === 6) {
      n = 0;
    }
    console.log(changeState);
  }
}

let canvas5 = new p5(sketch5, "c5");


////
let sketch6 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];
  let changeState = false;
  ////bg
  let bg = ["#7B90D2", "#EB7A77", "#FFB11B", "#86C166", "#33A6B8", "#D05A6E"];
  let n = 0;
  ///


  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show() {
      for (let i = 0; i < this.num; i++) {
        //this.c.setAlpha(128+128 * cos(t / 20 + i / 4));
        p.rectMode(p.CENTER);

        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }
    update(t) {
      for (let i = 0; i < this.num; i++) {
        this.c = p.color(203, 64, 66, 128 + 128 * p.sin(t / 50 + i / 4));

      }
    }

  }
  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      t[j] = j;
      //t[j]= 0;
    }
  }

  p.draw = function() {
    p.background(bg[n]);
    if (p.frameCount % 360 === 0) {
      n++;
      if (n === 6) {
        n = 0;
      }
    }
    for (let j = 0; j < 30; j++) {
      if (j % 2 === 0) {
        t[j]++;
      } else {
        t[j]--;
      }
      ledStr[j].show();
      ledStr[j].update(t[j]);
    }
  }
  p.mousePressed = function() {
    changeState = !changeState;
    n = n + 1;
    if (n === 6) {
      n = 0;
    }
    console.log(changeState);
  }
}
let canvas6 = new p5(sketch6, "c6");


//////
let sketch7 = function(p) {
  let ledStr = [];
  let spacer = 16;
  let rows;
  let spaceY;
  let y = [];
  let t = [];
  let c = [];
  let lefttrigger;
  let righttrigger;
  var changeState = false;

  class Led {
    constructor(y, spacer) {
      this.c = 0;
      this.y = y;
      this.num = 16;
      this.spacer = spacer;
    }

    show() {
      for (let i = 0; i < this.num; i++) {
        //this.c.setAlpha(128+128 * cos(t / 20 + i / 4));
        p.rectMode(p.CENTER);
        p.fill(this.c);
        p.noStroke();
        p.rect(i * this.spacer + this.spacer / 2, this.y, this.spacer, this.spacer);
      }

    }
    update(c) {
      for (let i = 0; i < this.num; i++) {
        this.c = c;

      }
    }

  }

  p.setup = function() {
    p.createCanvas(200, 378);
    spaceY = p.height / 30;
    rows = p.width / spacer;
    for (let j = 0; j < 30; j++) {
      y[j] = j * spaceY;
      ledStr[j] = new Led(y[j] + spaceY / 2, rows);
      t[j] = j;

    }
    lefttrigger = p.createButton("left");
    righttrigger = p.createButton("right");
    lefttrigger.position(p.width * 2, p.height * 2 / 2);
    righttrigger.position(p.width * 2, p.height * 2 / 2 + 50);
    lefttrigger.mousePressed(leftControl);

    righttrigger.mousePressed(rightControl);

  }

  p.draw = function() {
    p.background(0);
    for (let j = 0; j < 30; j++) {
      if (changeState === true) {
        t[j]++;
      } else {
        t[j]--;
      }
      c[j] = p.color(251, 150, 110, 128 + 128 * p.cos(t[j] / 50 + j / 4));
      ledStr[j].show();
      ledStr[j].update(c[j]);

    }

  }

  leftControl = function() {
    changeState = false;
    console.log(changeState);
  }

  rightControl = function() {
      changeState = true;
      console.log(changeState);

    }
    // }
}



let canvas7 = new p5(sketch7, "c7");