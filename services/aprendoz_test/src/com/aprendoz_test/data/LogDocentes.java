
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.LogDocentes
 *  07/29/2014 15:25:16
 * 
 */
public class LogDocentes {

    private Integer idLogDocentes;
    private Persona persona;
    private Date fechaIngreso;
    private Date horaIngreso;

    public Integer getIdLogDocentes() {
        return idLogDocentes;
    }

    public void setIdLogDocentes(Integer idLogDocentes) {
        this.idLogDocentes = idLogDocentes;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Date getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(Date horaIngreso) {
        this.horaIngreso = horaIngreso;
    }

}
