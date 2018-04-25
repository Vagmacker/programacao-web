package br.com.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("br.com.api.controllers"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(this.documentation());
    }

    /**
     * Descrição da documentação da api.
     */
    private ApiInfo documentation() {
        return new ApiInfoBuilder()
                .title("Spring Boot Application")
                .description("Api de Categorias")
                .version("1.0")
                .contact(new Contact("João Vagmacker", "http://localhost:9000", "vagmackerdsm@gmail.com"))
                .license("Apache License Version 2.0")
                .licenseUrl("https://www.apache.org/license/LICENSE-2.0")
                .build();
    }
}
