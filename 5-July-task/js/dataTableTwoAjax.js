$(document).ready(function () {
    $('#demo').DataTable({
        ajax: {
            url: 'jsonFile/mytable.json',
            dataSrc: '',
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'phone' },
            { data: 'email' },
            { data: 'salary' },
            { data: 'country' },
        ],
    });
});