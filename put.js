const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
    {id: 1, name:"course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
];
app.put('/api/courses/:id', (req, res) => {
    //Look up for the course
    const course = courses.find(c => c.id === parseInt(req.params.id));

    //if not existing, return 404
    if(!course)
        res.status(404).send('the course with entered id not found');
    //validate
    const { error} = validateCourse(req.body);
    
    //if invalid, return 404 - Bad request
    if(error){
        res.status(404).send(result.error.details[0].message);
        return;
    }
    //update course
    course.name = req.body.name;

    //return the course
    res.send(course);
    function validateCourse(course){
        const schema = {
            name : Joi.string().min(3).required()
        };
        return Joi.validate(req.body, schema);
    }
});



const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listeniing to port ${port}...`));