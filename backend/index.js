
const app  = require('./src/config/express');
const port = process.env.PORT || 8080;

// Create a home route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);
