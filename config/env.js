'use strict';

module.exports = () => {
  const REACT_APP = /^REACT_APP_/i;

  return {
    'process.env': Object.keys(process.env)
      .filter(key => REACT_APP.test(key))
      .reduce((val, key) => {
        val[key] = JSON.stringify(process.env[key]);
        return val;
      }, {}),
  };
};
