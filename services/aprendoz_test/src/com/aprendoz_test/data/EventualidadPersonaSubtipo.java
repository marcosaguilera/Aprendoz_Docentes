
package com.aprendoz_test.data;



/**
 *  aprendoz_test.EventualidadPersonaSubtipo
 *  03/31/2013 13:12:50
 * 
 */
public class EventualidadPersonaSubtipo {

    private Integer idPersonaEventualidadSubtipoEventualidad;
    private SubtipoEventualidad subtipoEventualidad;
    private EventualidadPersonas eventualidadPersonas;

    public EventualidadPersonaSubtipo() {
    }

    public EventualidadPersonaSubtipo(Integer idPersonaEventualidadSubtipoEventualidad) {
        this.idPersonaEventualidadSubtipoEventualidad = idPersonaEventualidadSubtipoEventualidad;
    }

    public EventualidadPersonaSubtipo(Integer idPersonaEventualidadSubtipoEventualidad, SubtipoEventualidad subtipoEventualidad, EventualidadPersonas eventualidadPersonas) {
        this.idPersonaEventualidadSubtipoEventualidad = idPersonaEventualidadSubtipoEventualidad;
        this.subtipoEventualidad = subtipoEventualidad;
        this.eventualidadPersonas = eventualidadPersonas;
    }

    public Integer getIdPersonaEventualidadSubtipoEventualidad() {
        return idPersonaEventualidadSubtipoEventualidad;
    }

    public void setIdPersonaEventualidadSubtipoEventualidad(Integer idPersonaEventualidadSubtipoEventualidad) {
        this.idPersonaEventualidadSubtipoEventualidad = idPersonaEventualidadSubtipoEventualidad;
    }

    public SubtipoEventualidad getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(SubtipoEventualidad subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public EventualidadPersonas getEventualidadPersonas() {
        return eventualidadPersonas;
    }

    public void setEventualidadPersonas(EventualidadPersonas eventualidadPersonas) {
        this.eventualidadPersonas = eventualidadPersonas;
    }

}
