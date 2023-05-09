// 12. Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
var now = new Date();
var dateString1 =
  now.getFullYear() +
  "-" +
  (now.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  now.getDate().toString().padStart(2, "0") +
  " " +
  now.toLocaleTimeString(); // 2023-02-10 12:11:14 AM

// DD-MM-YYYY HH:mm
var now = new Date();
var dateString2 =
  now.getDate().toString().padStart(2, "0") +
  "-" +
  (now.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  now.getFullYear() +
  " " +
  now.toLocaleTimeString(); // 10-02-2023 12:12:20 AM

// DD/MM/YYYY HH:mm
var now = new Date();
var dateString3 =
  now.getDate().toString().padStart(2, "0") +
  "/" +
  (now.getMonth() + 1).toString().padStart(2, "0") +
  "/" +
  now.getFullYear() +
  " " +
  now.toLocaleTimeString(); //10/02/2023 12:12:39 AM
