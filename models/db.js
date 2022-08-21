const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/StudentDB', 
    // {
    //     urlNewUrlParser: true
    // },  Again commented out as per solution given on https://stackoverflow.com/questions/68416009/mongoparseerror-options-poolsize-usenewurlparse-are-not-supported
    (err) => {
        if(!err){
            console.log('Connection succeded');
        } else {
            console.log('Error in connection' + err);
        }
    }   
);

require('./student.model');