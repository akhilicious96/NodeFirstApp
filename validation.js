const Joi = require('joi');
const express = require('express');
const app = express();

//middleware used in pipeline
app.use(express.json());

const courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'}
];

app.post('/api/courses/input/validate',(req, res) => {
    const schema = {
        name : Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        res.status(400).send(result.error);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}...`));