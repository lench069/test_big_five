<?php

        //Conexion con la base de datos

        require_once ("conexion.php");
        $id_test = $_GET['id_test'];
        $dimension = $_GET['dimension'];
        $subescala1 = $_GET['subescala1'];
        $val1 = $_GET['val1'];
        $subescala2 = $_GET['subescala2'];
        $val2 = $_GET['val2'];
        $total = $_GET['total'];
        $categoria = $_GET['categoria'];
        $texto = $_GET['texto'];





        $insertar_valores = "INSERT INTO `resultados`( `id_test`, `dimension`, `subescala1`,
        `val1`, `subescala2`, `val2`, `total`, `categoria`, `texto`) VALUES ($id_test,'$dimension','$subescala1' ,$val1 ,'$subescala2' ,$val2 ,$total ,'$categoria' ,'$texto')";

        echo $insertar_valores ;

        $retry_value = $db_connection->query($insertar_valores);
        $array = array();

           if ($retry_value) {

               $array = array(
                "resp" => "true"

                );

               //lo que se envia de respuesta al ajax de javascript

           }else
           {
                $array = array(
                    "resp" => "false");
            }

           echo $json_response = json_encode($array);



?>
