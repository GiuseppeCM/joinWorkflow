module.exports = {
    name: 'biblioteca',
    label: 'Biblioteca',
    pluralLabel: 'Biblioteche',
    addFields: [
        {
            type: 'string',
            name: 'description',
            label: 'Descrizione'
        },
        {
            type: 'joinByArray',
            name: '_libri',
            withType: ['libro','cd'],
        }
    ]
};