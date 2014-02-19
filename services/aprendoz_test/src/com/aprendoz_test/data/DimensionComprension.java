
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.DimensionComprension
 *  02/14/2014 15:15:13
 * 
 */
public class DimensionComprension {

    private Integer idDimension;
    private String dimensionComprension;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionComprension() {
        return dimensionComprension;
    }

    public void setDimensionComprension(String dimensionComprension) {
        this.dimensionComprension = dimensionComprension;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
