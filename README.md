[![Build Status](https://travis-ci.org/stevezhu/meteor-lodash.svg?branch=master)](https://travis-ci.org/stevezhu/meteor-lodash)

A meteor package for [lodash](http://lodash.com/).

Using lodash v3.5.0


## Usage

```
meteor add stevezhu:lodash@3.5.0
```

`_` and `lodash` are both defined as lodash if used in a package.  
In an app, `_` is redefined as underscore so you may need to have `_ = lodash;` in some main javascript file.