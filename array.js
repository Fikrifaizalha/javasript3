// Array merupakan tipe data yang dapat mengelompokkan lebih
// dari satu nilai dan menempatkannya dalam satu variabel. Contoh:

// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray);

/* Output:
["Cokelat", 42.5, 22, true, "Programming"]
*/

// jika kita berusaha mengakses index di luar ukuran array-nya? Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined.
//  Index terakhir array selalu jumlah nilai array - 1.

// let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

//  Untuk menambahkan data ke dalam array, kita bisa menggunakan metode push().
//  Fungsi push ini akan menambahkan data di akhir array.

// const myArray = ["Coklat", 42.5, 22, true, "Programming"];

// myArray.push("JavaScript");
// console.log(myArray);

/* Output:
['Coklat', 42.5, 22, true, 'Programming', 'JavaScript']
 */

//  untuk mengeluarkan data atau elemen terakhir dari array,
// kita bisa gunakan metode pop().

// const myArray = ["Orange", 42.5, 22, true, "Programming"];

// myArray.pop();
// console.log(myArray);

/* Output:
['Orange', 42.5, 22, true]
*/

// untuk memanipulasi data pada array adalah shift() dan unshift().
// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array,
// sementara unshift() digunakan untuk menambahkan elemen di awal array.

// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// myArray.shift();
// myArray.unshift("Apple");

// console.log(myArray);

/* Output:
['Apple', 42.5, 22, true, 'Programming']
*/

//  jika kita ingin menghapus data dari array?
//  Sama seperti object, kita bisa menggunakan keyword delete.

// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// delete myArray[1];
// console.log(myArray);

/* output
['Cokelat', <1 empty item>, 22, true, 'Programming']
*/

// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data
// pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
// Untuk menghapus elemen, gunakan metode splice() seperti ini:

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1); // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output:
['Cokelat', 42.5, true, 'Programming']
*/
