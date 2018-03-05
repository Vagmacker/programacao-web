package br.com.api.util;

/**
 * Classe Utilitária da aplicação.
 */
public class Util {

    /**
     * Verifica se o argumento esta em branco.
     *
     * @param valor : String
     * @return valor
     */
    public static boolean isBlank(final String valor) {
        return isEmpty(valor) || valor.trim().length() == 0;
    }

    /**
     * Verifica se o argumento esta vázio.
     *
     * @param valor : String
     * @return valor
     */
    private static boolean isEmpty(String valor) {
        return  valor == null || "".equals(valor);
    }
}
