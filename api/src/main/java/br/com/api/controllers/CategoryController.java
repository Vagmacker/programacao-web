package br.com.api.controllers;

import br.com.api.models.entities.Category;
import br.com.api.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Classe de controle referente a 'Categorias'.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    /**
     * Retorna todas as categorias.
     *
     * @return {@link Category}
     */
    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(this.categoryService.findAll());
    }

    /**
     * Retorna uma categoria especifica.
     *
     * @param id : Long
     * @return {@link Category}
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.categoryService.findOne(id));
    }

    /**
     * Salva uma categoria.
     *
     * @param category : Category
     * @return {@link Category}
     */
    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.OK).body(this.categoryService.save(category));
    }

    /**
     * Atualiza uma categoria.
     *
     * @param category : {@link Category}
     * @return {@link Category}
     */
    @PutMapping
    public ResponseEntity<?> update(@Valid @RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.OK).body(this.categoryService.update(category, category.getId()));
    }

    /**
     * Deleta uma categoria.
     *
     * @param id : Long
     * @return {@link ResponseEntity}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.categoryService.delete(id));
    }
}
