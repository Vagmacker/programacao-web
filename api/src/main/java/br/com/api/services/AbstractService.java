package br.com.api.services;

import br.com.api.models.dtos.BaseResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Classe abstrata de negócio da aplicação.
 */
public abstract class AbstractService<T> {

    public abstract JpaRepository<T, Long> getRepository();

    /**
     * Retorna todas os dados.
     *
     * @return {@link BaseResponse}
     */
    public BaseResponse findAll() {
        return new BaseResponse(this.getRepository().findAll(), "Sucesso");
    }

    /**
     * Retorna um dado conforme o id.
     *
     * @return @link Category
     */
    public BaseResponse findOne(Long id) {
        return new BaseResponse(this.getRepository().findById(id), "Sucesso");
    }

    /**
     * Salva um dado da entitie passada.
     *
     * @param entitie : T
     * @return {@link BaseResponse}
     */
    @Transactional()
    public BaseResponse save(T entitie) {
        T data = null;
        String message;

        this.validateRequiredFields(entitie);

        try {
            data = this.getRepository().save(entitie);
            message = "Salvo com sucesso";
        } catch (RuntimeException e) {
            message = e.getCause().toString();
        }

        return new BaseResponse(data, message);
    }

    /**
     * Atualiza um registro.
     *
     * @param entitie : T
     * @return {@link BaseResponse}
     */
    @Transactional
    public BaseResponse update(T entitie) {
        T data = null;
        String message;

        this.validateRequiredFields(entitie);

        try {
            data = this.getRepository().save(entitie);
            message = "Atualizado com sucesso";
        } catch (RuntimeException e) {
            message = e.getCause().toString();
        }

        return new BaseResponse(data, message);
    }

    /**
     * Deleta um registro.
     *
     * @param id : Long
     * @return {@link BaseResponse}
     */
    @Transactional
    public BaseResponse delete(Long id) {
        T data = null;
        String message;

        try {
            this.getRepository().deleteById(id);
            message = "Deletado com sucesso";
        } catch (RuntimeException e) {
            message = e.getCause().toString();
        }

        return new BaseResponse("", message);
    }

    public abstract void validateRequiredFields(T entitie);
}
