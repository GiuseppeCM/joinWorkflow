module.exports = {
    name: 'libro',
    label: 'Libro',
    pluralLabel: 'Libri',
    addFields: [
        {
            type: 'string',
            name: 'description',
            label: 'Descrizione'
        },
        {
            name: '_biblioteche',
            type: 'joinByArrayReverse',
            withType: 'biblioteca',
            reverseOf: '_libri',
        }
    ]
};