
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TramiteAccion
 *  01/13/2015 09:58:57
 * 
 */
public class TramiteAccion {

    private Integer idAccion;
    private String accion;
    private Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols = new HashSet<com.aprendoz_test.data.TramiteTipoTramiteRol>();

    public Integer getIdAccion() {
        return idAccion;
    }

    public void setIdAccion(Integer idAccion) {
        this.idAccion = idAccion;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public Set<com.aprendoz_test.data.TramiteTipoTramiteRol> getTramiteTipoTramiteRols() {
        return tramiteTipoTramiteRols;
    }

    public void setTramiteTipoTramiteRols(Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols) {
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
    }

}
