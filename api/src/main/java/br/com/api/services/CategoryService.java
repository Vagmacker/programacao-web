package br.com.api.services;

import br.com.api.entities.Category;
import java.util.List;
import java.util.Optional;

/**
 * Interface de negócio referente a 'Categorias'.
 */
public interface CategoryService {

    /**
     * Retorna todas as {@link Category}.
     *
     * @return @link Category
     */
    public List<Category> findAll();

    /**
     * Retorna uma {@link Category} conforme o id.
     *
     * @return @link Category
     */
    public Optional<Category> findOne(Long id);
}
