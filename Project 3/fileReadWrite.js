const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', 'utf8', (err) => {
    if (err) throw err;
    console.log('welcome.txt created successfully.');
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data from hello.txt:');
    console.log(data);
});
