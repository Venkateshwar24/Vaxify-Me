const express = require('express');
const app = express();

var userController=require('./controller/userController');
const cors=require('cors');
const bodyParser=require('body-parser');
const {mongoose}=require('./db');
var gmailController=require('./controller/gmail');

app.use(bodyParser.json());
app.use(cors({origin :'http://localhost:4200'}));
app.use('/users',userController);


gmailController.gmail();

app.listen(3000, () => {
  console.log(`Server running on port 3000!`);
});
