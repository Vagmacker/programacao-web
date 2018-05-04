package br.com.api.repositories;

import br.com.api.models.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface de Repositorios referente a 'Produtos'
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    /**
     *  Recupera o produto pelo nome.
     *
     * @param name
     * @return
     */
    public Product findByName(String name);
}
