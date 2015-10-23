# do-not-disturb [![Build Status](https://secure.travis-ci.org/johnotander/do-not-disturb.png?branch=master)](https://travis-ci.org/johnotander/do-not-disturb)

Toggle do not disturb mode for OS X

## CLI

```bash
$ npm i -g do-not-disturb
```

```bash
$ do-not-disturb --help

  Usage
    do-not-disturb
```

## API

```bash
$ npm install --save do-not-disturb
```

```javascript
var doNotDisturb = require('do-not-disturb')

doNotDisturb(function () {
  console.log('Do not disturb has been toggled')
})
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
