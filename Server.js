var express = require('express');
var app = express();

app.use(express.json());

var customers = [
    {name:'akhil', number:'7021540643', balance:'25000'}
];

valid = false;

function validateNumber(num){
    console.log('inside validate function')
    for(var values of customers){
        if(values.number === num)
            return true;
    }
    return false;
}

app.get('/Add.html', (req, res)=>{
    res.sendFile(__dirname +'/'+'Add.html');
    console.log(__dirname);
})

app.post('/add_get', (req, res) => {  
    valid = validateNumber(req.body.number);
    console.log("number found - "+valid);
    if(!valid){       
        var customer={
                        name : req.body.name,
                        number : req.body.number,
                        balance : req.body.balance
        }
        customers.push(customer);
        res.send('Customer added successfully');
        console.log('Customer added');
        console.log(JSON.stringify(customers));

    }else{
        res.send('ERROR: Customer already added');
        console.log('ERROR: Customer already added');
    }
    res.end();
})

app.get('/View.html', (req, res) =>{
    res.sendFile(__dirname + '/'+'View.html');
    console.log(__dirname);
})

app.post('/view_get', (req, res) =>{
    console.log(customers);
    valid = validateNumber(req.body.number);
    console.log("number found - "+valid);
    if(!valid){
        res.send('ERROR: Number not found.');
        console.log('ERROR: Number not found.');
    }else{
        for(var values of customers){
            if(values.number === req.body.number){
                res.send("\nName : "+values.name+"\nNumber : "+values.number+"\nBalance : "+values.balance);
                res.end();
                console.log("\nName : "+values.name+"\nNumber : "+values.number+"\nBalance : "+values.balance);
            }
        }
    }
})

app.get('/Update.html', (req, res) =>{
    res.sendFile(__dirname + '/'+'View.html');
    console.log(__dirname);
})

app.post('/update_get', (req, res)=>{
   
    for(var values of customers){
        
        if(values.number === req.body.number){
            values.name = req.body.name;
            values.balance = req.body.balance;
            console.log('printing details');
            res.send("\nName : "+values.name+"\nNumber : "+values.number+"\nBalance : "+values.balance);
            
            break;
        }
    }
    res.end();
})

app.get('/Remove.html', (req, res) =>{
    res.sendFile(__dirname + '/'+'View.html');
    console.log(__dirname);
})

app.post('/delete_get', (req, res)=>{
    const numToRemove = req.body.number;
    const filtered = customers.filter((p) => p.number !== numToRemove);
    customers = filtered;
    res.send('Customer removed');
    console.log(customers);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}...`));