const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    slug: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = {
  db, Page, User
}
