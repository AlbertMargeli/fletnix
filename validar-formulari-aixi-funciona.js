function check_titol(){

	var titol = document.getElementById("titol").value.length;
	if (titol == 0) {
		document.getElementById("titol").placeholder = "Has de posar un títol";}
	else {return true;}}

function check_director(){

	var director = document.getElementById("director").value.length;
	if (director == 0) {
		document.getElementById("director").placeholder = "Has de posar un director";}
	else {return true;}}

function check_pais(){

	var pais = document.getElementById("pais").value.length;
	if (pais == 0) {
		document.getElementById("pais").placeholder = "Has de posar un pais";}
	else {return true;}}

function check_any(){

	var any = document.getElementById("any").value.length;
	if (any == 0) {
		document.getElementById("any").placeholder = "Any???";}
	else {return true;}}

function check_animacio() {

	if(document.getElementById('animacio-s').checked==true || document.getElementById('animacio-n').checked==true) {
		return true;}}

function check_dona() {

    if(document.getElementById('dona-s').checked==true || document.getElementById('dona-n').checked==true) {
        return true;}}

function check_comedia() {

    if(document.getElementById('comedia-s').checked==true || document.getElementById('comedia-n').checked==true) {
        return true;}}

function check_puntuacio(){

    var puntuacio = document.getElementById("puntuacio").value.length;
    if (puntuacio == 0) {
        document.getElementById("puntuacio").placeholder = "????";}
    else {return true;}}

function valida_form(){ 
	if (check_titol() && check_director() && check_pais() && check_any() && check_animacio() && check_dona() && check_comedia() && check_puntuacio()){
		return true;}
    else{
        check_titol();
		check_director();
		check_pais();
		check_any();
		check_animacio();
		check_dona();
		check_comedia();
		check_puntuacio();
		return false;
        
        }}
