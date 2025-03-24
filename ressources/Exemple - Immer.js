demoState = {
    vip: {
        firstname: 'Della',
        lastname: 'Duck',
        hobbies: [
            {
                name: 'Aller dans l\'espace',
                isFav: true,
            },
            {
                name: 'Pecher',
                isFav: false
            },
            {
                name: 'Dev une app Web',
                isFav: false
            },
        ]
    },
    guests: [
        { firstname: 'Riri', lastname: 'Duck' },
        { firstname: 'Balthazar', lastname: 'Picsou' }
    ]
};


// Dans le reducer : Ajouter un hobbie
// ↓ Syntaxe classique
{
    ...state,
    vip: {
        ...state.vip,
        hobbies: [
            ...state.vip.hobbies,
            {
                name: 'Faire le jardin',
                isFav: false
            }
        ]
    }
}

// ↓ Via Immmer (Intégré dans le toolkit de redux)
state.vip.hobbies.push( {
    name: 'Faire le jardin',
    isFav: false
})