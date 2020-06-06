function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch already running");
    }
    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is already stopped");
    }

    running = false;

    stopTime = new Date();

    const seconds = stopTime.getSeconds() - startTime.getSeconds();

    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
