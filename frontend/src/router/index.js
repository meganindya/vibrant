import { createRouter, createWebHistory } from 'vue-router';
import { getUser } from '@/utils/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: {
        name: 'Catalog',
      },
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login/Login.vue'),
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: () => import('../pages/Catalog/Catalog.vue'),
    },

    {
      path: '/workbook/:uuid/document',
      name: 'Workbook Document',
      component: () => import('../pages/WorkbookDocument/WorkbookDocument.vue'),
      props: true,
    },
    {
      path: '/workbook/:uuid/tree',
      name: 'Workbook Tree',
      component: () => import('../pages/WorkbookTree/WorkbookTree.vue'),
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = getUser();

  if (user === null && to.name !== 'Login') {
    return next({
      name: 'Login',
    });
  }

  if (user !== null && to.name === 'Login') {
    return next({
      name: from.name,
    });
  }

  return next();
});

export default router;
