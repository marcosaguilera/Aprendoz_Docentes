
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.FeedbackReportes
 *  07/29/2014 15:25:16
 * 
 */
public class FeedbackReportes {

    private Integer idfeedbackReportes;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private String usuario;
    private String comentario;
    private String tipoReporte;

    public Integer getIdfeedbackReportes() {
        return idfeedbackReportes;
    }

    public void setIdfeedbackReportes(Integer idfeedbackReportes) {
        this.idfeedbackReportes = idfeedbackReportes;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getTipoReporte() {
        return tipoReporte;
    }

    public void setTipoReporte(String tipoReporte) {
        this.tipoReporte = tipoReporte;
    }

}
