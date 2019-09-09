package com.antoniop.dailycalories.Controllers;

import com.antoniop.dailycalories.Entities.Day;
import com.antoniop.dailycalories.Entities.User;
import com.antoniop.dailycalories.Repositories.DayRepository;
import com.antoniop.dailycalories.Repositories.UserRepository;
import com.antoniop.dailycalories.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DayRepository dayRepository;

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()){
            throw new ResourceNotFoundException("Requested user cannot be found.");
        }
        User foundUser = user.get();
        return ResponseEntity.ok().body(foundUser);
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User newUser){
        String encryptedPassword = encodePasswordToBcrypt(newUser.getPassword());
        newUser.setPassword(encryptedPassword);
        return userRepository.save(newUser);

    }

    @GetMapping("/user")
    public User getUser(){
        User foundUser = userService.getActiveUser();

        List<Day> daysByUserId = dayRepository.findByUserId(foundUser.getId());

        addFirstDay(foundUser);

        return foundUser;
    }

    private void createTodayIfNoTodayForUser(User foundUser, List<Day> daysByUserId) {
        boolean userDayListContainsToday = checkIfContainsToday(daysByUserId);
        if (!userDayListContainsToday){
            createTodayDayForUser(foundUser);
        }
    }

    private void addFirstDay(@RequestBody User user) {
        List<Day> daysList = dayRepository.findByUserId(user.getId());

        if (daysList.size() == 0){
            Date currentDate = new Date();
            Day firstDay = new Day(currentDate,0, user.getId());
            dayRepository.save(firstDay);
        }else {
            createTodayIfNoTodayForUser(user, daysList);
        }

    }

    private void createTodayDayForUser(User foundUser) {
        Date currentDate = new Date();
        Day firstDay = new Day(currentDate,0, foundUser.getId());
        firstDay.setDate(currentDate);
        dayRepository.save(firstDay);
    }

    public boolean checkIfContainsToday(List<Day> daysByUserId){
        SimpleDateFormat fmt = new SimpleDateFormat("yyyyMMdd");
        for (Day day : daysByUserId) {
            String formattedDays = fmt.format(day.getDate());
            String formattedTodayDate = fmt.format(new Date());
            if (formattedDays.equals(formattedTodayDate)){
                return true;
            }
        }
        return false;
    }

    private String encodePasswordToBcrypt(String password) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        String encryptedPassword = bCryptPasswordEncoder.encode(password);
        return encryptedPassword;
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") String id){
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()){
            throw new ResourceNotFoundException("Requested user cannot be found.");
        }
        String userId = user.get().getId();
        userRepository.deleteById(userId);
    }

}
