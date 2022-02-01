import { styleBody, addTitle, contact } from "./dom";
//for default exports, {} are not required, even the name of the import can be different
import users, { getPremiumUsers } from "./data";

const premUsers = getPremiumUsers(users);
styleBody();
addTitle("hello");
console.log(users);
console.log(premUsers);
