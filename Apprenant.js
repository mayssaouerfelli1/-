const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApprenantSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    statut: {
        type: String,
        required: true,
    },
    niveau: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    dateNaiss: {
        type: Date,
        default: Date.now,
        required: true,
    },
    etat: {
        type: String, // Ou le type approprié pour représenter l'état
        required: true,
    },
    ressourcesAchete: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ressource'
        }
    ],
    quizzesEssayes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz'
        }
    ],
    
});

const Apprenant = mongoose.model('Apprenant', ApprenantSchema);
module.exports = Apprenant;
