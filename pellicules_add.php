<?php
  //dades de connexió
  $servidor = "ce2022010111001.dnssw.net";
  $usuari = "filmoteca";
  $contrasenya = "Cecot2022Albert()";
  $basededades = "filmoteca";
  $taula = "pellicules";
  //si no s'ha passat pel formulari
  if ($_POST == null){
    header("Location: index.html");
    die();
  }
  //simplifiquem variables S'han de sanititzar les dades!!!!
  $titol = $_POST["titol"];
  $director = $_POST["director"];
  $any = $_POST["any"];
  $pais = $_POST["pais"];
  $animacio = $_POST["animacio"];
  $dona = $_POST["dona"];
  $comedia = $_POST["comedia"];
  $puntuacio = $_POST["puntuacio"];
  //consulta
  //INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);
  $sql = "INSERT INTO $taula (titol, director, any, pais, animacio, dona, comedia, puntuacio) VALUES ('$titol', '$director', '$any', '$pais', '$animacio', '$dona', '$comedia', '$puntuacio')";
  $sql_id = "SELECT * FROM $taula ORDER BY id DESC LIMIT 1"; //per saber el nom de la imatge
  //fem la connexió
  $conn = new mysqli($servidor, $usuari, $contrasenya, $basededades);
  // comprovem la connexió
  if ($conn->connect_error) {
    return "Fallada en la connexió: ".$conn->connect_error;
    die();
  }
  //executem_consulta
  if ($conn->query($sql) === TRUE) {
    echo "Ok!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $resultat_id_nova = $conn->query($sql_id); //executem consulta per saber la ID que acabem d'afegir
  if ($resultat_id_nova->num_rows > 0) { //comprovem que el resultat no és 0
    while($fila = $resultat_id_nova->fetch_assoc()) {
      $img = $fila["id"]; //passem la puntuació 5 punts
    }
  }
  //pugem la imatge
  //dades de l'arxiu
  $ruta_desti = "img/covers/$img.jpg";
  $tipus_arxiu = $_FILES['imatge']['type'];
  $tamany_arxiu = $_FILES['imatge']['size'];
  $tamany_max = 5242880;
  $ruta_temporal = $_FILES['imatge']['tmp_name'];
  //comprovo características

  if($tipus_arxiu != "") { //si s'ha escollit imatge per pujar...
    if (!(strpos($tipus_arxiu, "jpeg")) || ($tamany_arxiu > $tamany_max)) {
      echo "Extensió o tamany de la imatge incorrecte";
      header( "Refresh:5; url=index.html", true, 303);
    }else{
        if (move_uploaded_file($ruta_temporal, $ruta_desti)){
            echo "L'arxiu s'ha carregat correctament.";
            header("Location: index.html");
            die();
        }else{
            echo "Error fatal al pujar l'arxiu.";
        }
    }
  }else{ //no s'ha escollit imatge... tornem al index
    header("Location: index.html");
  }
  

$conn->close(); //tanquem la connexió amb la base de dades
?>