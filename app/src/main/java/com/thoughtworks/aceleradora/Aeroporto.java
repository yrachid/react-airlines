package com.thoughtworks.aceleradora;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@NoArgsConstructor
class Aeroporto {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String iata;

    private String nome;

    private String cidade;

    public Aeroporto(String iata, String nome, String cidade) {
        this.iata = iata;
        this.nome = nome;
        this.cidade = cidade;
    }
}
