
exports.list = function ($) {
    const mercados = [];
    $('#mercado').find('option').each(function () {
        const item = $(this);
        mercados.push({
            id: item.val(),
            value: item.text()
        });
    });

    return mercados;
};