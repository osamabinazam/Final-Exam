

// Define home index
exports.index = (req, res) => {
    console.log("Home route hit!")
    res.send('Hello World!');
};