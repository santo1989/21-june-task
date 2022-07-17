
$(document).ready(function () {
  $('#demo').DataTable({
      ajax: {
          url: 'jsonFile/employee.json',
          dataSrc: '',
      },
      columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'company' },
          { data: 'city' },
          { data: 'salary' },
          { data: 'account' },
      ],
  });
});

