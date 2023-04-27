import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';


export const EcommerceApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
