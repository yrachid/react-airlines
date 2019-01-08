package com.thoughtworks.aceleradora;

import org.junit.Test;

import static org.mockito.Mockito.mock;

public class SearchControllerTest {

    @Test
    public void responds_with_all_available_airports() {

        AeroportoRepository repository = mock(AeroportoRepository.class);

//        when(repository.findAll()).thenReturn(asList(
//                new Airport("POA", "Porto Alegre", "Porto Alegre"),
//                new Airport("SAO", "Sampa", "Sao Paulo"))
//        );
//
//        assertThat(new SearchController(repository).airports(), is(asList(
//                new Airport("POA", "Porto Alegre", "Porto Alegre"),
//                new Airport("SAO", "Sampa", "Sao Paulo")))
//        );

    }
}
