package br.com.api.controllers;

import br.com.api.models.entities.Product;
import br.com.api.services.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Classe de controle referente a 'Produtos'.
 */
@Api(description = "Classe de controle referente a 'Produtos'.")
@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private final ProductService productsService;

    @Autowired
    public ProductController(ProductService productsService) {
        this.productsService = productsService;
    }

    /**
     * Retorna todas os produtos.
     *
     * @return {@link Product}
     */
    @ApiOperation(value = "Retorna todas os produtos", response = Product[].class)
    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(this.productsService.findAll());
    }

    /**
     * Retorna um produto especifico.
     *
     * @param id : Long
     * @return {@link Product}
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.productsService.findOne(id));
    }

    /**
     * Salva um Produto.
     *
     * @param product : Product
     * @return {@link Product}
     */
    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.OK).body(this.productsService.save(product));
    }

    /**
     * Atualiza um Produto.
     *
     * @param product : {@link Product}
     * @return {@link Product}
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody Product product, @PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.productsService.update(product, id));
    }

    /**
     * Deleta um Produto.
     *
     * @param id : Long
     * @return {@link ResponseEntity}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.productsService.delete(id));
    }
}
