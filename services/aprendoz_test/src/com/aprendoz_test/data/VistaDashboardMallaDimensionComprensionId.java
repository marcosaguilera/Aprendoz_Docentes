
package com.aprendoz_test.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  aprendoz_test.VistaDashboardMallaDimensionComprensionId
 *  01/19/2015 07:58:53
 * 
 */
public class VistaDashboardMallaDimensionComprensionId
    implements Serializable
{

    private Integer idAsignatura;
    private String asignatura;
    private String dimensionComprension;
    private BigDecimal porcentaje;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VistaDashboardMallaDimensionComprensionId)) {
            return false;
        }
        VistaDashboardMallaDimensionComprensionId other = ((VistaDashboardMallaDimensionComprensionId) o);
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
        if (this.dimensionComprension == null) {
            if (other.dimensionComprension!= null) {
                return false;
            }
        } else {
            if (!this.dimensionComprension.equals(other.dimensionComprension)) {
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
        if (this.dimensionComprension!= null) {
            rtn = (rtn + this.dimensionComprension.hashCode());
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

    public String getDimensionComprension() {
        return dimensionComprension;
    }

    public void setDimensionComprension(String dimensionComprension) {
        this.dimensionComprension = dimensionComprension;
    }

    public BigDecimal getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(BigDecimal porcentaje) {
        this.porcentaje = porcentaje;
    }

}
