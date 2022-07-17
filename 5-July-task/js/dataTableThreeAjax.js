$(document).ready(function () {
  $('#demo').DataTable({
    ajax: {
      url: 'jsonFile/jsassignment.json',
      dataSrc: '',
    },
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'alpha_2' },
      { data: 'alpha_3' },
    ],
  })
})
