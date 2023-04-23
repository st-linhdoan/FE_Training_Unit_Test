import { Cart } from '../cart';

const product1 = {
  id: '001',
  name: 'P1',
  price: 100,
  quantity: 1,
  lineProduct: 'Orange'
};

const product2 = {
  id: '002',
  name: 'P2',
  price: 100,
  quantity: 4,
  lineProduct: 'Mango'
};

const lineProduct = [
  {
    name: 'Orange',
    discount: [
      {
        number: 1,
        percent: 5
      },
      {
        number: 2,
        percent: 10
      },
      {
        number: 3,
        percent: 20
      }
    ]
  },
  {
    name: 'Mango',
    discount: [
      {
        number: 1,
        percent: 5
      },
      {
        number: 2,
        percent: 10
      },
      {
        number: 3,
        percent: 20
      }
    ]
  },
];

describe('test crud product', () => {

  test('test add product null', () => {
    const cart = new Cart([], []);
    cart.addProduct(null);
    expect(cart.productList).toHaveLength(0);

    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(0);
  });

  test('test crud have one product', () => {
    const productUpdate = {
      id: '001',
      name: 'P22',
      price: 100,
      quantity: 2,
      lineProduct: 'Mango'
    };
    const cart = new Cart([], lineProduct);

    cart.addProduct(product1);
    expect(cart.productList).toHaveLength(1);
    
    cart.addProduct(product1);
    expect(cart.productList).toHaveLength(1);
    
    expect(cart.productList).toContain(product1);

    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(95);

    cart.updateProduct(productUpdate);
    expect(cart.productList).toContain(productUpdate);
    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(180);

    cart.removeProduct('001');
    expect(cart.productList).not.toMatchObject(product1);
    expect(cart.productList).toHaveLength(0);
  });

  test('test crud have many product', () => {
    const cart = new Cart([], lineProduct);

    cart.addProduct(product1);
    expect(cart.productList).toHaveLength(1);
    expect(cart.productList).toContain(product1);

    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(95);

    cart.addProduct(product2);
    expect(cart.productList).toHaveLength(2);
    expect(cart.productList).toContain(product2);

    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(415);

    const productUpdate = {
      id: '002',
      name: 'P22',
      price: 100,
      quantity: 2,
      lineProduct: 'Mango'
    };
    cart.updateProduct(productUpdate);
    expect(cart.productList).toContain(productUpdate);
    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(275);

    cart.removeProduct('002');
    expect(cart.productList).not.toMatchObject(product1);
    expect(cart.productList).toHaveLength(1);
    
    cart.getTotalPrice();
    expect(cart.getTotalPrice()).toEqual(95);
  });

});
