
package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TramiteTipoTramite
 *  01/13/2015 09:58:56
 * 
 */
public class TramiteTipoTramite {

    private Integer idTipoTramite;
    private String tramite;
    private Boolean disponibleUi;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols = new HashSet<com.aprendoz_test.data.TramiteTipoTramiteRol>();
    private Set<com.aprendoz_test.data.Tramite> tramites = new HashSet<com.aprendoz_test.data.Tramite>();

    public Integer getIdTipoTramite() {
        return idTipoTramite;
    }

    public void setIdTipoTramite(Integer idTipoTramite) {
        this.idTipoTramite = idTipoTramite;
    }

    public String getTramite() {
        return tramite;
    }

    public void setTramite(String tramite) {
        this.tramite = tramite;
    }

    public Boolean getDisponibleUi() {
        return disponibleUi;
    }

    public void setDisponibleUi(Boolean disponibleUi) {
        this.disponibleUi = disponibleUi;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public Set<com.aprendoz_test.data.TramiteTipoTramiteRol> getTramiteTipoTramiteRols() {
        return tramiteTipoTramiteRols;
    }

    public void setTramiteTipoTramiteRols(Set<com.aprendoz_test.data.TramiteTipoTramiteRol> tramiteTipoTramiteRols) {
        this.tramiteTipoTramiteRols = tramiteTipoTramiteRols;
    }

    public Set<com.aprendoz_test.data.Tramite> getTramites() {
        return tramites;
    }

    public void setTramites(Set<com.aprendoz_test.data.Tramite> tramites) {
        this.tramites = tramites;
    }

}
