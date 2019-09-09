package com.antoniop.dailycalories.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "days")
public class Day {

    @Id
    private String id;
    private Date date;
    private Integer caloriesIn;
    private String userId;

    public Day(Date date, Integer caloriesIn, String userId) {
        this.date = date;
        this.caloriesIn = caloriesIn;
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getCaloriesIn() {
        return caloriesIn;
    }

    public void setCaloriesIn(Integer caloriesIn) {
        this.caloriesIn = caloriesIn;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
