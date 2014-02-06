
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoInscAsig
 *  02/05/2014 11:42:56
 * 
 */
public class TipoInscAsig {

    private Integer idTipoInscAsig;
    private String tipo;
    private Set<com.aprendoz_test.data.Asignatura> asignaturas = new HashSet<com.aprendoz_test.data.Asignatura>();

    public Integer getIdTipoInscAsig() {
        return idTipoInscAsig;
    }

    public void setIdTipoInscAsig(Integer idTipoInscAsig) {
        this.idTipoInscAsig = idTipoInscAsig;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_test.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

}
