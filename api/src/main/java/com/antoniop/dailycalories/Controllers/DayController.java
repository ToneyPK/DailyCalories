package com.antoniop.dailycalories.Controllers;

import com.antoniop.dailycalories.Entities.Day;
import com.antoniop.dailycalories.Repositories.DayRepository;
import com.antoniop.dailycalories.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DayController {

    @Autowired
    DayRepository dayRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/days")
    public List getAll(){
        return dayRepository.findAll();
    }

    @GetMapping("/days/{id}")
    public Day getDayById(@PathVariable("id") String id){
        return dayRepository.findById(id).orElse(null);
    }

    @GetMapping("/days/user/{userId}")
    public List<Day> getDaysByUserId(@PathVariable("userId") String userId){
        List<Day> daysByUserId = dayRepository.findByUserId(userId);

        sortDatesFromRecentToLast(daysByUserId);
        return daysByUserId;
    }

    private void sortDatesFromRecentToLast(List<Day> daysByUserId) {
        Collections.sort(daysByUserId, new Comparator<Day>() {
            public int compare(Day d1, Day d2) {
                return d2.getDate().compareTo(d1.getDate());
            }
        });
    }

    @PostMapping("/days")
    public Day addDay(@RequestBody Day newDay){
        return dayRepository.save(newDay);
    }

    @DeleteMapping("/days/{id}")
    public void deleteDay(@PathVariable("id") String id){
        dayRepository.deleteById(id);
    }



}
