/*
   Warning: mongoose mpromise is deprecated, plugin your own promise
   library
   How to solve this
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var employeeSchema = new Schema({
  name: {
    last: {type:String, required:true},
    first: {type:String, required:true},
    middle: {type:String, required:false}
  },
  contacts: {
    email: [
      { 
        address: {type:String, required:false}
      }
    ],
    phone: [
      {
        number: {type:String, required:false}
      }
    ]
  }
});

var Employee = mongoose.model('Employee', employeeSchema);

mongoose.connect('mongodb://localhost/crm2'); //<1>


var empObj = new Employee({
  name: {
    last: 'Doe',
    first: 'John'
  },
  contacts: {
    email: {
      address: 'johndoe@gmail.com'
    },
    phone: {
      number: '12345'
    }
  }
    
});


empObj.save();


