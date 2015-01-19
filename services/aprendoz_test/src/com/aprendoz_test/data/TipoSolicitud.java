
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoSolicitud
 *  01/19/2015 07:58:53
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Integer disponiblePadres;
    private Integer disponibleAdmon;
    private Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_test.data.TransporteNovedades>();

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Integer getDisponiblePadres() {
        return disponiblePadres;
    }

    public void setDisponiblePadres(Integer disponiblePadres) {
        this.disponiblePadres = disponiblePadres;
    }

    public Integer getDisponibleAdmon() {
        return disponibleAdmon;
    }

    public void setDisponibleAdmon(Integer disponibleAdmon) {
        this.disponibleAdmon = disponibleAdmon;
    }

    public Set<com.aprendoz_test.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

}
