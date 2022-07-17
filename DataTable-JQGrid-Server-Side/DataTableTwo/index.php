<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DataTables from Database</title>

	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel='stylesheet' type='text/css'>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
	<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">	
	<!-- DataTables CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/css/jquery.dataTables.min.css" />

		<style>
		table.dataTable tr.odd {
			background-color: #ace0e0;
		}

		.sorting {
			text-align: left;
		}

		table.dataTable tr.even td.sorting_1 {
			background-color: #ffffff;
		}

		table.dataTable.hover tbody tr:hover,
		table.dataTable.display tbody tr:hover {
			background-color: #ace0e0;
		}

		td {
			text-transform: uppercase;
		}
	</style>

</head>

<body>
	
<header class="bg-blue-500">
	<div class="container mx-auto flex items-center justify-between flex-wrap p-4">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a href="#" class="text-white no-underline hover:no-underline font-semibold text-xl">
				<span class="text-2xl">DataTables</span>
			</a>
		</div>
	</div>
</header>






	<table id="table_list" class="dataTable" width="100%" cellspacing="0">
		<thead>
			<tr>
				<th>S.No.</th>
				<th>Country</th>
				<th>ISO Alpha-2 Code </th>
				<th>ISO Alpha-3 Code </th>
			</tr>
		</thead>

	</table>


	<!-- Jquery Core Js -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


	<!-- DataTables -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js"></script>
	<script>
		$(document).ready(function(e) {
			$('#table_list').dataTable({
				"bProcessing": true,
				"serverSide": true,
				"ajax": {
					url: "dataList.php",
					type: "POST",
					error: function(data) {
						alert("some error occured please try again.")

					}
				}
			});
		});
	</script>


	<footer class="text-gray-700 body-font">
		<div class="container px-5 py-24 mx-auto flex items-center sm:flex-row flex-col">
			
		</div>
	</footer>



</body>

</html>