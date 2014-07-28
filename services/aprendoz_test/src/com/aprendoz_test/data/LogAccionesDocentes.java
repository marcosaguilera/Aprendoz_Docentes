
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogAccionesDocentes
 *  07/28/2014 09:52:24
 * 
 */
public class LogAccionesDocentes {

    private Integer idLogAccionesDocentes;
    private Date fechaCreacion;
    private String tablaAfectada;
    private String usuario;
    private String accionRealizada;

    public Integer getIdLogAccionesDocentes() {
        return idLogAccionesDocentes;
    }

    public void setIdLogAccionesDocentes(Integer idLogAccionesDocentes) {
        this.idLogAccionesDocentes = idLogAccionesDocentes;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getTablaAfectada() {
        return tablaAfectada;
    }

    public void setTablaAfectada(String tablaAfectada) {
        this.tablaAfectada = tablaAfectada;
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

}
