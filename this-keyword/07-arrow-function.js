//! Arrow function
this.value = 145;
const vegan1 = () => console.log("Yeah Boi", this); //! window
const vegan2 = () => console.log("Yeah Boi", this.value); //! window
vegan1(); //! Yeah Boi 145
vegan2(); //! windwo

class Animal {
  constructor() {
    this.walk = true;
  }

  canWalk() {
    console.log("Yes ", this.walk);
  }

  canWalkToo() {
    setTimeout(() => {
      console.log(this);
      console.log(this.walk);
    });
  }
}

//! creating an instance of an Animal Class
const ani = new Animal();
ani.canWalk();
ani.canWalkToo();
