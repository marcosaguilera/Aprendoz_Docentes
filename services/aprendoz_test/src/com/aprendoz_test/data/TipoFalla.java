
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoFalla
 *  01/19/2015 07:58:53
 * 
 */
public class TipoFalla {

    private Integer idTipoFalla;
    private String tipoFalla;
    private Set<com.aprendoz_test.data.LogIngresoCarne> logIngresoCarnes = new HashSet<com.aprendoz_test.data.LogIngresoCarne>();

    public Integer getIdTipoFalla() {
        return idTipoFalla;
    }

    public void setIdTipoFalla(Integer idTipoFalla) {
        this.idTipoFalla = idTipoFalla;
    }

    public String getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(String tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Set<com.aprendoz_test.data.LogIngresoCarne> getLogIngresoCarnes() {
        return logIngresoCarnes;
    }

    public void setLogIngresoCarnes(Set<com.aprendoz_test.data.LogIngresoCarne> logIngresoCarnes) {
        this.logIngresoCarnes = logIngresoCarnes;
    }

}
