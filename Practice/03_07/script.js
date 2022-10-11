/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const dog = {
    name: 'Cutie',
    leg: 4, 
    tail: 1, 
    children: {
        leg: 4,
        child1:{
            name: 'Tim', 
            age: 2, 
            leg: 3},
            child2:{
                name: 'Tim', 
                age: 2, 
                leg: 3
        }
    }
    }
console.log('this is ', dog); 
console.log('this is ', dog.children['child1'].name); 