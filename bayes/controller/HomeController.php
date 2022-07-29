<?php

//header("Location:?controller=Login&action=show");
require_once 'view/View.php';
require_once 'model/HomeModel.php';

class HomeController {

    public function __construct() {
        $this->view = new View();
        $this->model = new HomeModel();
    }

    /** 
     * Las funciones que inician con show
     * muestran las vistas de la página web
     */
    public function show() {
        $this->view->show("HomeView.php", null);
    }

    public function showEstiloAprendizaje() {
        $this->view->show("EstiloAView.php", null);
    }

    public function showRecinto() {
        $this->view->show("RecintoView.php", null);
    }

    public function showS() {
        $this->view->show("SexoView.php", null);
    }

    public function showEstiloAprendizaje2() {
        $this->view->show("EstiloA2View.php", null);
    }

    public function showTipoProfesor() {
        $this->view->show("TipoProfesor.php", null);
    }

    public function showClassRedes() {
        $this->view->show("ClassRedes.php", null);
    }

    /** 
     * Obtiene los datos para el algoritmo de euclides
     * sobre tipos de aprendizaje
     */
    public function getData() {
        echo json_encode($this->model->getRegistros());
    }

    /**
     * Obtiene los datos para el segundo ejercicio
     */
    public function getDataEj2() {
        echo json_encode($this->model->getRegistrosEje2());
    }

    public function getDataEj5() {
        echo json_encode($this->model->getDataEj5());
    }

    public function getDataEj6() {
        echo json_encode($this->model->getDataEj6());
    }

    /**
     * Obtiene los datos sobre el profesor
     */
    public function getDataProfesor() {
        echo json_encode($this->model->getDataProfesor());
    }

    /**
     * Obtiene los datos sobre las redes
     */
    public function getDataRedes() {
        echo json_encode($this->model->getDataRedes());
    }

    /**
     * Inserta un dato en la bd, ya no es necesario
     */
    public function insertDataEj2() {
        echo $this->model->insertarEje2($_POST['data']);
    }

    /** Funciones para insertar las probabilidades */
    public function insertDataProbE1() {
        $this->model->insertDataProbE1();
    }

    public function insertDataProbE2() {
        $this->model->insertDataProbE2();
    }

    public function insertDataProbE3() {
        $this->model->insertDataProbE3();
    }

    public function insertDataProbE4() {
        $this->model->insertDataProbE4();
    }

    public function insertDataProbE5() {
        $this->model->insertDataProbE5();
    }

    public function insertDataProbE6() {
        $this->model->insertDataProbE6();
    }

    /* Funciones para obtener las probabilidades */
    public function getProbRowEj1(){
        echo json_encode($this->model->getProbRowEj1());
    }

    public function getProbRowEj2(){
        echo json_encode($this->model->getProbRowEj2());
    }

    public function getProbRowEj3(){
        echo json_encode($this->model->getProbRowEj3());
    }

    public function getProbRowEj4(){
        echo json_encode($this->model->getProbRowEj4());
    }

    public function getProbRowEj5(){
        echo json_encode($this->model->getProbRowEj5());
    }

    public function getProbRowEj6(){
        echo json_encode($this->model->getProbRowEj6());
    }

    /* Inserta las frecuencias */
    public function insertarFreqE1(){
        echo json_encode($this->model->insertarFreqE1());
    }
    
    public function insertarFreqE2(){
        echo json_encode($this->model->insertarFreqE2());
    }

    public function insertarFreqE3(){
        echo json_encode($this->model->insertarFreqE3());
    }

    public function insertarFreqE4(){
        echo json_encode($this->model->insertarFreqE4());
    }

    public function insertarFreqE5(){
        echo json_encode($this->model->insertarFreqE5());
    }

    public function insertarFreqE6(){
        echo json_encode($this->model->insertarFreqE6());
    }
}
