package br.com.api.models.entities;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

/**
 * Classe de modelo referente a 'Categoria'.
 */
@Entity
@Table(name = "categories")
public class Category implements Serializable {

    /**
     * Construtor da classe.
     */
    public Category() {
    }

    /**
     * Construtor da classe.
     *
     * @param id:   Long
     * @param name: String
     */
    public Category(Long id, @NotEmpty String name) {
        this.id = id;
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    @NotEmpty
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
