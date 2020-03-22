module.exports = function check(str, bracketsConfig) {

  var getBracketsSets = function (config) {
    return config.map(function (item) {
      return item.join('');
    });
  }

  var bracketsSet = getBracketsSets(bracketsConfig);
  for (var i = 0; i < bracketsSet.length;) {
    if (str.indexOf(bracketsSet[i]) !== -1) {
      str = str.replace(bracketsSet[i], '');
      i = 0;
    } else i++;
  };

  return !str;

}
