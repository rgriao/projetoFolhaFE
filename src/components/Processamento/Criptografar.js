const crypto = require('crypto');

// Defining algorithm
const algorithm = 'aes-256-cbc';

// Defining key
const key = crypto.randomBytes(32);

// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text) {

// Creating Cipheriv with its parameter
let cipher = crypto.createCipheriv(
	'aes-256-cbc', Buffer.from(key), iv);

// Updating text
let encrypted = cipher.update(text);

// Using concatenation
encrypted = Buffer.concat([encrypted, cipher.final()]);

// Returning iv and encrypted data
return { iv: iv.toString('hex'),
	encryptedData: encrypted.toString('hex') };
}

// Displays output
var output = encrypt("GeeksforGeeks");
console.log(output);

//Exemplo 2:  
// Defining algorithm
const algorithm1 = 'aes-192-cbc';

// Defining password
const password1 = 'bncaskdbvasbvlaslslasfhj';

// Defining key
const key1 = crypto.scryptSync(password1, 'GfG', 24);

// Defininf iv
const iv1 = Buffer.alloc(16, 0);

// Creating cipher
const cipher1 = crypto.createCipheriv(algorithm1, key1, iv1);

// Declaring encrypted
let encrypted1 = '';

// Reading data
cipher1.on('readable', () => {
let chunk1;
while (null !== (chunk1 = cipher1.read())) {
	encrypted1 += chunk1.toString('base64');
}
});

// Handling end event
cipher1.on('end', () => {
console.log(encrypted1);
});

// Writing data
cipher1.write('CS-Portal');
cipher1.end();
console.log("done");
