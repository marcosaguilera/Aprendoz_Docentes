
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoDia
 *  01/13/2015 09:58:57
 * 
 */
public class TipoDia {

    private Integer idTipoDia;
    private String tipoDia;
    private String descripcion;
    private Set<com.aprendoz_test.data.Cronograma> cronogramas = new HashSet<com.aprendoz_test.data.Cronograma>();

    public Integer getIdTipoDia() {
        return idTipoDia;
    }

    public void setIdTipoDia(Integer idTipoDia) {
        this.idTipoDia = idTipoDia;
    }

    public String getTipoDia() {
        return tipoDia;
    }

    public void setTipoDia(String tipoDia) {
        this.tipoDia = tipoDia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_test.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_test.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

}
