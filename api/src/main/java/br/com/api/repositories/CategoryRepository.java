package br.com.api.repositories;

import br.com.api.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface de Repositorios referente a 'Categorias'
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {}
