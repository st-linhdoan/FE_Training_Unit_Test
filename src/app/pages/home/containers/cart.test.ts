import { Cart } from '../cart';

const product = {
  id: '001',
  name: 'P1',
  price: 100,
  quantity: 1,
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
};

describe('test crud product', () => {
  describe('test add product', () => {
    const cart = new Cart([]);
    cart.addProduct(product);
    it('add product, length product list have > 0', () => {
      expect(cart.productList).toHaveLength(1);
    });
    it('add product, product list should be return product', () => {
      expect(cart.productList).toContain(product);
    });
  });

  describe('test get product', () => {
    const cart = new Cart([product]);
    const productItem = cart.getProduct('001');

    it('get product should be return product', () => {
      expect(productItem).toMatchObject(product);
    });
  
  });

  describe('test remove product', () => {
    const cart = new Cart([product]);
    it('removeProduct success should return array not have this product', () => {
      cart.getProductList();
      expect(cart.productList).not.toMatchObject(product);
    });
  });

  describe('test update product', () => {
    const productUpdate = {
      id: '001',
      name: 'P22',
      price: 100,
      quantity: 1,
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
    };
    const cart = new Cart([product]);
    cart.updateProduct(productUpdate);
    
    it('updateProduct should return new value', () => {
      cart.getProductList();
      expect(cart.productList).toContain(productUpdate);
    });
  });

  describe('test getTotalPrice', () => {
    const cart = new Cart([product]);
    cart.getTotalPrice();
    it('getTotalPrice should return equal number after caculator', () => {
      expect(cart.getTotalPrice()).not.toEqual(105);
    });
    it('getTotalPrice should return equal number after caculator', () => {
      expect(cart.getTotalPrice()).toEqual(95);
    });
  });

});
