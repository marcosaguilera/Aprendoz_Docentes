
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TransporteRutas
 *  01/19/2015 07:58:53
 * 
 */
public class TransporteRutas {

    private Integer idRuta;
    private GrupoFamiliar grupoFamiliar;
    private TipoTransporte tipoTransporte;
    private String numeroRuta;
    private String placaVehiculo;
    private String nombreConductor;
    private String telefonoConductor;
    private String movilConductor;
    private String nombreMonitora;
    private String telefonoMonitor;
    private String movilMonitor;
    private String idAvantel;
    private String numeroAvantel;
    private String nombreResponsable;
    private String descripcion;
    private String telefono1;
    private String telefono2;
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForMartesRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForMiercolesRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForJuevesRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForViernesRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForSabadoRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForDomingoRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();
    private Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_test.data.TransporteNovedades>();
    private Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForLunesRuta = new HashSet<com.aprendoz_test.data.TransporteInscAlumTransporte>();

    public Integer getIdRuta() {
        return idRuta;
    }

    public void setIdRuta(Integer idRuta) {
        this.idRuta = idRuta;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public TipoTransporte getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(TipoTransporte tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getNumeroRuta() {
        return numeroRuta;
    }

    public void setNumeroRuta(String numeroRuta) {
        this.numeroRuta = numeroRuta;
    }

    public String getPlacaVehiculo() {
        return placaVehiculo;
    }

    public void setPlacaVehiculo(String placaVehiculo) {
        this.placaVehiculo = placaVehiculo;
    }

    public String getNombreConductor() {
        return nombreConductor;
    }

    public void setNombreConductor(String nombreConductor) {
        this.nombreConductor = nombreConductor;
    }

    public String getTelefonoConductor() {
        return telefonoConductor;
    }

    public void setTelefonoConductor(String telefonoConductor) {
        this.telefonoConductor = telefonoConductor;
    }

    public String getMovilConductor() {
        return movilConductor;
    }

    public void setMovilConductor(String movilConductor) {
        this.movilConductor = movilConductor;
    }

    public String getNombreMonitora() {
        return nombreMonitora;
    }

    public void setNombreMonitora(String nombreMonitora) {
        this.nombreMonitora = nombreMonitora;
    }

    public String getTelefonoMonitor() {
        return telefonoMonitor;
    }

    public void setTelefonoMonitor(String telefonoMonitor) {
        this.telefonoMonitor = telefonoMonitor;
    }

    public String getMovilMonitor() {
        return movilMonitor;
    }

    public void setMovilMonitor(String movilMonitor) {
        this.movilMonitor = movilMonitor;
    }

    public String getIdAvantel() {
        return idAvantel;
    }

    public void setIdAvantel(String idAvantel) {
        this.idAvantel = idAvantel;
    }

    public String getNumeroAvantel() {
        return numeroAvantel;
    }

    public void setNumeroAvantel(String numeroAvantel) {
        this.numeroAvantel = numeroAvantel;
    }

    public String getNombreResponsable() {
        return nombreResponsable;
    }

    public void setNombreResponsable(String nombreResponsable) {
        this.nombreResponsable = nombreResponsable;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelefono1() {
        return telefono1;
    }

    public void setTelefono1(String telefono1) {
        this.telefono1 = telefono1;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForMartesRuta() {
        return transporteInscAlumTransportesForMartesRuta;
    }

    public void setTransporteInscAlumTransportesForMartesRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForMartesRuta) {
        this.transporteInscAlumTransportesForMartesRuta = transporteInscAlumTransportesForMartesRuta;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForMiercolesRuta() {
        return transporteInscAlumTransportesForMiercolesRuta;
    }

    public void setTransporteInscAlumTransportesForMiercolesRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForMiercolesRuta) {
        this.transporteInscAlumTransportesForMiercolesRuta = transporteInscAlumTransportesForMiercolesRuta;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForJuevesRuta() {
        return transporteInscAlumTransportesForJuevesRuta;
    }

    public void setTransporteInscAlumTransportesForJuevesRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForJuevesRuta) {
        this.transporteInscAlumTransportesForJuevesRuta = transporteInscAlumTransportesForJuevesRuta;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForViernesRuta() {
        return transporteInscAlumTransportesForViernesRuta;
    }

    public void setTransporteInscAlumTransportesForViernesRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForViernesRuta) {
        this.transporteInscAlumTransportesForViernesRuta = transporteInscAlumTransportesForViernesRuta;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForSabadoRuta() {
        return transporteInscAlumTransportesForSabadoRuta;
    }

    public void setTransporteInscAlumTransportesForSabadoRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForSabadoRuta) {
        this.transporteInscAlumTransportesForSabadoRuta = transporteInscAlumTransportesForSabadoRuta;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForDomingoRuta() {
        return transporteInscAlumTransportesForDomingoRuta;
    }

    public void setTransporteInscAlumTransportesForDomingoRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForDomingoRuta) {
        this.transporteInscAlumTransportesForDomingoRuta = transporteInscAlumTransportesForDomingoRuta;
    }

    public Set<com.aprendoz_test.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

    public Set<com.aprendoz_test.data.TransporteInscAlumTransporte> getTransporteInscAlumTransportesForLunesRuta() {
        return transporteInscAlumTransportesForLunesRuta;
    }

    public void setTransporteInscAlumTransportesForLunesRuta(Set<com.aprendoz_test.data.TransporteInscAlumTransporte> transporteInscAlumTransportesForLunesRuta) {
        this.transporteInscAlumTransportesForLunesRuta = transporteInscAlumTransportesForLunesRuta;
    }

}
