package com.celebrateit.dao;

import com.celebrateit.pojo.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<Categories, Integer> {
}
