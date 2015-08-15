# inquirer-question

flexible promise-based enhancement for one question case with backward capability

## Install

```
$ npm install inquirer-question
```

## Usage

```javascript
var inquirer = require('inquirer-question');

inquirer.prompt({
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
}).then(function(result) {
  console.log(result);
});
```

## License

MIT © [ewnd9](http://ewnd9.com)
