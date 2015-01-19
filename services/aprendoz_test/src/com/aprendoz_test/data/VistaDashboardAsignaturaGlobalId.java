
package com.aprendoz_test.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_test.VistaDashboardAsignaturaGlobalId
 *  01/19/2015 07:58:53
 * 
 */
public class VistaDashboardAsignaturaGlobalId
    implements Serializable
{

    private Integer directorId;
    private String directorApellido1;
    private String directorApellido2;
    private String curso;
    private String apellido1;
    private String apellido2;
    private String asignatura;
    private BigDecimal avgPuntaje;
    private String avgCalificacion;
    private Integer idAsignatura;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardAsignaturaGlobalId)) {
            return false;
        }
        VistaDashboardAsignaturaGlobalId other = ((VistaDashboardAsignaturaGlobalId) o);
        if (this.directorId == null) {
            if (other.directorId!= null) {
                return false;
            }
        } else {
            if (!this.directorId.equals(other.directorId)) {
                return false;
            }
        }
        if (this.directorApellido1 == null) {
            if (other.directorApellido1 != null) {
                return false;
            }
        } else {
            if (!this.directorApellido1 .equals(other.directorApellido1)) {
                return false;
            }
        }
        if (this.directorApellido2 == null) {
            if (other.directorApellido2 != null) {
                return false;
            }
        } else {
            if (!this.directorApellido2 .equals(other.directorApellido2)) {
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
        if (this.asignatura == null) {
            if (other.asignatura!= null) {
                return false;
            }
        } else {
            if (!this.asignatura.equals(other.asignatura)) {
                return false;
            }
        }
        if (this.avgPuntaje == null) {
            if (other.avgPuntaje!= null) {
                return false;
            }
        } else {
            if (!this.avgPuntaje.equals(other.avgPuntaje)) {
                return false;
            }
        }
        if (this.avgCalificacion == null) {
            if (other.avgCalificacion!= null) {
                return false;
            }
        } else {
            if (!this.avgCalificacion.equals(other.avgCalificacion)) {
                return false;
            }
        }
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.directorId!= null) {
            rtn = (rtn + this.directorId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.directorApellido1 != null) {
            rtn = (rtn + this.directorApellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.directorApellido2 != null) {
            rtn = (rtn + this.directorApellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.curso!= null) {
            rtn = (rtn + this.curso.hashCode());
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
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.avgPuntaje!= null) {
            rtn = (rtn + this.avgPuntaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.avgCalificacion!= null) {
            rtn = (rtn + this.avgCalificacion.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        return rtn;
    }

    public Integer getDirectorId() {
        return directorId;
    }

    public void setDirectorId(Integer directorId) {
        this.directorId = directorId;
    }

    public String getDirectorApellido1() {
        return directorApellido1;
    }

    public void setDirectorApellido1(String directorApellido1) {
        this.directorApellido1 = directorApellido1;
    }

    public String getDirectorApellido2() {
        return directorApellido2;
    }

    public void setDirectorApellido2(String directorApellido2) {
        this.directorApellido2 = directorApellido2;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
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

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public BigDecimal getAvgPuntaje() {
        return avgPuntaje;
    }

    public void setAvgPuntaje(BigDecimal avgPuntaje) {
        this.avgPuntaje = avgPuntaje;
    }

    public String getAvgCalificacion() {
        return avgCalificacion;
    }

    public void setAvgCalificacion(String avgCalificacion) {
        this.avgCalificacion = avgCalificacion;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

}
