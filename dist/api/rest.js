"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { where } = req.body;
    try {
        const posts = yield prisma.product.findMany({ where, orderBy: { createdAt: 'desc' } });
        res.json({ posts: posts || [] });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.post('/products/offset', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, take, where } = req.body;
    try {
        const posts = yield prisma.product.findMany({
            skip: Number(skip),
            take: Number(take),
            where,
            orderBy: { createdAt: 'desc' }
        });
        res.json({ posts: posts || [] });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.post('/products/cursor', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cursor, take, where } = req.body;
    try {
        const posts = yield prisma.product.findMany({
            cursor,
            take: Number(take),
            where,
            orderBy: { createdAt: 'desc' }
        });
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.get(`/product/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield prisma.product.findUnique({ where: { id } });
        res.json({ post: post || {} });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.post('/product/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, images, url, merchant } = req.body;
    try {
        const posts = yield prisma.product.create({
            data: {
                title: title,
                images: { set: images != null ? images || [] : [] },
                url: url,
                merchant: merchant
            }
        });
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.post('/product/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, images, url, merchant } = req.body;
    try {
        const posts = yield prisma.product.update({
            where: { id: id },
            data: {
                title: title,
                images: images != null ? { set: images } : undefined,
                url: url,
                merchant: merchant
            }
        });
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.post('/product/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const posts = yield prisma.product.delete({ where: { id: id } });
        res.json(posts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({});
    }
}));
app.listen(3000, () => console.log('🚀 Server ready at: http://localhost:3000'));
//# sourceMappingURL=rest.js.map