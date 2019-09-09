package com.antoniop.dailycalories.Controllers;

import com.antoniop.dailycalories.Entities.Day;
import com.antoniop.dailycalories.Entities.Food;
import com.antoniop.dailycalories.Entities.User;
import com.antoniop.dailycalories.Repositories.DayRepository;
import com.antoniop.dailycalories.Repositories.FoodRepository;
import com.antoniop.dailycalories.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodController {

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    DayRepository dayRepository;

    @Autowired
    UserService userService;


    @GetMapping("/food")
    public List getAll(){
        return foodRepository.findAll();
    }

    @GetMapping("/food/day/{dayId}")
    public List getFoodByDayId(@PathVariable("dayId") String dayId){
        List<Food> food = foodRepository.findAll();
        List<Food> foodByDayId = new ArrayList<>();
        for (Food theFood : food) {
            if (theFood.getDayId().equals(dayId))
                foodByDayId.add(theFood);
        }
        return foodByDayId;
    }

    @GetMapping("/food/user")
    public List getFoodByUserId(){
        User activeUser = userService.getActiveUser();
        List<Day> daysByUserId = dayRepository.findByUserId(activeUser.getId());
        List<Food> foodByUserId = new ArrayList<>();

        for (Day day : daysByUserId) {
            List<Food>  foodByDayId = foodRepository.findByDayId(day.getId());
            for (Food food : foodByDayId) {
                foodByUserId.add(food);
            }
        }
        return foodByUserId;
    }

    @PostMapping("/food")
    public Food addFood(@RequestBody Food newFood){
        addCaloriesOfDay(newFood);
        return foodRepository.save(newFood);
    }

    private void addCaloriesOfDay(@RequestBody Food newFood) {
        String dayId = newFood.getDayId();
        Optional<Day> currentDay = dayRepository.findById(dayId);
        Day currentDayFound = currentDay.get();
        currentDayFound.setCaloriesIn(newFood.getCalories() + currentDay.get().getCaloriesIn());
        dayRepository.save(currentDayFound);
    }

    @DeleteMapping("/food/{id}")
    public Food deleteFood(@PathVariable("id") String id){
        Optional<Food> food = foodRepository.findById(id);
        Food foundFood = food.get();

        subtractCaloriesOfDay(foundFood);
        foodRepository.delete(foundFood);
        return foundFood;
    }

    private void subtractCaloriesOfDay(Food food) {
        Optional<Day> currentDay = dayRepository.findById(food.getDayId());
        Day currentDayFound = currentDay.get();
        currentDayFound.setCaloriesIn(currentDayFound.getCaloriesIn() - food.getCalories());
        dayRepository.save(currentDayFound);
    }


}
