package com.antoniop.dailycalories.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class User {

    @Id
    String id;
    String username;
    String password;
    String realName;
    Integer caloriesGoal;

    public User(String username, String password, String realName, Integer caloriesGoal) {
        this.username = username;
        this.password = password;
        this.realName = realName;
        this.caloriesGoal = caloriesGoal;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public Integer getCaloriesGoal() {
        return caloriesGoal;
    }

    public void setCaloriesGoal(Integer caloriesGoal) {
        this.caloriesGoal = caloriesGoal;
    }
}
