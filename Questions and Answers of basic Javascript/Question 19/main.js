// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

import { countries } from "./countries.js";
import { webTechnologies } from "./web_techs.js";

console.log(countries);
console.log(webTechnologies);

// step 1: npm init
// step 2: npm install esm
// step 3: add "type": "module" in package.json
