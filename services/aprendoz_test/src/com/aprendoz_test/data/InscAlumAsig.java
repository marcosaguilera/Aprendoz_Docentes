
package com.aprendoz_test.data;

import java.math.BigDecimal;


/**
 *  aprendoz_test.InscAlumAsig
 *  02/05/2014 11:42:56
 * 
 */
public class InscAlumAsig {

    private Integer idInscAlumAsig;
    private Asignatura asignatura;
    private Persona persona;
    private Periodo periodo;
    private BigDecimal calificacion;
    private BigDecimal porcentaje;
    private Integer esperados;
    private Integer logrados;
    private String califChar;

    public Integer getIdInscAlumAsig() {
        return idInscAlumAsig;
    }

    public void setIdInscAlumAsig(Integer idInscAlumAsig) {
        this.idInscAlumAsig = idInscAlumAsig;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

    public BigDecimal getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(BigDecimal calificacion) {
        this.calificacion = calificacion;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

    public Integer getEsperados() {
        return esperados;
    }

    public void setEsperados(Integer esperados) {
        this.esperados = esperados;
    }

    public Integer getLogrados() {
        return logrados;
    }

    public void setLogrados(Integer logrados) {
        this.logrados = logrados;
    }

    public String getCalifChar() {
        return califChar;
    }

    public void setCalifChar(String califChar) {
        this.califChar = califChar;
    }

}
