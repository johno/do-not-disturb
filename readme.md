# do-not-disturb [![Build Status](https://secure.travis-ci.org/johno/do-not-disturb.png?branch=master)](https://travis-ci.org/johno/do-not-disturb)

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

Note: If you haven't already, you will need to give your Terminal.app the ability to control your computer. In `System Preferences > Security & Privacy`:

![h4ixljc8p5u7wpaidv7ynwrbvlifzonor7gxg-fdn7e](https://cloud.githubusercontent.com/assets/1424573/10701986/06c323a6-7984-11e5-9fa1-3fb239c7a60f.png)

## API

```bash
$ npm install --save do-not-disturb
```

```javascript
const doNotDisturb = require('do-not-disturb');

doNotDisturb.on();
doNotDisturb.off();

// Or check the state of do not disturb mode
doNotDisturb
  .status()
  .then(console.log);
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
