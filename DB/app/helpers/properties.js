exports.cleanProperties = (input, schema) => {
  output = {};
  Object.keys(schema).forEach(key => {
    output[key] = input[key];
  });
  return output;
};
