package br.com.api.services;

import br.com.api.entities.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    public List<Category> findAll();

    public Optional<Category> findOne(Long id);
}
