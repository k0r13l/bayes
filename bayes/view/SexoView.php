<?php
require_once 'public/header.php';
?>

<div class="row">
    <div class="col-md-12">
        <div class="bodyContainer">
            <div class="card" style="width: 30rem;">
                <div class="card-body">
                    <h5 class="card-title">Ingrese su información</h5>
                    <form name ="adivinarSexo" action="">
                        <div class="form-group">
                            <label for="selectEstilosA">Estilo de aprendizaje</label>
                            <br />
                            <select class="custom-select" id="selectEstilosA" name="selectEstilosA">
                                <option value="Acomodador">Acomodador</option>
                                <option value="Asimilador">Asimilador</option>
                                <option value="Convergente">Convergente</option>
                                <option value="Divergente">Divergente</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inputPromedioM">Promedio</label>
                            <br />
                            <input type="text" class="form-control" id="inputPromedioM" placeholder="Promedio de matrícula">
                        </div>
                        <div class="form-group">
                            <label for="selectRecinto">Recinto</label>
                            <br />
                            <select class="custom-select" id="selectRecinto" name="selectRecinto">
                                <option value="Turrialba">Turrialba</option>
                                <option value="Paraiso">Paraiso</option>
                            </select>
                        </div>
                        <input class="btn btn-primary" value="CALCULAR" onclick="calcularSexo()" type="button">
                        <div class="divCargando" id="divCargando">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
require_once 'public/footer.php';
?>