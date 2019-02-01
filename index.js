const express = require('express');
const app = express();

//middleware used in pipeline
app.use(express.json());

const courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'}
];

app.get('/',(req, res) => {
    res.send('Hello World!!');
});

app.get('/api/courses/:id',(req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('ID not found.');
    res.send(course);
});
/*
app.get('/api/courses/:courseName',(req, res) => {
    res.send(req.params.courseName);
});*/

app.get('/api/posts/:year/:month',(req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}...`));