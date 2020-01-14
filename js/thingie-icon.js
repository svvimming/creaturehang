class Icon{
  constructor(img, size, xpos, ypos, hit, index){
  this.img = img;
  this.w = size;
  this.h = size;
  this.xpos = xpos;
  this.ypos = ypos;
  this.hit = false;
  this.index = index;

  this.intersected = function() {
      if (mouseX > this.xpos && mouseX < (this.xpos + this.width) && mouseY > this.ypos && mouseY < (this.ypos + this.height)) {
        for(i=0;i<rects.length;i++) {
          rects[i].hit =false;
        }
        this.hit = true;
        this.clicked();
      } else {
        this.hit = false;
      }
    }
  this.clicked = function(){
      this.offsetX = this.xpos - mouseX;
      this.offsetY = this.ypos - mouseY;
      resiZer = this.index;
      for (j=0; j<sliders.length; j++) {
        sliders[j].hide();
      }
      sliders[this.index].show();
    }

  this.move = function() {
      if (this.hit && mouseIsPressed) {
          this.xpos = mouseX + this.offsetX;
          this.ypos = mouseY + this.offsetY;
      }
      divs[this.index].position(this.xpos, this.ypos);
      sliders[this.index].position(this.xpos, this.ypos - 20);
    }

  this.display = function() {
      push();
      image(this.img, this.xpos, this.ypos, this.width, this.height);
      pop();
    }
  }
}
