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
export const category = {
  data:[
    {
      name:'户外装备',
      rank:'一级分类',
      fit_type:['装备','羽绒服'],
      operate:['del'],
      c_name:'太刀',
      c_date:'2020-03-04',
      key:'no1'
    },
    {
      name:'数码',
      rank:'一级分类',
      fit_type:['电脑','手机'],
      operate:['del','change'],
      c_name:'太刀',
      c_date:'2020-03-04',
      key:'no2'
    },
    {
      name:'食品',
      rank:'一级分类',
      fit_type:['回锅肉','土豆片'],
      operate:['change'],
      c_name:'太刀',
      c_date:'2020-03-04',
      key:'no3'
    }
  ],
  columns:[
    {
      title:'分类名称',
      dataIndex:'name',
      align:'center'
    },
    {
      title:'分类级别',
      dataIndex:'rank',
      align:'center'
    },
    {
      title:'适用商品类型',
      dataIndex:'fit_type',
      align:'center'
    },
    {
      title:'创建人',
      dataIndex:'c_name',
      align:'center'
    },
    {
      title:'创建日期',
      dataIndex:'c_date',
      align:'center'
    },
    {
      title:'操作',
      dataIndex:'operate',
      align:'center'
    },
  ]
}
export const products = {
  data:[
    {
      name:'羽绒服',
      parent:'一级分类',
      price:699,
      num:100,
      u_date:'2020-03-04',
      operate:['edit','change'],
      status:'0',
      key:'0'
    },
    {
      name:'电脑',
      parent:'一级分类',
      price:4699,
      num:10,
      u_date:'2020-03-04',
      operate:['edit','change'],
      status:'1',
      key:'1'
    },
    {
      name:'手机',
      parent:'三级分类',
      price:3699,
      num:11,
      u_date:'2020-03-04',
      operate:['edit','change'],
      status:'0',
      key:'2'
    },
  ],
  columns:[
    {
      title:'商品名称',
      dataIndex:'name',
      align:'center'
    },
    {
      title:'所属分类',
      dataIndex:'parent',
      align:'center'
    },
    {
      title:'商品价格',
      dataIndex:'price',
      align:'center'
    },
    {
      title:'库存',
      dataIndex:'num',
      align:'center'
    },
    {
      title:'更新日期',
      dataIndex:'u_date',
      align:'center'
    },
    {
      title: '上下架',
      dataIndex: 'status',
      align: 'center'
    },
    {
      title:'操作',
      dataIndex:'operate',
      align:'center'
    },
  ]
}
