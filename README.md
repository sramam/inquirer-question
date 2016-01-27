# inquirer-question

flexible promise-based enhancement for one question case with backward capability

## Install

```
$ npm install inquirer-question --save
```

## Usage

### Before

```js
var inquirer = require('inquirer-bluebird');

inquirer
  .prompt({
    type: 'list',
    name: 'q1',
    message: 'hi',
    choices: [
      'test-1',
      'test-2'
    ]
  })
  .then(function(result) {
    if (result.q1 === 'test-1') {
      return 1;
    } else if (result.q1 === 'test-2') {
      return 2;
    }
  });
```

### Now

```js
var inquirer = require('inquirer-question');

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
```


## License

MIT © [ewnd9](http://ewnd9.com)
