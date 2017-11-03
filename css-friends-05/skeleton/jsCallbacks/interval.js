class Clock {
  constructor() {
    // 1. Create a Date object.
    this.time = new Date();
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this.increment.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    var result = "";

    this.hh = this.time.getHours();
    this.mm = this.time.getMinutes();
    this.ss = this.time.getSeconds();

    result += ((this.hh < 10) ?  `0${this.hh}` : `${this.hh}`);
    result += ((this.mm < 10) ?  `:0${this.mm}` : `:${this.mm}`);
    result += ((this.ss < 10) ?  `:0${this.ss}` : `:${this.ss}`);

    console.log(result);
    // console.log(`${this.hh}:${this.mm}:${this.ss}`);
  }

  increment() {
    // 1. Increment the time by one second.
    var currentTime = this.time;
    // console.log(this);
    var incrementTime = currentTime.getTime() + 1000;
    this.time = new Date(incrementTime);
    this.printTime();
    // 2. Call printTime.
  }

  // tick() {
  //   var callback = this.increment;
  //   setInterval(callback, 1000);
  // }
}

const clock = new Clock();
// clock.increment();
// clock.increment();
// clock.increment();
// clock.increment();
// clock.increment();
// clock.tick();



// #
// const callback = function() {console.log("hello");};
// setInterval(callback,1000);
