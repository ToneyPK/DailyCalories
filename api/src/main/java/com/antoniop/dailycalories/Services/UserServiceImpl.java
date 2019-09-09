package com.antoniop.dailycalories.Services;

import com.antoniop.dailycalories.Entities.User;
import com.antoniop.dailycalories.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User getActiveUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getPrincipal().toString();

        Optional<User> user = userRepository.findByUsername(username);
        return user.get();
    }
}
