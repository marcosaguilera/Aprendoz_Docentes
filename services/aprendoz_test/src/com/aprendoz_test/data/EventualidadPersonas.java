
package com.aprendoz_test.data;



/**
 *  aprendoz_test.EventualidadPersonas
 *  01/19/2015 07:58:52
 * 
 */
public class EventualidadPersonas {

    private Integer idEventualidadPersonas;
    private SubtipoEventualidad subtipoEventualidad;
    private Eventualidades eventualidades;
    private Persona persona;

    public Integer getIdEventualidadPersonas() {
        return idEventualidadPersonas;
    }

    public void setIdEventualidadPersonas(Integer idEventualidadPersonas) {
        this.idEventualidadPersonas = idEventualidadPersonas;
    }

    public SubtipoEventualidad getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(SubtipoEventualidad subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public Eventualidades getEventualidades() {
        return eventualidades;
    }

    public void setEventualidades(Eventualidades eventualidades) {
        this.eventualidades = eventualidades;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
