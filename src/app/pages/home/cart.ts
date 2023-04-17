type Discount = {
  percent: number;
  number: number;
}

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: Discount[];
}

export class Cart {
  productList: Product[] = [];

  constructor(data: Product[]) {
    this.productList = [...data];
  }

  getProductList() {
    return this.productList;
  }

  addProduct(product: Product) {
    this.productList.push(product);
  }

  getProduct(id: string) {
    return this.productList.find((item: Product) => item.id === id);
  }
  
  removeProduct(id: string) {
    this.productList = this.productList.filter((item: Product) => item.id !== id );
  }

  updateProduct(product: Product) {
    this.productList = this.productList.map((item: Product) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
  }

  getTotalPrice() {
    return this.productList.reduce((sum, product: Product) => {
      let discount = 0;
      product.discount.forEach((item: Discount) => {
        if (product.quantity >= item.number && item.percent > discount) {
          discount = item.percent;
        }
      });
      return sum + product.price * product.quantity * (100 - discount) / 100;
    }, 0);
  }
}
