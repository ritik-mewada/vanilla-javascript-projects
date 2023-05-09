// 09. Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.

// First
if ("true value") {
  console.log("truthy value"); // ✅
} else {
  console.log("falsy value");
}

// Second
if ([]) {
  console.log("truthy value"); // ✅
} else {
  console.log("falsy value");
}

// Third
if (24) {
  console.log("truthy value"); // ✅
} else {
  console.log("falsy value");
}

// - Write three JavaScript statement example which provide falsy value.

// First
if (undefined) {
  console.log("truthy value");
} else {
  console.log("falsy value"); // ✅
}

// Second
if (null) {
  console.log("truthy value");
} else {
  console.log("falsy value"); // ✅
}

// third
if (0) {
  console.log("truthy value");
} else {
  console.log("falsy value"); // ✅
}
