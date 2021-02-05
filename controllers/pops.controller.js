const { pops } = require('../constants/pops.constant');

const getPops = (req, res) => {
  res.send(pops);
};

module.exports = {
  getPops,
};
