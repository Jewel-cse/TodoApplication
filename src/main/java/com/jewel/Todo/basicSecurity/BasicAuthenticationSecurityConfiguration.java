package com.jewel.Todo.basicSecurity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicAuthenticationSecurityConfiguration {
    //filter chain
    //all request are authenticated
    //basic authentication
    //state less rest api
    //disabling CSRF

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        //1:basic auth
        //2:Response to preflight request doesn't pass access control check

        return http.authorizeHttpRequests(
                auth->auth
                        .requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                        .anyRequest().authenticated()
        )
        .httpBasic(Customizer.withDefaults())
        .sessionManagement(
                session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )
        .csrf().disable()
        .build();
    }
}
