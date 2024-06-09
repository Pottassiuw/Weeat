import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "./src/server.ts",
    "./src/@types/user.d.ts",
    "./src/middlewares/auth.ts",
    "./src/controllers/favoriteController.ts",
    "./src/controllers/planController.ts",
    "./src/controllers/productController.ts",
    "./src/controllers/storeController.ts",
    "./src/controllers/userController.ts",
    "./src/routes/favoriteRoutes.ts",
    "./src/routes/planRoutes.ts",
    "./src/routes/productRoutes.ts",
    "./src/routes/storesRoutes.ts",
    "./src/routes/usersRoutes.ts",
    "./src/services/authService.ts",
    "./src/services/favoriteService.ts",
    "./src/services/planService.ts",
    "./src/services/productService.ts",
    "./src/services/storeService.ts",
    "./src/services/userService.ts",
  ],
  format: ["cjs"],
  target: "es2020",
  loader: {
    ".html": "file",
  },
  external: ["mock-aws-s3", "aws-sdk", "nock"],
});
