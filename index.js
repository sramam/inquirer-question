var inquirer = require('inquirer-bluebird');
var clone = require('clone');

var prompt = inquirer.prompt;

inquirer.prompt = function(_params, cb) {
  if (!Array.isArray(_params) && (typeof _params.choices === 'object') && !Array.isArray(_params.choices)) {
    var params = clone(_params);
    params.name = 'x';

    var choices = params.choices;

    params.choices = Object.keys(choices).map(function(key) {
      var val = choices[key];
      return {
        name: key,
        value: key
      };
    });

    return prompt(params, cb).then(function(answers) {
      return choices[answers.x]();
    });
  } else {
    return prompt(_params, cb);
  }
};

module.exports = inquirer;
