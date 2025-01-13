const _ = require("lodash");
const ListOfNotes = [13, 24, 54, 675, 76];
const ClearList = _.without(ListOfNotes, 675);
console.log(ClearList);
