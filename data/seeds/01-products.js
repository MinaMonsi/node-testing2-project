exports.seed = function(knex, Promise){
    return knex('products')
    .truncate()
    .then(function() {
        return knex('products').insert([
            {makeup_type: 'foundation', brand_name: 'Revlon'},
            {makeup_type: 'primer', brand_name: 'Elf'},
            {makeup_type: 'powder', brand_name: 'Maybelline'},
        ]);
    });
};