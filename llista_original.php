<?php
  //dades de connexió
  $servidor = "ce2022010111001.dnssw.net";
  $usuari = "filmoteca";
  $contrasenya = "Cecot2022Albert()";
  $basededades = "filmoteca";
  $taula = "pellicules";

  $sql = "(SELECT * FROM pellicules ORDER BY RAND())"; //consulta

  //fem la connexió
  $conn = new mysqli($servidor, $usuari, $contrasenya, $basededades);

  // comprovem la connexió
  if ($conn->connect_error) {
    return "Fallada en la connexió: ".$conn->connect_error;
    die();
  }

  $resultat = $conn->query($sql); //executem la consulta
  $json_results = ""; //cadena que construirem com un json
  $result_array = []; //resultat en array

  if ($resultat->num_rows > 0) { //comprovem que el resultat no és 0
    for ($n=0; $n<$resultat->num_rows; $n++) { //per cada resultat...
      array_push($result_array, $resultat->fetch_assoc()); //anem afegint cada fila a un array
    }
  }

  for ($n = 0; $n< count($result_array); $n++) {
    if(file_exists("img/covers/".$result_array[$n]["id"].".jpg")){ //si l'arxiu existeix
        $result_array[$n] += array("image" => $result_array[$n]["id"]); //creem un valor imatge amb la id
    }else { //si no, posem la imatge 0 (no image)
        $result_array[$n] += array("image" => "0");
    }
  }

  $json_results = json_encode($result_array); //el codifiquem en json
  $conn->close(); //tanquem la connexió amb la base de dades
  echo $json_results; //l'imprimim
?>
