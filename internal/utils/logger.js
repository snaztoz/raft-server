templates = {
  'INFO': '[\x1b[36m%s\x1b[0m]\t   %s',
  'ERR': '[\x1b[31m%s\x1b[0m]\t    %s',
  'SUCCESS': '[\x1b[32m%s\x1b[0m]  %s',
}

module.exports = function(type, message) {
  if (!templates.hasOwnProperty(type)) {
    throw 'INVALID LOGGING TYPE!'
  }

  console.log(templates[type], type, message)
}
