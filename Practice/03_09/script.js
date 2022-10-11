/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Accessing methods from an object ", backpack.strapLength.left);
console.log("Accessing methods from an object ", backpack.strapLength.right);
console.log(backpack); 

console.log(backpack.newStrapLength(100,200));  

console.log("Changing values with the methods in the object ", backpack.strapLength.left);
console.log("Changing values with the methods in the object ", backpack.strapLength.right);