
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionDatosPersonaCopy
 *  07/28/2014 09:52:25
 * 
 */
public class ActualizacionDatosPersonaCopy {

    private Integer idActualizacionDatosPersona;
    private Persona persona;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
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

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

}
