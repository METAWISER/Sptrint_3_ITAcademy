import { Middleware } from "./Middleware";
import { Calculator } from "./Calculator";
import { JsonReader } from "./JsonReader";


const read = new JsonReader().read();

const middleware = new Middleware<typeof read>();

middleware.addMiddleware((params, next) => {
  console.log("Before first middleware:", params);
  params.n1 = params.n1 ** 2;
  params.n2 = params.n2 ** 2;
  console.log("After first middleware:", params, "\n");
  next();
});

middleware.addMiddleware((params, next) => {
  console.log("Before second middleware:", params);
  params.n1 = params.n1 ** 3;
  params.n2 = params.n2 ** 3;
  console.log("After second middleware:", params, "\n");
  next();
});

middleware.addMiddleware((params, next) => {
  console.log("Before third middleware:", params);
  params.n1 = params.n1 / 2;
  params.n2 = params.n2 / 2;
  console.log("After third middleware:", params, "\n");
  next();
});

const trasnformedParams = middleware.execute(read);

const calculator = new Calculator(trasnformedParams);

console.log("Sum:", calculator.add());
console.log("Substract: ", calculator.substract());
console.log("Multiply: ", calculator.multiply());
