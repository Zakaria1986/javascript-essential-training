/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./book.js";


const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

//  title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const lastSatndingBook = new Book(
  "Book of ages last valum",
  "Zak", 
  124324,
  "2012",
  90, 
  90,
"Finish"
  );

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPad:", everydayPack.backpackAge());

console.log("This book is the last book in the world ", lastSatndingBook);
//console.log("Current page: ", lastSatndingBook.updateCurrentPage(30));
//console.log("readStatus ", lastSatndingBook.updateReadStatus(80));
