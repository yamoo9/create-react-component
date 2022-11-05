const scaffoldReactComponentFiles = require('./_scaffoldReactComponentFiles');
const defaultParams = require('./_defaultParams');
const getUserParams = require('./_getUserParams');

const userParams = getUserParams();

const config = {
  ...defaultParams,
  ...userParams,
};

scaffoldReactComponentFiles(config);
