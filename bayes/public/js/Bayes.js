class Bayes {
    constructor(data) {
        this.data = data;
        this.nc = 0;
        this.m = 2;
        this.p = 1 / 2;
        this.n = 0;
        this.totalClases = 0;
    }

    mostrarDatos() {
        return 'nc ' + this.nc + ' m ' + this.m + ' p ' + this.p + ' n ' + this.n + ' % ' + (this.n / this.totalClases);
    }

    /**
     * Fórmula para calcular la probabilidad
     */
    calcular() {
        let ret = (this.nc + (this.m * this.p)) / (this.n + this.m);
        return ret;
    }

    /**
     * Cuenta las instancias de una clase con un atributo, nc
     */
    contarNC(attributo, clase, attr1, class1) {
        let ret = 0;
        this.data.forEach(function(element) {
            if (element[attributo] == attr1 && element[clase] == class1) {
                ret++;
            }
        });
        this.nc = ret;
    }

    /**
     * Cuenta la cantidad de clases para luego calcular la probabilidad general
     */
    contarClases(clase, attr1) {
        let ret = 0;
        let tc = 0;
        this.data.forEach(function(element) {
            if (element[clase] == attr1) {
                ret++;
            }
            tc++;
        });
        this.totalClases = tc;
        this.n = ret;
    }

    /**
     * Calcula la probabilidad general dada una clase
     */
    getPropClass() {
        return this.n / this.totalClases;
    }
}