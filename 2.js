// Write code to explain prototype chaining

let object1 = {firstname : "ritika",lastname : "joshi",
    data : function () {
        console.log(this.firstname + " " + this.lastname);
    }
}
object1.data();
let object2 = {
    firstname : "riti",
}
object2.proto = object1;
object2.data();
console.log(object2);

