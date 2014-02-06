
package com.aprendoz_test.data.output;



/**
 * Generated for query "getStudentsBySubject" on 01/09/2014 11:25:51
 * 
 */
public class GetStudentsBySubjectRtnType {

    private String codigo;
    private Integer idpersona;
    private String nombres;
    private String apellidos;
    private Integer idcurso;
    private String curso;
    private Integer idgrado;
    private String grado;
    private String schoolYear;

    public GetStudentsBySubjectRtnType() {
    }

    public GetStudentsBySubjectRtnType(String codigo, Integer idpersona, String nombres, String apellidos, Integer idcurso, String curso, Integer idgrado, String grado, String schoolYear) {
        this.codigo = codigo;
        this.idpersona = idpersona;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.idcurso = idcurso;
        this.curso = curso;
        this.idgrado = idgrado;
        this.grado = grado;
        this.schoolYear = schoolYear;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public Integer getIdcurso() {
        return idcurso;
    }

    public void setIdcurso(Integer idcurso) {
        this.idcurso = idcurso;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Integer getIdgrado() {
        return idgrado;
    }

    public void setIdgrado(Integer idgrado) {
        this.idgrado = idgrado;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

}
