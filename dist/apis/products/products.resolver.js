"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const products_service_1 = require("./products.service");
const update_product_input_1 = require("./dto/update-product.input");
let ProductResolver = class ProductResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    fetchProducts() {
        return this.productsService.findAll();
    }
    fetchProduct(productId) {
        return this.productsService.findOne({ productId });
    }
    createProduct(createProductInput) {
        return this.productsService.create({ createProductInput });
    }
    async updateProduct(productId, updateProductInput) {
        return this.productsService.update({ productId, updateProductInput });
    }
    deleteProduct(productId) {
        return this.productsService.delete({ productId });
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "fetchProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "fetchProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Args)('UpdateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_input_1.UpdateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductResolver);
//# sourceMappingURL=products.resolver.js.map