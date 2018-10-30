package com.thoughtworks.aceleradora;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@AllArgsConstructor
class Aeroporto {

    @Id
    private String iata;

    private String nome;

    private String cidade;

    public Aeroporto() {
    }
}
