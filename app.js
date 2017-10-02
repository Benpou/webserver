const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/users', (req, res) => {
    let users = [
        {
            first_name: 'John',
            last_name: 'Doe',
            age: '12',
            gender: 'male'
        },
        {
            first_name: 'kim',
            last_name: 'lkkk',
            age: '42',
            gender: 'female'
        },
        {
            first_name: 'khosro',
            last_name: 'moe',
            age: '98',
            gender: 'male'
        }

    ];

    res.json(users);
});

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', (req, res) => {
    res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;

    console.log(name + ' this is email : ' + email);

});


app.listen(3000, () => {
    console.log('welcome to app');

});
