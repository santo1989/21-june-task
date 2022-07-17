<?php

//function.php

$connect = new PDO("mysql:host=localhost; dbname=jsassignment", "root", "");

function fetch_top_five_data($connect)
{
	$query = "
	SELECT * FROM employee 
	ORDER BY id DESC 
	LIMIT 5
	";

	$result = $connect->query($query);

	$output = '';

	foreach ($result as $row) {
		$output .= '
		<tr>
			<td>' . $row["name"] . '</td>
			<td>' . $row["company"] . '</td>
			<td>' . $row["city"] . '</td>
			<td>' . $row["salary"] . '</td>
			<td>' . $row["account"] . '</td>
		</tr>
		';
	}

	return $output;
}

function count_all_data($connect)
{
	$query = "SELECT * FROM employee";

	$statement = $connect->prepare($query);

	$statement->execute();

	return $statement->rowCount();
}
