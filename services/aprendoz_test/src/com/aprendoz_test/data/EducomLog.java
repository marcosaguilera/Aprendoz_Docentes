
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.EducomLog
 *  07/29/2014 15:25:16
 * 
 */
public class EducomLog {

    private Integer idEducomLog;
    private String usuario;
    private String accionRealizada;
    private String tablaAfectada;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public Integer getIdEducomLog() {
        return idEducomLog;
    }

    public void setIdEducomLog(Integer idEducomLog) {
        this.idEducomLog = idEducomLog;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAccionRealizada() {
        return accionRealizada;
    }

    public void setAccionRealizada(String accionRealizada) {
        this.accionRealizada = accionRealizada;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
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

}
