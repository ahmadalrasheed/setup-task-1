import { isEmpty, get, includes, find } from 'lodash';
import * as pages from 'pages';
import { DashboardLayout, AuthLayout } from 'layout';

const pageRoutes = {
    home: {
        Page: pages.Home,
        Layout: DashboardLayout,
    },
    signin: {
        Page: pages.Signin,
        Layout: AuthLayout,
    },
    '404': {
        Page: pages.NotFound,
        Layout: AuthLayout,
    },
    loading: {
        Page: pages.Loading,
        Layout: DashboardLayout,
    },
};

const getPageStructure = (route: string) => {
    if (isEmpty(route)) {
        return 'loading...';
    }

    const routePaths = Object.keys(get(route, 'meta.params', {}));
    const pageRoute =
        find(routePaths.reverse(), (route: string) => includes(Object.keys(pageRoutes), route)) ||
        '404';

    return pageRoutes[pageRoute];
};


function App() {
    return <div className="App">Home</div>;
}

export default App;
