//mock data
let data=[
    {
        key: '1',
        name: 'CD',
        price: 50,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/CD-ROM.png',
        description: 'Black',
        expiry: '2019-01-01',
      },
      {
          key: '2',
          name: 'Mobile Phone',
          price: 200,
          photo: 'https://static.macupdate.com/products/15113/l/phonedirector-for-nokia-logo.png?v=1568296774',
          description: 'Black',
          expiry: '2019-01-01',
        },
        {
          key: '800',
          name: 'BMW M3',
          price: 50,
          photo: 'https://lh3.googleusercontent.com/29FJNEMEz-fcwhVwHhR9olb9QPGIbMegwA3BL08JC3sBoCNt68s8nySZQtjlufqpB1YgO_rIpa8=w128-h128-e365',
          description: 'Black',
          expiry: '2019-01-01',
        },
        {
          key: '4',
          name: 'MacBook',
          price: 100,
          photo: 'https://mingersoft.com/blog/wp-content/uploads/2012/10/Apple-Logo.png',
          description: 'Black',
          expiry: '2019-01-01',
        },
        {
          key: '5',
          name: 'MacBook',
          price: 100,
          photo: 'https://mingersoft.com/blog/wp-content/uploads/2012/10/Apple-Logo.png',
          description: 'Black',
          expiry: '2019-01-01',
        },
]

export default {
    "get /api/items" : function(req, res){
        setTimeout(() => {
            res.json({result: data})
        }, 1000);
    }
}