package com.thoughtworks.aceleradora;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airline")
@AllArgsConstructor
public class SearchController {

    private AirportRepository repository;

    @GetMapping("/search")
    public List<Airport> airports() {
        return repository.findAll();
    }

}
