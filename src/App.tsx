import { ThemeProvider } from './theme/ThemeProvider';
import AppRouter from './AppRouter';
import { ReactQueryProvider } from './lib/query-provider';
import { AuthProvider } from './context/auth';

const App = () => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default App;
