package br.com.api.services;

import br.com.api.exceptions.CustomException;
import br.com.api.models.entities.Product;
import br.com.api.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

/**
 * Classe de negócio referente a 'Produtos'.
 */
@Service
public class ProductService extends AbstractService<Product> {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public JpaRepository<Product, Long> getRepository() {
        return productRepository;
    }

    @Override
    public void validateRequiredFields(Product product) {
    }

//    public Product salvar(Product product) {
//        this.validateRequiredFields(product);
//        Product newProduct = null;
//
//        if (product.getId() != 0) {
//            Product p = productRepository.getOne(product.getId());
//
//            if (product.getCategory() == null) {
//                product.setCategory(p.getCategory());
//            }
//
//            if (p != null) {
//                newProduct = productRepository.save(product);
//            } else {
//                throw new CustomException("Produto não encontrado", null);
//            }
//        } else {
//            Product p = productRepository.findByName(product.getName());
//
//            if (p != null) {
//                throw new CustomException("Produto já cadastrado", null);
//            }
//
//            newProduct = productRepository.save(product);
//        }
//
//        return newProduct;
//    }
}
