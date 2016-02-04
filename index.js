'use strict';

function weakSplit(string, separator, limit) {
  const result = string.split(separator, limit);
  if (result.length > 0 && result[0].length === 0) {
    result.shift();
  }
  if (result.length > 0 && result[result.length - 1].length === 0) {
    result.pop();
  }
  return result;
}

module.exports = weakSplit;
