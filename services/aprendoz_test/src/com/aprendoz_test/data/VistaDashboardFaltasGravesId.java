
package com.aprendoz_test.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_test.VistaDashboardFaltasGravesId
 *  01/19/2015 07:58:53
 * 
 */
public class VistaDashboardFaltasGravesId
    implements Serializable
{

    private Integer idPersona;
    private String apellido1;
    private String apellido2;
    private String curso;
    private BigDecimal porcentajeFaltasGraves;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardFaltasGravesId)) {
            return false;
        }
        VistaDashboardFaltasGravesId other = ((VistaDashboardFaltasGravesId) o);
        if (this.idPersona == null) {
            if (other.idPersona!= null) {
                return false;
            }
        } else {
            if (!this.idPersona.equals(other.idPersona)) {
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
        if (this.curso == null) {
            if (other.curso!= null) {
                return false;
            }
        } else {
            if (!this.curso.equals(other.curso)) {
                return false;
            }
        }
        if (this.porcentajeFaltasGraves == null) {
            if (other.porcentajeFaltasGraves!= null) {
                return false;
            }
        } else {
            if (!this.porcentajeFaltasGraves.equals(other.porcentajeFaltasGraves)) {
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
        if (this.apellido1 != null) {
            rtn = (rtn + this.apellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.apellido2 != null) {
            rtn = (rtn + this.apellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
        }
        rtn = (rtn* 37);
        if (this.porcentajeFaltasGraves!= null) {
            rtn = (rtn + this.porcentajeFaltasGraves.hashCode());
        }
        return rtn;
    }

    public Integer getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Integer idPersona) {
        this.idPersona = idPersona;
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

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public BigDecimal getPorcentajeFaltasGraves() {
        return porcentajeFaltasGraves;
    }

    public void setPorcentajeFaltasGraves(BigDecimal porcentajeFaltasGraves) {
        this.porcentajeFaltasGraves = porcentajeFaltasGraves;
    }

}
