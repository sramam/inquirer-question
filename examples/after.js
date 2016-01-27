var inquirer = require('./..');

inquirer
  .prompt({
    type: 'list',
    message: 'hi',
    choices: {
      'test-1': function() {
        // some computatations
        return 1;
      },
      'test-2': 2
    }
  })
  .then(function(result) {
    console.log(result); //=> 1 or 2
  });
