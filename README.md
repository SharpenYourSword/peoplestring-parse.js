The package exports a single function.

```javascript
var parse = require('peoplestring-parse')
```
The function takes a single string argument (a "peoplestring") and
returns an `Object` with `name`, `email`, `url`, and `for`, properties
for each piece of people information appearing in the string.

The following examples are also the test suite for the package. They use
Node.js' built-in `assert` module.

```javascript
var assert = require('assert')
```

A peoplestring can contain just a name.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith'),
  { name: 'Mary Smith' })
```

If the name has trailing whitespace, it's ignored.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith   '),
  { name: 'Mary Smith' })
```

If the name has leading whitespace, it's ignored.

```javascript
assert.deepStrictEqual(
  parse('    Mary Smith'),
  { name: 'Mary Smith' })
```

A peoplestring can contain an e-mail address in angle brackets.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith <mary@smith.com>'),
  { name: 'Mary Smith',
    email: 'mary@smith.com' })
```

A peoplestring can contain a URL in parentheses.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith (https://marysmith.com)'),
  { name: 'Mary Smith',
    url: 'https://marysmith.com' })
```

A peoplestring can contain the name of another person or company to show
a person's contribution is a [work made for hire][WMFH] for someone else.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith [SuperCo, Inc.]'),
  { name: 'Mary Smith',
    for: 'SuperCo, Inc.' })
```

A peoplestring can contain a name, an e-mail address, and a URL.

```javascript
assert.deepStrictEqual(
  parse('Mary Smith <mary@smith.com> (https://marysmith.com)'),
  { name: 'Mary Smith',
    email: 'mary@smith.com',
    url: 'https://marysmith.com' })

assert.deepStrictEqual(
  parse('Mary Smith (https://marysmith.com) <mary@smith.com>'),
  { name: 'Mary Smith',
    email: 'mary@smith.com',
    url: 'https://marysmith.com' })
```

A peoplestring can contain just an e-mail address in angle brackets.

```javascript
assert.deepStrictEqual(
  parse('<mary@smith.com>'),
  { email: 'mary@smith.com' })
```

A peoplestring can contain just a URL in parentheses.

```javascript
assert.deepStrictEqual(
  parse('(https://marysmith.com)'),
  { url: 'https://marysmith.com' })
```

A peoplestring can contain just the name of the [work make for hire
owner][WMFH].

```javascript
assert.deepStrictEqual(
  parse('[SuperCo, Inc.]'),
  { for: 'SuperCo, Inc.' })
```

The function throws when passed a non-string arguments.

```javascript
assert.throws(
  function () {
    parse({ a: 1 }) })
```

[WMFH]: http://worksmadeforhire.com/
