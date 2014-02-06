
package com.aprendoz_test.data;



/**
 *  aprendoz_test.InscAlumTransporte
 *  05/27/2013 16:03:55
 * 
 */
public class InscAlumTransporte {

    private Integer idInscAlumTransporte;
    private com.aprendoz_test.data.Rutas rutasByDomingoRuta;
    private com.aprendoz_test.data.Rutas rutasByMiercolesRuta;
    private com.aprendoz_test.data.Rutas rutasByViernesRuta;
    private Persona persona;
    private com.aprendoz_test.data.Rutas rutasByMartesRuta;
    private com.aprendoz_test.data.Rutas rutasByJuevesRuta;
    private com.aprendoz_test.data.Rutas rutasByLunesRuta;
    private com.aprendoz_test.data.Rutas rutasBySabadoRuta;
    private String amPm;

    public InscAlumTransporte() {
    }

    public InscAlumTransporte(Integer idInscAlumTransporte, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.amPm = amPm;
    }

    public InscAlumTransporte(Integer idInscAlumTransporte, com.aprendoz_test.data.Rutas rutasByDomingoRuta, com.aprendoz_test.data.Rutas rutasByMiercolesRuta, com.aprendoz_test.data.Rutas rutasByViernesRuta, Persona persona, com.aprendoz_test.data.Rutas rutasByMartesRuta, com.aprendoz_test.data.Rutas rutasByJuevesRuta, com.aprendoz_test.data.Rutas rutasByLunesRuta, com.aprendoz_test.data.Rutas rutasBySabadoRuta, String amPm) {
        this.idInscAlumTransporte = idInscAlumTransporte;
        this.rutasByDomingoRuta = rutasByDomingoRuta;
        this.rutasByMiercolesRuta = rutasByMiercolesRuta;
        this.rutasByViernesRuta = rutasByViernesRuta;
        this.persona = persona;
        this.rutasByMartesRuta = rutasByMartesRuta;
        this.rutasByJuevesRuta = rutasByJuevesRuta;
        this.rutasByLunesRuta = rutasByLunesRuta;
        this.rutasBySabadoRuta = rutasBySabadoRuta;
        this.amPm = amPm;
    }

    public Integer getIdInscAlumTransporte() {
        return idInscAlumTransporte;
    }

    public void setIdInscAlumTransporte(Integer idInscAlumTransporte) {
        this.idInscAlumTransporte = idInscAlumTransporte;
    }

    public com.aprendoz_test.data.Rutas getRutasByDomingoRuta() {
        return rutasByDomingoRuta;
    }

    public void setRutasByDomingoRuta(com.aprendoz_test.data.Rutas rutasByDomingoRuta) {
        this.rutasByDomingoRuta = rutasByDomingoRuta;
    }

    public com.aprendoz_test.data.Rutas getRutasByMiercolesRuta() {
        return rutasByMiercolesRuta;
    }

    public void setRutasByMiercolesRuta(com.aprendoz_test.data.Rutas rutasByMiercolesRuta) {
        this.rutasByMiercolesRuta = rutasByMiercolesRuta;
    }

    public com.aprendoz_test.data.Rutas getRutasByViernesRuta() {
        return rutasByViernesRuta;
    }

    public void setRutasByViernesRuta(com.aprendoz_test.data.Rutas rutasByViernesRuta) {
        this.rutasByViernesRuta = rutasByViernesRuta;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public com.aprendoz_test.data.Rutas getRutasByMartesRuta() {
        return rutasByMartesRuta;
    }

    public void setRutasByMartesRuta(com.aprendoz_test.data.Rutas rutasByMartesRuta) {
        this.rutasByMartesRuta = rutasByMartesRuta;
    }

    public com.aprendoz_test.data.Rutas getRutasByJuevesRuta() {
        return rutasByJuevesRuta;
    }

    public void setRutasByJuevesRuta(com.aprendoz_test.data.Rutas rutasByJuevesRuta) {
        this.rutasByJuevesRuta = rutasByJuevesRuta;
    }

    public com.aprendoz_test.data.Rutas getRutasByLunesRuta() {
        return rutasByLunesRuta;
    }

    public void setRutasByLunesRuta(com.aprendoz_test.data.Rutas rutasByLunesRuta) {
        this.rutasByLunesRuta = rutasByLunesRuta;
    }

    public com.aprendoz_test.data.Rutas getRutasBySabadoRuta() {
        return rutasBySabadoRuta;
    }

    public void setRutasBySabadoRuta(com.aprendoz_test.data.Rutas rutasBySabadoRuta) {
        this.rutasBySabadoRuta = rutasBySabadoRuta;
    }

    public String getAmPm() {
        return amPm;
    }

    public void setAmPm(String amPm) {
        this.amPm = amPm;
    }

}
