// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let parent = { Name: "ritika", Age: 23, City: "Banglore", }
let child = {Name : "megha", Address: "Zolo", }
child.proto = parent;
console.log(child.proto.City);