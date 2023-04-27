import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe ( 'Pruebas en <SearchPage />', () => {

    beforeEach( () => jest.clearAllMocks() );

    test( 'Debe de mostrarce correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ). toMatchSnapshot();
    });

    test( 'Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = sreeen.getByRole('textBox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( input.value ).toContain('/assets/heroes/dc-bacman.jpg');

        const divAlert = screen.getByLabelText('alert-danger');
        expect( divAlert.style.display ).toBe('none');
    });

    test( 'Debe de mostrar un error si no se encuentra el hero', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const divAlert = screen.getByLabelText('alert-danger');
        expect( divAlert.style.display ).toBe('');
    });

    test( 'Debe de llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole( 'textbox' );
        fireEvent.change( input, { target: { name: 'searchText', value: 'superman' } });

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledwith('?q=superman');
    });
});
