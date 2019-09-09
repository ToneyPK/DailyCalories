package com.antoniop.dailycalories.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("food")
public class Food {

    @Id
    String id;
    String foodName;
    Integer calories;
    String dayId;

    public Food(String foodName, Integer calories, String dayId) {
        this.foodName = foodName;
        this.calories = calories;
        this.dayId = dayId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public String getDayId() {
        return dayId;
    }

    public void setDayId(String dayId) {
        this.dayId = dayId;
    }
}
