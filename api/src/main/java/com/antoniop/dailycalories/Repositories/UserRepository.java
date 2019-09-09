package com.antoniop.dailycalories.Repositories;

import com.antoniop.dailycalories.Entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(path = "users")
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

}
