// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

circle.draw();

// Constructor Function
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(2);
console.log(another);
