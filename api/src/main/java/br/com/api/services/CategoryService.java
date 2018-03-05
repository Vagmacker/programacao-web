package br.com.api.services;

import br.com.api.models.entities.Category;
import br.com.api.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

/**
 * Classe de negócio referente a 'Categorias'.
 */
@Service
public class CategoryService extends AbstractService<Category> {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public JpaRepository<Category, Long> getRepository() {
        return categoryRepository;
    }

    @Override
    public void validateRequiredFields(Category category) {
    }
}
