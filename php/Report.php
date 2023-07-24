<?php

		//Conexion con la base de datos
require_once ("conexion.php");

$sql= "SELECT te.ID_TEST,us.NICK,te.CEDULA,te.NOMBRE,te.GENERO,te.EDAD,te.OCUPACION,te.FECHA,re.dimension,re.subescala1,re.val1,re.subescala2,re.val2,re.total,re.categoria,re.pos FROM `usuario` as us INNER JOIN test as te on us.NICK = te.NICK INNER JOIN resultados as re on te.ID_TEST = re.id_test order by te.ID_TEST, re.pos";
$result = $db_connection->query($sql);

 $arr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = mysqli_fetch_assoc($result)) {
		$arr[] = $row; //cargo los valores en un array

	}
}

echo json_encode($arr);
$db_connection->close();


