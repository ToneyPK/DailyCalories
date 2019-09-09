package com.antoniop.dailycalories.Repositories;

import com.antoniop.dailycalories.Entities.Food;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "/food")
public interface FoodRepository extends MongoRepository<Food, String> {
    public List<Food> findByDayId(String id);
}
