
// --------- Fake Heuristics ---------------
// This should probably go in its own file
function run(layouts, callback) {
    let layout = layouts.toArray()
      .then((result) => {
        return result[result.length-1];
      });
  
    if (callback) {
      callback(layout);
    } else {
      return layout;
    }
  }

  module.exports = {
      run : run
  };