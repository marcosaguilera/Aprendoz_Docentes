
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Reportes
 *  01/19/2015 07:58:53
 * 
 */
public class Reportes {

    private Integer idreporte;
    private String codigo;
    private String reporte;
    private String descripcion;
    private String uri;
    private Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases = new HashSet<com.aprendoz_test.data.ReportesDependencias>();
    private Set<com.aprendoz_test.data.ReportesTipoPersona> reportesTipoPersonas = new HashSet<com.aprendoz_test.data.ReportesTipoPersona>();

    public Integer getIdreporte() {
        return idreporte;
    }

    public void setIdreporte(Integer idreporte) {
        this.idreporte = idreporte;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getReporte() {
        return reporte;
    }

    public void setReporte(String reporte) {
        this.reporte = reporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Set<com.aprendoz_test.data.ReportesDependencias> getReportesDependenciases() {
        return reportesDependenciases;
    }

    public void setReportesDependenciases(Set<com.aprendoz_test.data.ReportesDependencias> reportesDependenciases) {
        this.reportesDependenciases = reportesDependenciases;
    }

    public Set<com.aprendoz_test.data.ReportesTipoPersona> getReportesTipoPersonas() {
        return reportesTipoPersonas;
    }

    public void setReportesTipoPersonas(Set<com.aprendoz_test.data.ReportesTipoPersona> reportesTipoPersonas) {
        this.reportesTipoPersonas = reportesTipoPersonas;
    }

}
