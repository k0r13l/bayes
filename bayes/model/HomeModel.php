<?php

require_once 'lib/SPDO.php';
require_once 'lib/Config.php';

class HomeModel {

    public function __construct() {
        $this->db = SPDO::getInstance();
    }

    /**
     * Las funciones que inician con get llaman a un
     * procedimiento almacenado y devuelven la información
     */

    public function getRegistros() {
        $query = $this->db->prepare('call getDataEstilo()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getRegistrosEje2() {
        $query = $this->db->prepare('call getRegistrosEj2()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getDataEj5() {
        $query = $this->db->prepare('call getDataProfesor()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getDataEj6() {
        $query = $this->db->prepare('call getDataRedes()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    /**
     * Llama a un procedimiento almacenado para insertar datos
     * en la bd
     */
    public function insertarEje2($data) {
        $query = "call insertar_registro_e2(?,?,?,?,?,?,?,?)";
        $this->db->prepare($query)->execute([$data[0],$data[1],$data[2],$data[3],$data[4],$data[5],$data[6],$data[7]]);
        return "Insertado correcto";
    }

    public function getDataProfesor() {
        $query = $this->db->prepare('call getDataProfesores()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getDataRedes() {
        $query = $this->db->prepare('call getDataRedes()');
        $query->execute();
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    /** insertar probabilidades */
    public function insertDataProbE1(){
        $query = "call insertProbEj1(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    public function insertDataProbE2(){
        $query = "call insertProbEj2(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    public function insertDataProbE3(){
        $query = "call insertProbEj3(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    public function insertDataProbE4(){
        $query = "call insertProbEj4(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    public function insertDataProbE5(){
        $query = "call insertProbEj5(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    public function insertDataProbE6(){
        $query = "call insertProbEj6(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['probability']]);
    }

    /* obtener probabilidades */
    public function getProbRowEj1() {
        $query = $this->db->prepare('call getProbEj1(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getProbRowEj2() {
        $query = $this->db->prepare('call getProbEj2(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getProbRowEj3() {
        $query = $this->db->prepare('call getProbEj3(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getProbRowEj4() {
        $query = $this->db->prepare('call getProbEj4(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getProbRowEj5() {
        $query = $this->db->prepare('call getProbEj5(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function getProbRowEj6() {
        $query = $this->db->prepare('call getProbEj6(?,?,?)');
        $query->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue']]);
        $data = $query->fetchAll();
        $query->closeCursor();

        return $data;
    }

    public function insertarFreqE1() {
        $query = "call insert_freq_e1(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

    public function insertarFreqE2() {
        $query = "call insert_freq_e2(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

    public function insertarFreqE3() {
        $query = "call insert_freq_e3(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

    public function insertarFreqE4() {
        $query = "call insert_freq_e4(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

    public function insertarFreqE5() {
        $query = "call insert_freq_e5(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

    public function insertarFreqE6() {
        $query = "call insert_freq_e6(?,?,?,?)";
        $this->db->prepare($query)->execute([$_POST['class'],$_POST['attrName'],$_POST['attrValue'],$_POST['freq']]);
    }

}
