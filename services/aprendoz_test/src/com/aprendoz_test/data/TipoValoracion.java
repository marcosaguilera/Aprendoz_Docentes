
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoValoracion
 *  02/05/2014 11:42:56
 * 
 */
public class TipoValoracion {

    private Integer idTipoValoracion;
    private String tipoValoracion;
    private Set<com.aprendoz_test.data.Actividad> actividads = new HashSet<com.aprendoz_test.data.Actividad>();

    public Integer getIdTipoValoracion() {
        return idTipoValoracion;
    }

    public void setIdTipoValoracion(Integer idTipoValoracion) {
        this.idTipoValoracion = idTipoValoracion;
    }

    public String getTipoValoracion() {
        return tipoValoracion;
    }

    public void setTipoValoracion(String tipoValoracion) {
        this.tipoValoracion = tipoValoracion;
    }

    public Set<com.aprendoz_test.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_test.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
