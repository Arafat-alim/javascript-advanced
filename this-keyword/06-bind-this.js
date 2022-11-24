class Animal {
  constructor() {
    this.walk = true;
  }

  canWalk() {
    console.log("Yes i can walk", this.walk);
  }

  canwalkToo() {
    setTimeout(
      function () {
        console.log(this);
        console.log("Mee too", this.walk);
      }.bind(this),
      1500
    );
  }
}

//! Creating an instance
const an1 = new Animal();
an1.canWalk();
an1.canwalkToo();
