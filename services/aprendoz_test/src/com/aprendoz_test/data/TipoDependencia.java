
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoDependencia
 *  02/05/2014 11:42:57
 * 
 */
public class TipoDependencia {

    private Integer idtipodependencia;
    private String dependencia;
    private Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_test.data.ReportesDependencias>();

    public Integer getIdtipodependencia() {
        return idtipodependencia;
    }

    public void setIdtipodependencia(Integer idtipodependencia) {
        this.idtipodependencia = idtipodependencia;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public Set<com.aprendoz_test.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

}
