package com.thoughtworks.aceleradora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Collections.emptyList;

@RestController
@RequestMapping("/airline")
public class BuscaController {

    private VooRepository vooRepository;

    @Autowired
    public BuscaController(VooRepository vooRepository) {
        this.vooRepository = vooRepository;
    }

    @GetMapping("/busca")
    public List<Aeroporto> origens() {
        return emptyList();
    }

}
