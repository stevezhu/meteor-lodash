[![Build Status](https://travis-ci.org/stevezhu/meteor-lodash.svg?branch=master)](https://travis-ci.org/stevezhu/meteor-lodash)

A meteor package for [lodash](http://lodash.com/).

## v1.0.0+

`_` and `lodash` are both defined as lodash.

## v0.1.0, v0.2.0

Use with `lodash`.  
`_` is still underscore.

To use `_` just add the following to the top of the file
```
var _ = lodash;
```

or wrap your code in a closure if you're feeling really diligent
```javascript
(function(_) {
    // code
})(lodash);
```
