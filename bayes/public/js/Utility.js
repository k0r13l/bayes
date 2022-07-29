function procesar(clases, atributos, bayes, etiqueta, metodoGuardar) {
    let ret = [];
    clases.forEach(function(clase) {
        atributos.forEach(function(atributoItem) {
            bayes.contarNC(atributoItem.class, etiqueta, atributoItem.value, clase);
            bayes.contarClases(etiqueta, clase);
            console.log(clase + ' | ' + atributoItem.class + ' | ' + atributoItem.value + ' | ' + bayes.nc);
            /*ret.push({
                class: clase,
                attrName: atributoItem.class,
                attrValue: atributoItem.value,
                freq: bayes.nc
            });*/
            ret.push({
                class: clase,
                attrName: atributoItem.class,
                attrValue: atributoItem.value,
                probability: bayes.calcular()
            });
        });
    });
    //console.log(ret);
    //guardar(ret, metodoGuardar);
    //guardarFreq(ret, metodoGuardar);
}

function guardarFreq(lista, metodoGuardar) {
    lista.forEach(function(row) {
        let param = {
            "class": row.class,
            "attrName": row.attrName,
            "attrValue": row.attrValue,
            "freq": row.freq
        };
        $.ajax({
            data: param,
            url: '?controller=Home&action=' + metodoGuardar,
            type: 'post',
            success: function(response) {}
        });
    });
}

function guardar(lista, metodoGuardar) {
    lista.forEach(function(row) {
        let param = {
            "class": row.class,
            "attrName": row.attrName,
            "attrValue": row.attrValue,
            "probability": row.probability
        };
        $.ajax({
            data: param,
            url: '?controller=Home&action=' + metodoGuardar,
            type: 'post',
            success: function(response) {}
        });
    });
}

/* Calcula la probabilidad de todas las variables del primer formulario */
function calcularEjercicio1() {
    $.ajax({
        url: '?controller=Home&action=getData',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);

            let attrs = [];
            /* Genera un vector con las clases o estilos sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.estilo);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });


            /* Genera un vector con los recintos sin repetir */
            let rRecinto = [];
            data.forEach(function(element) {
                rRecinto.push(element.recinto);
            });

            let resultRecinto = rRecinto.filter((item, index) => {
                return rRecinto.indexOf(item) === index;
            });
            /*
            resultRecinto.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'recinto' }));
            });
            */
            /* Genera un vector con los ec sin repetir */
            let rEC = [];
            data.forEach(function(element) {
                rEC.push(element.ec);
            });

            let resultEC = rEC.filter((item, index) => {
                return rEC.indexOf(item) === index;
            });

            resultEC.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'ec' }));
            });

            /* Genera un vector con los or sin repetir */
            let rOR = [];
            data.forEach(function(element) {
                rOR.push(element.ort);
            });

            let resultOR = rOR.filter((item, index) => {
                return rOR.indexOf(item) === index;
            });

            resultOR.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'ort' }));
            });

            /* Genera un vector con los ca sin repetir */
            let rCA = [];
            data.forEach(function(element) {
                rCA.push(element.ca);
            });

            let resultCA = rCA.filter((item, index) => {
                return rCA.indexOf(item) === index;
            });

            resultCA.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'ca' }));
            });

            /* Genera un vector con los ea sin repetir */
            let rEA = [];
            data.forEach(function(element) {
                rEA.push(element.ea);
            });

            let resultEA = rEA.filter((item, index) => {
                return rEA.indexOf(item) === index;
            });

            resultEA.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'ea' }));
            });

            let bayes = new Bayes(data);

            //procesar(resultClass, attrs, bayes, 'estilo', 'insertDataProbE1');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE1');
        }
    });
}

function calcularEjercicio2() {
    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let attrs = [];

            /* Genera un vector con los recintos sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.recinto);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });

            /***************************************/
            let rEstilo = [];
            data.forEach(function(element) {
                rEstilo.push(element.estilo);
            });

            let resultEstilo = rEstilo.filter((item, index) => {
                return rEstilo.indexOf(item) === index;
            });

            resultEstilo.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'estilo' }));
            });

            /***************************************/
            let rPromedio = [];
            data.forEach(function(element) {
                rPromedio.push(element.promedio);
            });

            let resultPromedio = rPromedio.filter((item, index) => {
                return rPromedio.indexOf(item) === index;
            });

            resultPromedio.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'promedio' }));
            });

            /***************************************/
            let rSexo = [];
            data.forEach(function(element) {
                rSexo.push(element.sexo);
            });

            let resultSexo = rSexo.filter((item, index) => {
                return rSexo.indexOf(item) === index;
            });

            resultSexo.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'sexo' }));
            });

            let bayes = new Bayes(data);

            /* El último parámetro es el método del controlador para guardar la info */
            // procesar(resultClass, attrs, bayes, 'recinto', 'insertDataProbE2');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE2');
        }
    });
}


/** 
 * Revisar de acá para abajo, también faltan los procesos almacenados e insertar
 * frecuencias en la bd
 */

function calcularEjercicio3() {
    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let attrs = [];

            /* Genera un vector con los sexos sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.sexo);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });

            /***************************************/
            let rEstilo = [];
            data.forEach(function(element) {
                rEstilo.push(element.estilo);
            });

            let resultEstilo = rEstilo.filter((item, index) => {
                return rEstilo.indexOf(item) === index;
            });

            resultEstilo.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'estilo' }));
            });

            /***************************************/
            let rPromedio = [];
            data.forEach(function(element) {
                rPromedio.push(element.promedio);
            });

            let resultPromedio = rPromedio.filter((item, index) => {
                return rPromedio.indexOf(item) === index;
            });

            resultPromedio.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'promedio' }));
            });

            /***************************************/
            let rRecinto = [];
            data.forEach(function(element) {
                rRecinto.push(element.recinto);
            });

            let resultRecinto = rRecinto.filter((item, index) => {
                return rRecinto.indexOf(item) === index;
            });

            resultRecinto.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'recinto' }));
            });

            let bayes = new Bayes(data);

            /* El último parámetro es el método del controlador para guardar la info */
            //procesar(resultClass, attrs, bayes, 'sexo', 'insertDataProbE3');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE3');
        }
    });
}

function calcularEjercicio4() {
    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let attrs = [];

            /* Genera un vector con los recintos sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.estilo);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });

            /***************************************/
            let rSexo = [];
            data.forEach(function(element) {
                rSexo.push(element.sexo);
            });

            let resultSexo = rSexo.filter((item, index) => {
                return rSexo.indexOf(item) === index;
            });

            resultSexo.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'sexo' }));
            });

            /***************************************/
            let rPromedio = [];
            data.forEach(function(element) {
                rPromedio.push(element.promedio);
            });

            let resultPromedio = rPromedio.filter((item, index) => {
                return rPromedio.indexOf(item) === index;
            });

            resultPromedio.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'promedio' }));
            });

            /***************************************/
            let rRecinto = [];
            data.forEach(function(element) {
                rRecinto.push(element.recinto);
            });

            let resultRecinto = rRecinto.filter((item, index) => {
                return rRecinto.indexOf(item) === index;
            });

            resultRecinto.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'recinto' }));
            });

            let bayes = new Bayes(data);

            /* El último parámetro es el método del controlador para guardar la info */
            //procesar(resultClass, attrs, bayes, 'estilo', 'insertDataProbE4');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE4');
        }
    });
}

function calcularEjercicio5() {
    $.ajax({
        url: '?controller=Home&action=getDataEj5',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let attrs = [];

            /* Genera un vector con las clases sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.CLASS);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });

            /***************************************/
            let rA = [];
            data.forEach(function(element) {
                rA.push(element.A);
            });

            let resultA = rA.filter((item, index) => {
                return rA.indexOf(item) === index;
            });

            resultA.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'A' }));
            });

            /***************************************/
            let rB = [];
            data.forEach(function(element) {
                rB.push(element.B);
            });

            let resultB = rB.filter((item, index) => {
                return rB.indexOf(item) === index;
            });

            resultB.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'B' }));
            });

            /***************************************/
            let rC = [];
            data.forEach(function(element) {
                rC.push(element.C);
            });

            let resultC = rC.filter((item, index) => {
                return rC.indexOf(item) === index;
            });

            resultC.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'C' }));
            });

            /***************************************/
            let rD = [];
            data.forEach(function(element) {
                rD.push(element.D);
            });

            let resultD = rD.filter((item, index) => {
                return rD.indexOf(item) === index;
            });

            resultD.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'D' }));
            });

            /***************************************/
            let rE = [];
            data.forEach(function(element) {
                rE.push(element.E);
            });

            let resultE = rE.filter((item, index) => {
                return rE.indexOf(item) === index;
            });

            resultE.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'E' }));
            });

            /***************************************/
            let rF = [];
            data.forEach(function(element) {
                rF.push(element.F);
            });

            let resultF = rF.filter((item, index) => {
                return rF.indexOf(item) === index;
            });

            resultF.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'F' }));
            });

            /***************************************/
            let rG = [];
            data.forEach(function(element) {
                rG.push(element.G);
            });

            let resultG = rG.filter((item, index) => {
                return rG.indexOf(item) === index;
            });

            resultG.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'G' }));
            });

            /***************************************/
            let rH = [];
            data.forEach(function(element) {
                rH.push(element.H);
            });

            let resultH = rH.filter((item, index) => {
                return rH.indexOf(item) === index;
            });

            resultH.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'H' }));
            });

            let bayes = new Bayes(data);

            /* El último parámetro es el método del controlador para guardar la info */
            //procesar(resultClass, attrs, bayes, 'CLASS', 'insertDataProbE5');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE5');
        }
    });
}

function calcularEjercicio6() {
    $.ajax({
        url: '?controller=Home&action=getDataEj6',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let attrs = [];

            /* Genera un vector con las clases sin repetir */
            let rClass = [];
            data.forEach(function(element) {
                rClass.push(element.class);
            });

            let resultClass = rClass.filter((item, index) => {
                return rClass.indexOf(item) === index;
            });

            /***************************************/
            let rRel = [];
            data.forEach(function(element) {
                rRel.push(element.rel);
            });

            let resultRel = rRel.filter((item, index) => {
                return rRel.indexOf(item) === index;
            });

            resultRel.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'rel' }));
            });

            /***************************************/
            let rLinks = [];
            data.forEach(function(element) {
                rLinks.push(element.links);
            });

            let resultLinks = rLinks.filter((item, index) => {
                return rLinks.indexOf(item) === index;
            });

            resultLinks.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'links' }));
            });

            /***************************************/
            let rCapacity = [];
            data.forEach(function(element) {
                rCapacity.push(element.capacity);
            });

            let resultCapacity = rCapacity.filter((item, index) => {
                return rCapacity.indexOf(item) === index;
            });

            resultCapacity.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'capacity' }));
            });

            /***************************************/
            let rCost = [];
            data.forEach(function(element) {
                rCost.push(element.cost);
            });

            let resultCost = rCost.filter((item, index) => {
                return rCost.indexOf(item) === index;
            });

            resultCost.forEach(function(item) {
                attrs.push(Object.assign({ value: item }, { class: 'cost' }));
            });

            let bayes = new Bayes(data);

            /* El último parámetro es el método del controlador para guardar la info */
            //procesar(resultClass, attrs, bayes, 'class', 'insertDataProbE6');
            procesar(resultClass, attrs, bayes, 'estilo', 'insertarFreqE6');
        }
    });
}