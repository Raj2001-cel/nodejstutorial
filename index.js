const express =  require('express')
const app = express()
const { usersData } = require('./Users.js')



app.get('/api/getallusers', (req, res) => {
    // res.end('Welcome to the home page');
    console.log(usersData);
    res.json(usersData);
});


app.get('/api/getuser/:id', (req, res) => {
    const id  =  req.params.id;
    console.log(id);
    const user = usersData.find((user) => user.id == id);
    res.json(user);
});


app.listen(3000,() => {
    console.log('listening on 3000...');
})
