
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogIngresoCarne
 *  01/19/2015 07:58:53
 * 
 */
public class LogIngresoCarne {

    private Integer idLogIngresoCarne;
    private TipoFalla tipoFalla;
    private Persona persona;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public Integer getIdLogIngresoCarne() {
        return idLogIngresoCarne;
    }

    public void setIdLogIngresoCarne(Integer idLogIngresoCarne) {
        this.idLogIngresoCarne = idLogIngresoCarne;
    }

    public TipoFalla getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(TipoFalla tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
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
