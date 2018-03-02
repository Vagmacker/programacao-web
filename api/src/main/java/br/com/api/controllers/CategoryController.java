package br.com.api.controllers;

import br.com.api.entities.Category;
import br.com.api.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

/**
 * Classe de controle referente a 'Categorias'.
 */
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
    public List<Category> getAll() {
        return this.categoryService.findAll();
    }

    /**
     * Retorna uma categoria especifica.
     *
     * @param id : Long
     * @return {@link Category}
     */
    @GetMapping("/{id}")
    public Optional<Category> getOne(@PathVariable("id") Long id) {
        return this.categoryService.findOne(id);
    }

    /**
     * Valida o preenchimento dos campos obrigatorios.
     *
     * @param category
     */
    private void validarCamposObrigatorios(Category category) throws Exception {
        boolean errorExists = false;

        if (category.getName() == null) {
            errorExists = true;
        }

        if (errorExists) {
            throw new Exception();
        }
    }
}
