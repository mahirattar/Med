const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Utilisateur = new Schema({
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
   collection: 'utilisateurs'
})

module.exports = mongoose.model('Utilisateur', Utilisateur)