export default {
  //setting up antd
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  //setting up router
  routes: [
    {
      path: '/',
      component: './index',
    },
    {
      path: '/itemListing',
      component: './itemListing',
    },
    {
      path: '/items',
      component: './items',
    },
    {
      component: './notfound',
    },
  ],
};
