const express =  require('express')
const app = express()
const { usersData } = require('./Users.js')
const user =  require('./router/user.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', user)


app.listen(3000,() => {
    console.log('listening on 3000...');
})
