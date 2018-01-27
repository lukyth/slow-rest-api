# slow-rest-api

A REST API that is slow.

Part of the __The Node.js Performance Workshop__.

## Steps

1. clone this repository
2. `npm install`
3. `node index`
4. In another terminal: `npm test`

## Running Clinic Doctor

_NOTE: This requires nodejs v9.4.0 or v8.9.4._

1. Install [clinic](http://npm.im/clinic) with `npm install clinic -g`
2. Run `clinic doctor -- node index`
3. What is the problem?

A sample doctor output is included in `doctor.html`.

## Generating a flamegraph

1. Make sure you are on Linux or Mac OS X, and you have superuser
   permissions
2. Install [clinic](http://npm.im/clinic) with `npm install clinic -g`
3. `clinic flame -- node index`
4. In another terminal, as soon as possible: `npm test`
5. CTRL-C the `clinic` process.

A sample flamegraph is included in `flamegraph.html`.

## Check when [TurboFan](https://github.com/v8/v8/wiki/TurboFan) inline a function
```bash
node --trace-turbo-inlining index.js | grep etag
```

## Check when [TurboFan](https://github.com/v8/v8/wiki/TurboFan) opt or deopt
```bash
node --trace-turbo-inlining --trace-opt --trace-deopt index.js > trace-output
```

## License

MIT
