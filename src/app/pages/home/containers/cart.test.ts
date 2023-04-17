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

const productUpdate = {
  id: '001',
  name: 'P2',
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

describe('test crud', () => {
  describe('add product', () => {
    const cart = new Cart([]);
    const mockAddPrd = jest.spyOn(Cart.prototype, 'addProduct');

    it('test add prd', () => {
      cart.addProduct(product);
      expect(mockAddPrd).toBeCalled();
      expect(mockAddPrd).toBeCalledWith(product);
    });

    it ('test add prd success', () => {
      cart.getProductList();
      expect(cart.productList).toHaveLength(1);
      expect(cart.productList).toEqual([product]);
    });
  
  });

  describe('get product', () => {
    const cart = new Cart([product]);
    const mockGetPrd = jest.spyOn(Cart.prototype, 'getProduct');
    const productItem = cart.getProduct('001');

    it('getProduct is called', () => {
      expect(mockGetPrd).toBeCalled();
      expect(mockGetPrd).toBeCalledWith('001');
    });

    it('getProduct success', () => {
      expect(productItem).toEqual(product);
    });
  
  });

  describe('remove product', () => {
    const cart = new Cart([product]);
    const mockRemovePrd = jest.spyOn(Cart.prototype, 'removeProduct');

    it('removeProduct is called', () => {
      cart.removeProduct('001');
      expect(mockRemovePrd).toBeCalled();
      expect(mockRemovePrd).toBeCalledWith('001');
    });

    it('removeProduct success', () => {
      cart.getProductList();
      expect(cart.productList).toEqual([]);
    });

  });

  describe('update product', () => {
    const cart = new Cart([product]);
    const mockUpdatePrd = jest.spyOn(Cart.prototype, 'updateProduct');
    cart.updateProduct(productUpdate);

    it('updateProduct is called', () => {
      expect(mockUpdatePrd).toBeCalled();
      expect(mockUpdatePrd).toBeCalledWith(productUpdate);
    });

    it('updateProduct success', () => {
      cart.getProductList();
      expect(cart.productList).toEqual([productUpdate]);
    });

  });

  describe('getTotalPayment', () => {
    const cart = new Cart([product]);
    const mockGetTotal = jest.spyOn(Cart.prototype, 'getTotalPayment');
    cart.getTotalPayment();

    it('getTotalPayment is called', () => {
      expect(mockGetTotal).toBeCalled();
    });
    it('getTotalPayment success', () => {
      expect(cart.getTotalPayment()).toEqual(95);
    });
  });
});
