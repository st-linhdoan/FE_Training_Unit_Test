type Discount = {
  percent: number;
  number: number;
}

type LineProduct = {
  name: string,
  discount: Discount[];
}

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  lineProduct: string;
  // discount: Discount[];
}

export class Cart {
  productList: Product[] = [];
  lineProduct: LineProduct[] = [];

  constructor(product: Product[], lineProduct: LineProduct[]) {
    this.productList = [...product];
    this.lineProduct = [...lineProduct];
  }

  getProductList() {
    return this.productList;
  }

  addLineProduct(lineProduct: LineProduct[]){
    if (lineProduct) {
      this.lineProduct = lineProduct;
    }
  }

  addProduct(product: Product) {
    if (product) {
      this.productList.push(product);
    }
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
      const lineProductItem = this.lineProduct.find(item => item.name === product.lineProduct);
      lineProductItem.discount.forEach((item: Discount) => {
        if (product.quantity >= item.number && item.percent > discount) {
          discount = item.percent;
        }
      });
      return sum + product.price * product.quantity * (100 - discount) / 100;
    }, 0);
  }
}
