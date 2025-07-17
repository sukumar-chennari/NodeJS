const buffer = new Buffer.from('Sukumar')
console.log(buffer.toString('utf-8')); // Output: Sukumar
console.log(buffer.toString('base64')); // Output: U3VrdW1hcg==
console.log(buffer.toString('hex')); // Output: 53756b756d6172
console.log(buffer.toString('ascii')); // Output: Sukumar
console.log(buffer.toString('latin1')); // Output: Sukumar
console.log(buffer.toString('binary')); // Output: Sukumar
console.log(buffer.toString('ucs2')); // Output: Sukumar 畓畫慭
console.log(buffer.toString('utf16le')); // Output: Sukumar  畓畫慭

buffer.write('COde');
console.log(buffer.toString()); // Output: Sukumar
console.log(buffer)
console.log(buffer.toJSON()); // Output: 7