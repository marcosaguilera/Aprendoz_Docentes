
package com.aprendoz_test.data;

import java.io.Serializable;


/**
 *  aprendoz_test.DocentesVistaPersonasDemograficaId
 *  07/28/2014 09:52:24
 * 
 */
public class DocentesVistaPersonasDemograficaId
    implements Serializable
{

    private Integer idPersona;
    private String codigo;
    private String apellido1;
    private String apellido2;
    private String nombre1;
    private String nombre2;
    private Integer tipoPersonaIdTipoPersona;
    private Integer grupoFamiliarIdGrupoFamiliar;
    private String grupoFamiliar;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof DocentesVistaPersonasDemograficaId)) {
            return false;
        }
        DocentesVistaPersonasDemograficaId other = ((DocentesVistaPersonasDemograficaId) o);
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
                return false;
            }
        }
        if (this.codigo == null) {
            if (other.codigo!= null) {
                return false;
            }
        } else {
            if (!this.codigo.equals(other.codigo)) {
                return false;
            }
        }
        if (this.apellido1 == null) {
            if (other.apellido1 != null) {
                return false;
            }
        } else {
            if (!this.apellido1 .equals(other.apellido1)) {
                return false;
            }
        }
        if (this.apellido2 == null) {
            if (other.apellido2 != null) {
                return false;
            }
        } else {
            if (!this.apellido2 .equals(other.apellido2)) {
                return false;
            }
        }
        if (this.nombre1 == null) {
            if (other.nombre1 != null) {
                return false;
            }
        } else {
            if (!this.nombre1 .equals(other.nombre1)) {
                return false;
            }
        }
        if (this.nombre2 == null) {
            if (other.nombre2 != null) {
                return false;
            }
        } else {
            if (!this.nombre2 .equals(other.nombre2)) {
                return false;
            }
        }
        if (this.tipoPersonaIdTipoPersona == null) {
            if (other.tipoPersonaIdTipoPersona!= null) {
                return false;
            }
        } else {
            if (!this.tipoPersonaIdTipoPersona.equals(other.tipoPersonaIdTipoPersona)) {
                return false;
            }
        }
        if (this.grupoFamiliarIdGrupoFamiliar == null) {
            if (other.grupoFamiliarIdGrupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliarIdGrupoFamiliar.equals(other.grupoFamiliarIdGrupoFamiliar)) {
                return false;
            }
        }
        if (this.grupoFamiliar == null) {
            if (other.grupoFamiliar!= null) {
                return false;
            }
        } else {
            if (!this.grupoFamiliar.equals(other.grupoFamiliar)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idPersona!= null) {
            rtn = (rtn + this.idPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codigo!= null) {
            rtn = (rtn + this.codigo.hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre1 != null) {
            rtn = (rtn + this.nombre1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.nombre2 != null) {
            rtn = (rtn + this.nombre2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.tipoPersonaIdTipoPersona!= null) {
            rtn = (rtn + this.tipoPersonaIdTipoPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliarIdGrupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliarIdGrupoFamiliar.hashCode());
        }
        rtn = (rtn* 37);
        if (this.grupoFamiliar!= null) {
            rtn = (rtn + this.grupoFamiliar.hashCode());
        }
        return rtn;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public Integer getTipoPersonaIdTipoPersona() {
        return tipoPersonaIdTipoPersona;
    }

    public void setTipoPersonaIdTipoPersona(Integer tipoPersonaIdTipoPersona) {
        this.tipoPersonaIdTipoPersona = tipoPersonaIdTipoPersona;
    }

    public Integer getGrupoFamiliarIdGrupoFamiliar() {
        return grupoFamiliarIdGrupoFamiliar;
    }

    public void setGrupoFamiliarIdGrupoFamiliar(Integer grupoFamiliarIdGrupoFamiliar) {
        this.grupoFamiliarIdGrupoFamiliar = grupoFamiliarIdGrupoFamiliar;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
