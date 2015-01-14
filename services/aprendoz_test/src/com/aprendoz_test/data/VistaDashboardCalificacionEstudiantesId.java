
package com.aprendoz_test.data;

import java.io.Serializable;


/**
 *  aprendoz_test.VistaDashboardCalificacionEstudiantesId
 *  01/13/2015 09:58:57
 * 
 */
public class VistaDashboardCalificacionEstudiantesId
    implements Serializable
{

    private Integer directorId;
    private String directorApellido1;
    private String directorApellido2;
    private String curso;
    private String alumnoApellido1;
    private String alumnoApellido2;
    private Double puntaje;
    private String calificacion;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardCalificacionEstudiantesId)) {
            return false;
        }
        VistaDashboardCalificacionEstudiantesId other = ((VistaDashboardCalificacionEstudiantesId) o);
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
        if (this.alumnoApellido1 == null) {
            if (other.alumnoApellido1 != null) {
                return false;
            }
        } else {
            if (!this.alumnoApellido1 .equals(other.alumnoApellido1)) {
                return false;
            }
        }
        if (this.alumnoApellido2 == null) {
            if (other.alumnoApellido2 != null) {
                return false;
            }
        } else {
            if (!this.alumnoApellido2 .equals(other.alumnoApellido2)) {
                return false;
            }
        }
        if (this.puntaje == null) {
            if (other.puntaje!= null) {
                return false;
            }
        } else {
            if (!this.puntaje.equals(other.puntaje)) {
                return false;
            }
        }
        if (this.calificacion == null) {
            if (other.calificacion!= null) {
                return false;
            }
        } else {
            if (!this.calificacion.equals(other.calificacion)) {
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
        if (this.alumnoApellido1 != null) {
            rtn = (rtn + this.alumnoApellido1 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.alumnoApellido2 != null) {
            rtn = (rtn + this.alumnoApellido2 .hashCode());
        }
        rtn = (rtn* 37);
        if (this.puntaje!= null) {
            rtn = (rtn + this.puntaje.hashCode());
        }
        rtn = (rtn* 37);
        if (this.calificacion!= null) {
            rtn = (rtn + this.calificacion.hashCode());
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

    public String getAlumnoApellido1() {
        return alumnoApellido1;
    }

    public void setAlumnoApellido1(String alumnoApellido1) {
        this.alumnoApellido1 = alumnoApellido1;
    }

    public String getAlumnoApellido2() {
        return alumnoApellido2;
    }

    public void setAlumnoApellido2(String alumnoApellido2) {
        this.alumnoApellido2 = alumnoApellido2;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

}
