
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogMatriculasAccionesUsuarios
 *  01/19/2015 07:58:53
 * 
 */
public class LogMatriculasAccionesUsuarios {

    private Integer idLogAccionesMatriculas;
    private String usuario;
    private String accionRealizada;
    private String tablaAfectada;
    private Date fechaCreacion;
    private Date fechaModificacion;

    public Integer getIdLogAccionesMatriculas() {
        return idLogAccionesMatriculas;
    }

    public void setIdLogAccionesMatriculas(Integer idLogAccionesMatriculas) {
        this.idLogAccionesMatriculas = idLogAccionesMatriculas;
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

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

}
