
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

exports.getVariables = function ($) {
    const variables = [];
    $('#variables').find('option').each(function () {
        const item = $(this);
        variables.push({
            id: item.val(),
            value: item.text()
        });
    });

    return variables;
};