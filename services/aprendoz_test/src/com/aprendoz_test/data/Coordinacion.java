
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Coordinacion
 *  07/28/2014 09:52:25
 * 
 */
public class Coordinacion {

    private CoordinacionId id;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public CoordinacionId getId() {
        return id;
    }

    public void setId(CoordinacionId id) {
        this.id = id;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
