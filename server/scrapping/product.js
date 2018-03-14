exports.list = function ($) {
    const products = [];
    $('input').each(function () {
        const item = $(this);
        products.push({
            id: item.val(),
            value: item.parent('label').text()
        });
    });

    return products;
};