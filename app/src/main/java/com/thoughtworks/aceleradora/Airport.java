package com.thoughtworks.aceleradora;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
class Airport {

    @Id
    private String iata;

    private String name;

    private String city;

    private String country;

    private Double latitude;

    private Double longitude;

    private String timezone;

}
