package br.com.api.services;

import br.com.api.entities.Category;
import br.com.api.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Classe que implementa a interface {@link CategoryService}.
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    /**
     * Retorna todas as {@link Category}.
     *
     * @return @link Category
     */
    @Override
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    /**
     * Retorna uma {@link Category} conforme o id.
     *
     * @return @link Category
     */
    @Override
    public Optional<Category> findOne(Long id) {
        return this.categoryRepository.findById(id);
    }
}
