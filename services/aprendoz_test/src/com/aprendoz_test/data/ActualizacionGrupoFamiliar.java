
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionGrupoFamiliar
 *  02/14/2014 15:15:13
 * 
 */
public class ActualizacionGrupoFamiliar {

    private Integer idActualizacionGrupoFamiliar;
    private GrupoFamiliar grupoFamiliar;
    private Date fecha;
    private Byte actualizado;

    public Integer getIdActualizacionGrupoFamiliar() {
        return idActualizacionGrupoFamiliar;
    }

    public void setIdActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

}
