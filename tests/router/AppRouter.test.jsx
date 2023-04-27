import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';


describe ( 'Pruebas en <AppRouter />', () => {

    test ( 'Debe mostrar el componente de marvel si esta autenticado    ', () => {

        const contextValue2 = {
            logged: true,
            user: {
                id: 'ADB',
                name: 'Duber Galvis',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue2 }>                
                    <AppRouter />                
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('MarvelPage') ).toBeTruthy();
    });

    test( 'Debe de mostar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>                
                    <AppRouter />                
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBe(2);
    });

});
