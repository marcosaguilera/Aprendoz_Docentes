
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.BusRoute
 *  02/14/2014 15:15:13
 * 
 */
public class BusRoute {

    private Integer id;
    private BusBus busBus;
    private BusDriver busDriver;
    private Date date;
    private String startingPoint;
    private String endingPoint;
    private Date startingTime;
    private Date endingTime;
    private Date created;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BusBus getBusBus() {
        return busBus;
    }

    public void setBusBus(BusBus busBus) {
        this.busBus = busBus;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStartingPoint() {
        return startingPoint;
    }

    public void setStartingPoint(String startingPoint) {
        this.startingPoint = startingPoint;
    }

    public String getEndingPoint() {
        return endingPoint;
    }

    public void setEndingPoint(String endingPoint) {
        this.endingPoint = endingPoint;
    }

    public Date getStartingTime() {
        return startingTime;
    }

    public void setStartingTime(Date startingTime) {
        this.startingTime = startingTime;
    }

    public Date getEndingTime() {
        return endingTime;
    }

    public void setEndingTime(Date endingTime) {
        this.endingTime = endingTime;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

}
