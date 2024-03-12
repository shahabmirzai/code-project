const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'))
})

app.use(express.static(__dirname))

/*
app.get('/notes', (req, res) => {
    if (req.query.type === "wisdom") {
        res.sendFile(path.join(__dirname, 'wisdom.html'))
    }
})
*/

app.get('/search', (req, res) => {
    const search = req.query.search || '';
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Notes Search</title>
      </head>
      <body>
        <form action="/search" method="get">
          <label for="search">Search Notes:</label>
          <input type="text" id="search" name="search" value="${search}" />
          <input type="submit" value="Search" />
        </form>
        ${search ? `<h1>No Data for "${search}" search request</h1>` : ''}
      </body>
    </html>
    `;
    res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})