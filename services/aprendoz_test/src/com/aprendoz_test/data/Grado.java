
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Grado
 *  02/14/2014 15:15:13
 * 
 */
public class Grado {

    private Integer idGrado;
    private Nivel nivel;
    private String grado;
    private String grade;
    private String gradoSapiens;
    private Set<com.aprendoz_test.data.Asignatura> asignaturas = new HashSet<com.aprendoz_test.data.Asignatura>();
    private Set<com.aprendoz_test.data.Costos> costoses = new HashSet<com.aprendoz_test.data.Costos>();
    private Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations = new HashSet<com.aprendoz_test.data.AccAuthorization>();
    private Set<com.aprendoz_test.data.Curso> cursos = new HashSet<com.aprendoz_test.data.Curso>();

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getGradoSapiens() {
        return gradoSapiens;
    }

    public void setGradoSapiens(String gradoSapiens) {
        this.gradoSapiens = gradoSapiens;
    }

    public Set<com.aprendoz_test.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_test.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_test.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_test.data.AccAuthorization> getAccAuthorizations() {
        return accAuthorizations;
    }

    public void setAccAuthorizations(Set<com.aprendoz_test.data.AccAuthorization> accAuthorizations) {
        this.accAuthorizations = accAuthorizations;
    }

    public Set<com.aprendoz_test.data.Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Set<com.aprendoz_test.data.Curso> cursos) {
        this.cursos = cursos;
    }

}
