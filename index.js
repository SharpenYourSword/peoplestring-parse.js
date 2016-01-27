module.exports = parsePerson

var components = {
  name: /^([^\(<]+)/,
  url: /\(([^\)]+)\)/,
  email: /<([^>]+)>/ }

function parsePerson(string) {
  if (typeof string !== 'string') {
    throw new Error('Invalid argument') }
  return Object.keys(components)
    .reduce(
      function(returned, key) {
        var match = string.match(components[key])
        if (match && match[1] && match[1].trim().length > 0) {
          returned[key] = match[1].trim() }
        return returned },
      { }) }
