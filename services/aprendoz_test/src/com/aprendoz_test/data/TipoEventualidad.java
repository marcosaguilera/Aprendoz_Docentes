
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoEventualidad
 *  01/13/2015 09:58:57
 * 
 */
public class TipoEventualidad {

    private Integer idTipoEventualidad;
    private String tipoEventualidad;
    private Set<com.aprendoz_test.data.SubtipoEventualidad> subtipoEventualidads = new HashSet<com.aprendoz_test.data.SubtipoEventualidad>();

    public Integer getIdTipoEventualidad() {
        return idTipoEventualidad;
    }

    public void setIdTipoEventualidad(Integer idTipoEventualidad) {
        this.idTipoEventualidad = idTipoEventualidad;
    }

    public String getTipoEventualidad() {
        return tipoEventualidad;
    }

    public void setTipoEventualidad(String tipoEventualidad) {
        this.tipoEventualidad = tipoEventualidad;
    }

    public Set<com.aprendoz_test.data.SubtipoEventualidad> getSubtipoEventualidads() {
        return subtipoEventualidads;
    }

    public void setSubtipoEventualidads(Set<com.aprendoz_test.data.SubtipoEventualidad> subtipoEventualidads) {
        this.subtipoEventualidads = subtipoEventualidads;
    }

}
