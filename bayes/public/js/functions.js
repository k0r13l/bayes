/**
 * Tener en cuenta que como se hacen muchas consultas a la bd, el
 * algoritmo puede tomarse un tiempo calculando, mientas espera
 * la respuesta de la bd.
 * 
 * Función usada para enviar las consultas a la base por cada atributo,
 * para que esta devuelva la probabilidad. Luego hace las respectivas
 * multiplicaciones y devuelve la clase con mayor valor para hacer la
 * predicción.
 */

function enviarConsulta(clases, attrNames, method) {
    clases.forEach(function(itemClase) {
        attrNames.forEach(function(itemAttr) {
            let param = {
                "class": itemClase.name,
                "attrName": itemAttr.name,
                "attrValue": itemAttr.value
            };
            $.ajax({
                data: param,
                url: '?controller=Home&action=' + method,
                type: 'post',
                async: false,
                beforeSend: function() {
                    $('.divCargando').empty();
                    let html = '<span>Cargando...</span>';
                    $('.divCargando').append(html);
                },
                success: function(response) {
                    let salida = JSON.parse(response);
                    console.log(salida);
                    itemClase.value *= salida[0]['probability'];
                }
            });
        })
    });
    $('.divCargando').empty();
    clases.sort(function(a, b) { return b.value - a.value });
    return clases[0].name;
}

/**
 * De esta función hacia abajo hacen lo mismo, se obtiene la entrada del
 * usuario y luego se almacenan en un vector para etiquetar los datos.
 * Se especifican las clases y sus probabilidades generales en un vector,
 * y luego se envían ambos para hacer la consulta a las consultas a la bd
 * para luego hacer el cálculo en la función enviarConsulta, que devuelve
 * la clase con mayor probabilidad y se toma como predicción.
 */

function calcularEstilo() {
    //calcularEjercicio1();

    ec = parseInt(document.estilo.c5.value) + parseInt(document.estilo.c9.value) + parseInt(document.estilo.c13.value) + parseInt(document.estilo.c17.value) + parseInt(document.estilo.c25.value) + parseInt(document.estilo.c29.value);
    or = parseInt(document.estilo.c2.value) + parseInt(document.estilo.c10.value) + parseInt(document.estilo.c22.value) + parseInt(document.estilo.c26.value) + parseInt(document.estilo.c30.value) + parseInt(document.estilo.c34.value);
    ca = parseInt(document.estilo.c7.value) + parseInt(document.estilo.c11.value) + parseInt(document.estilo.c15.value) + parseInt(document.estilo.c19.value) + parseInt(document.estilo.c31.value) + parseInt(document.estilo.c35.value);
    ea = parseInt(document.estilo.c4.value) + parseInt(document.estilo.c12.value) + parseInt(document.estilo.c24.value) + parseInt(document.estilo.c28.value) + parseInt(document.estilo.c32.value) + parseInt(document.estilo.c36.value);

    let clases = [{
            name: 'DIVERGENTE',
            value: 0.23423423423423423
        },
        {
            name: 'ASIMILADOR',
            value: 0.18468468468468469
        },
        {
            name: 'CONVERGENTE',
            value: 0.2702702702702703
        },
        {
            name: 'ACOMODADOR',
            value: 0.3108108108108108
        }
    ];
    let attrNames = [{
            name: 'ec',
            value: ec
        },
        {
            name: 'or',
            value: or
        },
        {
            name: 'ca',
            value: ca
        },
        {
            name: 'ea',
            value: ea
        }
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj1');
    alert("Su estilo es: " + ret);

}


function calcularRecinto() {
    //calcularEjercicio2();
    let clases = [{
            name: 'Turrialba',
            value: 0.5
        },
        {
            name: 'Paraiso',
            value: 0.5
        }
    ];

    let estilo = $('#selectEstilosA option:selected').val();
    let sexo = $('#selectSexo option:selected').val();
    let promedio = $('#inputPromedioM').val();

    let attrNames = [{
            name: 'estilo',
            value: estilo,
        },
        {
            name: 'promedio',
            value: promedio,
        },
        {
            name: 'sexo',
            value: sexo,
        }
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj2');
    alert("Su recinto es: " + ret);

}

function calcularSexo() {
    //calcularEjercicio3();
    let clases = [{
            name: 'M',
            value: 0.8289473684210527
        },
        {
            name: 'F',
            value: 0.17105263157894737
        }
    ];

    let estilo = $('#selectEstilosA option:selected').val();
    let recinto = $('#selectRecinto option:selected').val();
    let promedio = $('#inputPromedioM').val();

    let attrNames = [{
            name: 'estilo',
            value: estilo,
        },
        {
            name: 'promedio',
            value: promedio,
        },
        {
            name: 'recinto',
            value: recinto,
        }
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj3');

    switch (ret) {
        case 'F':
            ret = 'Femenino';
            break;
        case 'M':
            ret = 'Masculino';
            break;
    }

    alert("Su sexo es: " + ret);
}

function calcularEstilo2() {
    //calcularEjercicio4();
    let clases = [{
            name: 'DIVERGENTE',
            value: 0.27631578947368424
        },
        {
            name: 'ASIMILADOR',
            value: 0.2631578947368421
        },
        {
            name: 'CONVERGENTE',
            value: 0.27631578947368424
        },
        {
            name: 'ACOMODADOR',
            value: 0.18421052631578946
        }
    ];

    let sexo = $('#selectSexo option:selected').val();
    let recinto = $('#selectRecinto option:selected').val();
    let promedio = $('#inputPromedioM').val();

    let attrNames = [{
            name: 'sexo',
            value: sexo,
        },
        {
            name: 'promedio',
            value: promedio,
        },
        {
            name: 'recinto',
            value: recinto,
        }
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj4');
    alert("Su estilo es: " + ret);

}

function calcularProfesor() {
    //calcularEjercicio5();
    let clases = [{
            name: 'Beginner',
            value: 0.45
        },
        {
            name: 'Intermediate',
            value: 0.3
        },
        {
            name: 'Advanced',
            value: 0.25
        }
    ];

    let edad = $('#selectEdad option:selected').val();
    let genero = $('#selectGenero option:selected').val();
    let autoevaluacion = $('#selectAutoEvaluacion').val();
    let cantEnsenado = $('#selectCantEnsenado option:selected').val();
    let disciplina = $('#selectDisciplina option:selected').val();
    let habilidadPC = $('#selectHabilidadPC option:selected').val();
    let habilidadWebTec = $('#selectHabilidadWebTec option:selected').val();
    let habilidadWebSite = $('#selectHabilidadWeb option:selected').val();

    let attrNames = [{
            name: 'A',
            value: edad,
        },
        {
            name: 'B',
            value: genero,
        },
        {
            name: 'C',
            value: autoevaluacion,
        },
        {
            name: 'D',
            value: cantEnsenado,
        },
        {
            name: 'E',
            value: disciplina,
        },
        {
            name: 'F',
            value: habilidadPC,
        },
        {
            name: 'G',
            value: habilidadWebTec,
        },
        {
            name: 'H',
            value: habilidadWebSite,
        }
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj5');
    alert("Su tipo es: " + ret);
}

function calcularRedes() {
    //calcularEjercicio6();
    let clases = [{
            name: 'A',
            value: 0.45714285714285713
        },
        {
            name: 'B',
            value: 0.5428571428571428
        }
    ];

    let fiabilidad = $('#selectReability option:selected').val();
    let enlaces = $('#selectLinks option:selected').val();
    let capacidad = $('#selectCapacity option:selected').val();
    let costo = $('#selectCost option:selected').val();

    let attrNames = [{
            name: 'rel',
            value: fiabilidad,
        },
        {
            name: 'links',
            value: enlaces,
        },
        {
            name: 'capacity',
            value: capacidad,
        },
        {
            name: 'cost',
            value: costo,
        },
    ];

    let ret = enviarConsulta(clases, attrNames, 'getProbRowEj6');
    alert("La clase es: " + ret);

}