
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoAsistencia
 *  01/13/2015 09:58:57
 * 
 */
public class TipoAsistencia {

    private Integer idTipo;
    private String tipo;
    private Set<com.aprendoz_test.data.Asistencia> asistencias = new HashSet<com.aprendoz_test.data.Asistencia>();

    public Integer getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(Integer idTipo) {
        this.idTipo = idTipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Set<com.aprendoz_test.data.Asistencia> getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Set<com.aprendoz_test.data.Asistencia> asistencias) {
        this.asistencias = asistencias;
    }

}
