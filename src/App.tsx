import { ThemeProvider } from './theme/ThemeProvider';
import AppRouter from './AppRouter';
import { ReactQueryProvider } from './lib/query-provider';

const App = () => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <AppRouter />
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default App;
