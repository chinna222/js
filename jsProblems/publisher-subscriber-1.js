// P.S:- Showcase the working of publisher subscriber pattern in javascript.
// Create a function which have three methods 1. Subscribe 2. Unsubscribe 3. Fire

// What does subscribe do?
//  Sunscribes a function to an event.

// What does unsubscribe do?
//  Unsunscribes a function to an event.

// What does fire do?
//  when event is fired or published all the subscibed functions will be invoked with data.

// Implementation

const Event = function () {
  this.handlers = [];

  this.subscribe = function (fn) {
    this.handlers.push(fn);
  };

  this.unsubscribe = function (fn) {
    this.handlers.filter((item) => item !== fn);
  };

  this.fire = function (data, thisObj) {
    const scope = thisObj || global;
    this.handlers.forEach((fn) => {
      fn.call(scope, data);
    });
  };
};

const newEvent = new Event();
newEvent.subscribe(() => {
  console.log("I am woking");
});

newEvent.fire();
