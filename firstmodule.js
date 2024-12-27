const fs = require('fs');
fs.writeFile('moduleSecond.mjs', 'utf-8', (err, data) =>{
    console.log(err,data);
});