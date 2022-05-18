import { pageStructure } from 'utils';
import { AppContainer } from '../styles/styles.styled';
import { useRouteNode } from 'react-router5';

function App() {
    const { route } = useRouteNode('');
    const { Layout, Page } = pageStructure(route);

    return (
        <AppContainer>
            <div className="App">
                <Layout>
                    <Page />
                </Layout>
            </div>
        </AppContainer>
    );
}

export default App;
