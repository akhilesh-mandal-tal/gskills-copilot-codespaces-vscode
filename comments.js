// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.



const app = express();
 const port = 3000;

app.get('/', (req, res) => { fs.readFile('/path/to/comments.html', 'utf8', (err, data) => { if (err) { console.error(err); res.status(500).send('Internal Server Error'); } else { res.send(data); } }); });

app.listen(port, () => { console.log(`Server is running on port ${port}`); });



app.get('/', (req, res) => { fs.readFile('/path/to/comments.html', 'utf8', (err, data) => { if (err) { console.error(err); res.status(500).send('Internal Server Error'); } else { res.send(data); } }); });

app.listen(port, () => { console.log(`Server is running on port ${port}`); });