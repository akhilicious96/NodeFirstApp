buf = new Buffer(26);
for(var i=0 ;i<26;i++)
    buf[i] = i + 97;
console.log('ASCII', buf.toString('ascii'));
console.log('UTF8', buf.toString('utf8'));
console.log('UTF16LE', buf.toString('utf16le'));
console.log('BASE64', buf.toString('base64'));
console.log('HEX', buf.toString('hex'));
console.log('UCS2', buf.toString('ucs2'));
console.log(buf.toString());
var a = buf.toString();
console.log(a);
console.log(buf.toJSON());

var buf1 = new Buffer('abcd');
var buf2 = new Buffer('defg');
//concat
var buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

//compare
var result = buf1.compare(buf2);
if(result < 0)
    console.log(`'${buf1}' buffer comes before '${buf2}' buffer`);
else if(result === 0)
    console.log(`'${buf1}' buffer is same as '${buf2}' buffer`);
else
    console.log(`'${buf1}' buffer comes after '${buf2}' buffer`);

//copy
var buf4 = new Buffer('abc');
var buf5 = new Buffer(3);
 buf4.copy(buf5);
 console.log(buf5.toString());

 //slice buffer
 var buf6 = new Buffer('abcdefghijkl');
 var buf7 = buf6.slice(0,5);
 console.log(buf7.toString());

 //length
 console.log(Buffer.byteLength(buf6));
 console.log(buf6.length);

 //Encoding 
 console.log(Buffer.isEncoding('hex'));