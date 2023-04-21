class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Pizza extends Product {
  constructor(name, price) {
    super(name, price);
    this.type = 'Pizza';
  }

  getDescription() {
    return `Pizza ${this.name} - $${this.price}`;
  }
}

class Burger extends Product {
  constructor(name, price) {
    super(name, price);
    this.type = 'Burger';
  }

  getDescription() {
    return ` Hamburguer ${this.name} - $${this.price}`;
  }
}

class Creator {
  createProduct(name, price) {
    throw new Error('O método createProduct deve ser implementado');
  }
}

class PizzaFactory extends Creator {
  createProduct(name, price) {
    return new Pizza(name, price);
  }
}

class BurgerFactory extends Creator {
  createProduct(name, price) {
    return new Burger(name, price);
  }
}
