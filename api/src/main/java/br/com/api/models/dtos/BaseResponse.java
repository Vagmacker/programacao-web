package br.com.api.models.dtos;

/**
 * Classe base para resposta da API.
 */
public class BaseResponse {

    /**
     * Construtor da classe.
     *
     * @param data    : Object
     * @param message : String
     */
    public BaseResponse(Object data, String message) {
        this.data = data;
        this.message = message;
    }


    private Object data;
    private String message;

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
