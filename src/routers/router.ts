// Modules
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';
import { isEmpty } from 'lodash';

import authenticationMiddleware from './middlewares/authenticationMiddleware';
import routes from './routes.json';
import { store } from 'app/store';

const router = createRouter(routes);
router.usePlugin(browserPlugin());

if (process.env.ENABLE_ROUTER_LOGS === 'true') {
    router.usePlugin(loggerPlugin);
}

router.useMiddleware(authenticationMiddleware);
router.setDependency('store', store);

if (!isEmpty(process.env.ROUTER_ROOT)) {
    router.setRootPath(process.env.ROUTER_ROOT || '');
}

router.start();

export default router;
