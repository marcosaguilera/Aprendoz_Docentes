
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Area
 *  02/05/2014 11:42:56
 * 
 */
public class Area {

    private Integer idArea;
    private String area;
    private String areaName;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_test.data.Subarea> subareas = new HashSet<com.aprendoz_test.data.Subarea>();

    public Integer getIdArea() {
        return idArea;
    }

    public void setIdArea(Integer idArea) {
        this.idArea = idArea;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_test.data.Subarea> getSubareas() {
        return subareas;
    }

    public void setSubareas(Set<com.aprendoz_test.data.Subarea> subareas) {
        this.subareas = subareas;
    }

}
