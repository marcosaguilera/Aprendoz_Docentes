
package com.aprendoz_test.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.AccStudentCard
 *  01/19/2015 07:58:53
 * 
 */
public class AccStudentCard {

    private Integer id;
    private Persona persona;
    private String cardCodeData;
    private String cardNumber;
    private Date created;
    private Date updated;
    private Set<com.aprendoz_test.data.AccStudentCardAuthorization> accStudentCardAuthorizations = new HashSet<com.aprendoz_test.data.AccStudentCardAuthorization>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getCardCodeData() {
        return cardCodeData;
    }

    public void setCardCodeData(String cardCodeData) {
        this.cardCodeData = cardCodeData;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Set<com.aprendoz_test.data.AccStudentCardAuthorization> getAccStudentCardAuthorizations() {
        return accStudentCardAuthorizations;
    }

    public void setAccStudentCardAuthorizations(Set<com.aprendoz_test.data.AccStudentCardAuthorization> accStudentCardAuthorizations) {
        this.accStudentCardAuthorizations = accStudentCardAuthorizations;
    }

}
