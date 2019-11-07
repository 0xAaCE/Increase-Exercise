exports.asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

exports.waitFor = ms => new Promise(r => setTimeout(r, ms));

exports.minutesToMs = min => min * 60000;
