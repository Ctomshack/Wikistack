const express = require('express');
const app = express();
const { db, Page, User } = require('./models');

const init = async () => {
    await db.sync({ force: true });

}
app.get('/', (req,res) => {
    res.send('baller')
})

db.authenticate()
.then(() => {
    console.log('connected to the database');
  })



app.listen(3000, function() {
    console.log('Hello, listening on port ${');
});

init();