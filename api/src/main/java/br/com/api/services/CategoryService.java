package br.com.api.services;

import br.com.api.entities.Category;

import java.util.List;

public interface CategoryService {

    public List<Category> findAll();

    public Category findOne(Long id);
}
