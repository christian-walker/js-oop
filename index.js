// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      // console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  let defaultLocation = { x: 10, y: 12 };

  this.draw = function () {
    //console.log("Draw");
  };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
}

for (let key in circle) {
  console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

const another = new Circle(2);
//console.log(another);
