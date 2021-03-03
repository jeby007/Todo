export const menus = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic:true  //公开的
  },
  {
    title: '商品',
    key: '/products',
    icon: 'products',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: 'category'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'product'
      },
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '权限管理',
    key: '/role',
    icon: 'role',
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'order',
  },
  {
    title: '图形图表',
    key: '/charts',
    icon: 'chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie'
      },
    ]
  },
]