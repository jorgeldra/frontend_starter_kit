/*
Decorators are a structural design pattern that aim to promote code re-use. Similar to Mixins, they can be 
considered another viable alternative to object sub-classing.
*/

// A vehicle constructor
function Vehicle( vehicleType ){
 
    // some sane defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
 
}
 
// Test instance for a basic vehicle
var testInstance = new Vehicle( "car" );
console.log( testInstance );
 
// Outputs:
// vehicle: car, model:default, license: 00000-000
 
// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle( "truck" );
 
// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};
 
truck.setColor = function( color ){
    this.color = color;
};
 
// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );
 
console.log( truck );
 
// Outputs:
// vehicle:truck, model:CAT, color: blue
 
// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle( "car" );
console.log( secondInstance );
 
// Outputs:
// vehicle: car, model:default, license: 00000-000


//--------------------------------------------WITH INTERFACE

// Create interfaces using a pre-defined Interface
// constructor that accepts an interface name and
// skeleton methods to expose.
 
// In our reminder example summary() and placeOrder()
// represent functionality the interface should
// support
var reminder = new Interface( "List", ["summary", "placeOrder"] );
 
var properties = {
  name: "Remember to buy the milk",
  date: "05/06/2016",
  actions:{
    summary: function (){
      return "Remember to buy the milk, we are almost out!";
   },
    placeOrder: function (){
      return "Ordering milk from your local grocery store";
    }
  }
};
 
// Now create a constructor implementing the above properties
// and methods
 
function Todo( config ){
 
  // State the methods we expect to be supported
  // as well as the Interface instance being checked
  // against
 
  Interface.ensureImplements( config.actions, reminder );
 
  this.name = config.name;
  this.methods = config.actions;
 
}
 
// Create a new instance of our Todo constructor
 
var todoItem = new Todo( properties );
 
// Finally test to make sure these function correctly
 
console.log( todoItem.methods.summary() );
console.log( todoItem.methods.placeOrder() );
 
// Outputs:
// Remember to buy the milk, we are almost out!
// Ordering milk from your local grocery store