package br.com.api.exceptions;

/**
 * Classe de customização de exceptions.
 */
public class CustomException extends RuntimeException {

    private String message;
    private Object data;

    /**
     * construtor padrão da classe.
     */
    public CustomException() {
    }

    /**
     * construtor da classe.
     *
     * @param message: String
     * @param data : Object
     */
    public CustomException(String message, Object data) {
        this.message = message;
        this.data = data;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
