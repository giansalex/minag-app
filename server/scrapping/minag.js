
exports.parse = function ($) {
    const result = [];

    $('tr.contenido').each(function () {
        const item = $(this);
        const cells = [];

        item.find('td').each(function () {
            const cell = $(this);
            if (cell.attr('rowspan')) {
                return;
            }

            cells.push(cell.text());
        });

        result.push({
            name: cells[0],
            max: cells[1],
            prom: cells[2],
            min: cells[3]
        });
    });

    return result;
};