const guestString = `Our Guests are: Arafat, Aquib, Rahman, Sania, Mehtab`;
//! 1. get total length of the given string
const totalLength = guestString.length;
console.log(totalLength); //52

//! 2 . convert the string into uppercase
const upperStringGuests = guestString.toUpperCase();
console.log(upperStringGuests); // OUR GUESTS ARE: ARAFAT, AQUIB, RAHMAN, SANIA, MEHTAB

//! 3. check Rahman is present in uppercase string list
const isRahmen = upperStringGuests.includes("RAHMAN");
console.log(isRahmen); //true

//! 4. substring the GuestList names
const substringGuests = upperStringGuests.slice(16);
console.log(substringGuests); //ARAFAT, AQUIB, RAHMAN, SANIA, MEHTA

//! 5. convert the substring into the array
const arrayGuestsName = substringGuests.split(",");
console.log(arrayGuestsName); //[ 'ARAFAT', ' AQUIB', ' RAHMAN', ' SANIA', ' MEHTAB' ]
