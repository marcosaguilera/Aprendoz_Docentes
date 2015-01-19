
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.DimensionCurricular
 *  01/19/2015 07:58:53
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();
    private Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases = new HashSet<com.aprendoz_test.data.AprendizajesAsignaturas>();

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

    public Set<com.aprendoz_test.data.AprendizajesAsignaturas> getAprendizajesAsignaturases() {
        return aprendizajesAsignaturases;
    }

    public void setAprendizajesAsignaturases(Set<com.aprendoz_test.data.AprendizajesAsignaturas> aprendizajesAsignaturases) {
        this.aprendizajesAsignaturases = aprendizajesAsignaturases;
    }

}
