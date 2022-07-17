<?php
// DB table to use
$table = 'worldcountryList';

// Table's primary key
$primaryKey = 'id';

// An array of columns from the database that should be read and returned to DataTables.  
// The 'db' parameter is the database column name, and the 'dt parameter the DataTables column ID.  
// In this example, object parameter names
$columns = array(
	array('db' => 'id', 'dt' => 0),
	array('db' => 'name', 'dt' => 1),
	array('db' => 'alpha_2',  'dt' => 2),
	array('db' => 'alpha_3',   'dt' => 3)
);

// SQL server connection information
$sql_details = array(
	'user' => 'root',
	'pass' => '',
	'db'   => 'jsassignment',
	'host' => 'localhost'
);

// Helper functions for building a DataTables server-side processing SQL query
require('ssp.class.php');

echo json_encode(
	SSP::simple($_POST, $sql_details, $table, $primaryKey, $columns)
);
