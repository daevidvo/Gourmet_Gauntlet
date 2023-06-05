const { User, Cards } = require('../models')
const db = require('../config/connection');
const cardData = require('./cardSeedData.json')
const userData = require('./userSeedData.json')

db.once('open', async () => {
    try {
      await User.deleteMany({});
      await User.create(userData);
      
      await Cards.deleteMany({});
      await Cards.create(cardData);

      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });
