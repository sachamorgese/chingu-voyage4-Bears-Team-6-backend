const Interest = require('../models/interest')

const interests = [
  { name: 'Music' },
  { name: 'Coding' },
  { name: 'Basketball' },
  { name: 'Cooking' },
  { name: 'Technology' },
]

// clear interests collection before insert to avoid duplicate
const populate = () => Interest.remove({})
  .then(() => Interest.insertMany(interests))

module.exports = { populate }
