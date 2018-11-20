const needQEncoding = /[^\x20-\x7e]/
const needQuotes = /[^\x20\x27\x2d\x2e0-9A-Za-z]/

function qEncode (input) {
  return `=?utf-8?Q?${encodeURIComponent(input).replace(/_/g, '%5F').replace(/%20/g, '_').replace(/%/g, '=')}?=`
}

function quote (input) {
  return '"' + input.replace(/([\\"])/g, '\\$1') + '"'
}

module.exports = function formatEmailAddress (input) {
  if (!input.name) return input.address

  if (needQEncoding.test(input.name)) return `${qEncode(input.name)} <${input.address}>`
  if (needQuotes.test(input.name)) return `${quote(input.name)} <${input.address}>`

  return `${input.name} <${input.address}>`
}
