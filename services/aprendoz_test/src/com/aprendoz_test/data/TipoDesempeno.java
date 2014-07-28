
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoDesempeno
 *  07/28/2014 09:52:25
 * 
 */
public class TipoDesempeno {

    private Integer idTipoDesempeno;
    private String tipoDesempeno;
    private Set<com.aprendoz_test.data.Actividad> actividads = new HashSet<com.aprendoz_test.data.Actividad>();

    public Integer getIdTipoDesempeno() {
        return idTipoDesempeno;
    }

    public void setIdTipoDesempeno(Integer idTipoDesempeno) {
        this.idTipoDesempeno = idTipoDesempeno;
    }

    public String getTipoDesempeno() {
        return tipoDesempeno;
    }

    public void setTipoDesempeno(String tipoDesempeno) {
        this.tipoDesempeno = tipoDesempeno;
    }

    public Set<com.aprendoz_test.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_test.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
