var inquirer = require('./..');

inquirer
  .prompt({
    type: 'list',
    message: 'hi',
    choices: {
      'test-1': function() {
        return 1;
      },
      'test-2': function() {
        return 2;
      }
    }
  })
  .then(function(result) {
    console.log(result); //=> 1 or 2
  });
