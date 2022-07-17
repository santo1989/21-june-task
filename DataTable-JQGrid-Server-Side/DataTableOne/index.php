<?php

include('function.php');

?>

<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <link rel="stylesheet" type="text/css" href="library/jstable.css" />

        <script src="library/jstable.min.js" type="text/javascript"></script>


        <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" /> -->
      

        <!-- <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" type="text/javascript"></script> -->

        <!-- <script src="https://code.jquery.com/jquery-3.5.1.js" type="text/javascript"></script> -->

        <title>DataTables-1 JS Assignment-6</title>
    </head>
    <body>

        <div class="container">
            <h1 class="mt-5 mb-5 text-center text-success"><b>JavaScript DataTables One</b></h1>

            <div class="card">
                <div class="card-header">JavaScript DataTables</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php echo fetch_top_five_data($connect); ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>

<script>

new JSTable('#mytable', {
    serverSide:true,
    deferLoading : <?php echo count_all_data($connect); ?>,
    ajax : 'fetch.php'
});

</script>