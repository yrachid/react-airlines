package com.thoughtworks.aceleradora;

import org.junit.Test;

import static java.util.Arrays.asList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class BuscaControllerTest {

    @Test
    public void responds_with_all_available_airports() {

        AeroportoRepository repository = mock(AeroportoRepository.class);

        when(repository.findAll()).thenReturn(asList(
                new Aeroporto("POA", "Porto Alegre", "Porto Alegre"),
                new Aeroporto("SAO", "Sampa", "Sao Paulo"))
        );

        assertThat(new BuscaController(repository).aeroportos(), is(asList(
                new Aeroporto("POA", "Porto Alegre", "Porto Alegre"),
                new Aeroporto("SAO", "Sampa", "Sao Paulo")))
        );

    }
}