export const menus = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic:true,  //公开的
    comp:'../pages/home'
  },
  {
    title: '商品',
    key: '/products',
    icon: 'products',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: 'category',
        comp:'../pages/category'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'product',
        comp:'../pages/product'
      },
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'user',
    comp:'User'
  },
  {
    title: '权限管理',
    key: '/role',
    icon: 'role',
    comp:'Role'
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'order',
    comp:'Order'
  },
  {
    title: '图形图表',
    key: '/charts',
    icon: 'chart',
    children: [
      {
        title: '柱状图',
        key: '/charts/bar',
        icon: 'bar',
        comp:'Bar'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line',
        comp: 'Line'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie',
        comp: 'Pie'
      },
    ]
  },
]