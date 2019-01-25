// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(atts) {
    this.length = atts.length;
    this.width = atts.width;
    this.height = atts.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// The formulas for volume and surface area of a cube are the same as for a cuboid (a cube is just a special cuboid). I created two other methods instead:
// 1. calcFaceDiag(), which calculates the length of the diagonal from a corner of the cube to any corner on the same side. The result will always be the same for a cube regardless of which two corners are chosen.
// 2. calcMainDiag(), which calculates the length of the diagonal from any corner of the cube to the corner opposite of that corner (through the center of the cube). The result will always be the same for a cube regardless of which two corners are chosen.

class CubeMaker extends CuboidMaker {
  constructor(atts) {
    super(atts);
  }
  calcFaceDiag() {
    return Math.sqrt(2 * Math.pow(this.width, 2));
  }
  calcMainDiag() {
    return this.width * Math.sqrt(3);
  }
}

const cube = new CubeMaker({ length: 3, width: 3, height: 3 });
console.log(cube.volume()); // 27 As mentioned above, the Cubiod volume() and surfaceArea() work fine.
console.log(cube.surfaceArea()); // 54
console.log(cube.calcFaceDiag()); // 4.242640687119285
console.log(cube.calcMainDiag()); // 5.196152422706632
