const express = require('express');
const path = require('path');
const { Character, Nation, conn, syncAndSeed } = require('../db/index')


const init = async() => {
  try{
      await conn.sync();
      await syncAndSeed();
      const port = process.env.PORT || 3000;
      app.listen(port, () => {
          console.log(`listening on port ${port}`)
      });
  }
  catch(ex){
      console.log(ex);
  }
}

init();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use('/api', require('./api'))


app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      res.status(404).end()
    } else {
      next()
    }
  })


  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });

  app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

module.exports = app;