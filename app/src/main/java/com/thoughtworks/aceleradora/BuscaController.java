package com.thoughtworks.aceleradora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airline")
public class BuscaController {

    private VooRepository vooRepository;

    private AeroportoRepository repository;

    @Autowired
    public BuscaController(VooRepository vooRepository, AeroportoRepository repository) {
        this.vooRepository = vooRepository;
        this.repository = repository;
    }

    @GetMapping("/busca")
    public List<Aeroporto> origens() {
        return repository.findAll();
    }

}
