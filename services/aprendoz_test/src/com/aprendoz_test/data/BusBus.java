
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.BusBus
 *  01/19/2015 07:58:53
 * 
 */
public class BusBus {

    private Integer id;
    private String plate;
    private Set<com.aprendoz_test.data.BusRoute> busRoutes = new HashSet<com.aprendoz_test.data.BusRoute>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Set<com.aprendoz_test.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_test.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
