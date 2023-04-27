import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe ( 'Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Strider',
            id: 'ASD147',
        },
        logout: jest.fn(),
    }

    beforeEach( () => jest.clearAllMocks() );

    test( 'Debe de mostrar el nombre del usuario logeado', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/dc']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Strider') ).toBeTruthy();
    });

    test( 'Debe de llamar el logout y el navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/dc']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true});
    });
});
