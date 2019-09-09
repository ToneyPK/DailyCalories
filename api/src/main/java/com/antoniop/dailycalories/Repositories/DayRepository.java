package com.antoniop.dailycalories.Repositories;

import com.antoniop.dailycalories.Entities.Day;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "/days")
public interface DayRepository extends MongoRepository<Day, String> {
    public List<Day> findByUserId(String id);
}
