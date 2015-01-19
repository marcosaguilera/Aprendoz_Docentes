
package com.aprendoz_test.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_test.VistaDashboardMallaDimensionCurricularId
 *  01/19/2015 07:58:52
 * 
 */
public class VistaDashboardMallaDimensionCurricularId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private String dimensionCurricular;
    private BigDecimal porcentaje;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardMallaDimensionCurricularId)) {
            return false;
        }
        VistaDashboardMallaDimensionCurricularId other = ((VistaDashboardMallaDimensionCurricularId) o);
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
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
        if (this.dimensionCurricular == null) {
            if (other.dimensionCurricular!= null) {
                return false;
            }
        } else {
            if (!this.dimensionCurricular.equals(other.dimensionCurricular)) {
                return false;
            }
        }
        if (this.porcentaje == null) {
            if (other.porcentaje!= null) {
                return false;
            }
        } else {
            if (!this.porcentaje.equals(other.porcentaje)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.asignatura!= null) {
            rtn = (rtn + this.asignatura.hashCode());
        }
        rtn = (rtn* 37);
        if (this.dimensionCurricular!= null) {
            rtn = (rtn + this.dimensionCurricular.hashCode());
        }
        rtn = (rtn* 37);
        if (this.porcentaje!= null) {
            rtn = (rtn + this.porcentaje.hashCode());
        }
        return rtn;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

}
