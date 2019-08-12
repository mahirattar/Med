const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   sexe: {
      type: String
   },
   poids: {
      type: Number
   },
   taille: {
      type: Number
   },
   phoneNumber: {
      type: Number
   }

}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)