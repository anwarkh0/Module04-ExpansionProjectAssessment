
import db from '../models/index';

const { UserModel, ProductModel } = db;

export const addProduct = async (req, res) => {
    const { title, category, price, description, supplier, userId } = req.body;
    try {

        const newProduct = await ProductModel.create({
            title,
            category,
            price,
            description,
            supplier,
            userId

        });



        res.status(200).json({ "message": "Product added successfully", "data": newArtinewProductcle });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {

        const Product = await ProductModel.findByPk(id, { include: [UserModel] });


        if (Product) {
            res.status(200).json({ "data": Product });
        }
        else {
            res.status(404).json({ "message": "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getAllProduct = async (req, res) => {

    try {

        const Products = await ProductModel.findAll({ include: [UserModel] });



        res.status(200).json({ "data": Products });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const updateProduct = async (req, res) => {
    const id = req.body.id;
    const { title, category, price, description, supplier, userId } = req.body;

    try {
        const updatedProduct = await ProductModel.update(
            {
                title,
                category,
                price,
                description,
                supplier,
                userId,
            },
            { where: { id } }
        );
        return res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.body.id;
    try {
        await ProductModel.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: " could not delete Product" });
    }
};