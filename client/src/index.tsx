import { App } from 'app/App';
import { StoreProvider } from 'app/providers/StoreProvider';
import { render } from 'react-dom';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
);
