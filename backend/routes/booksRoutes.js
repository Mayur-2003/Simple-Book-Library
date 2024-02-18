const router = require("express").Router();
const bookModel = require("../model/booksModel");

router.post("/addBook", async(req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save()
        .then(() => {
               res.status(200).json({message:"Book added successfully"});
        });
    } catch (error) {
        console.log(error);
    }
});

//GET REQUEST / All Books / Read
router.get('/allBooks', async (req, res) => {
    try {
        let allBooks = await bookModel.find();
        res.status(200).json({allBooks});
    } catch (error) {
        console.log(error);
    }
});

//GET REQUEST / Single Book / Read

router.get('/getBook/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let book = await bookModel.findById(id);
        res.status(200).json({book});
    } catch (error) {
        console.log(error);
    }
});

//PATCH REQUEST / update Book 

router.patch('/updateBook/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const { title, author, genre, isbn, desciption } = req.body;
        let updatedBook = await bookModel.findByIdAndUpdate(id,{ title, author, genre, isbn, desciption });
        await updatedBook.save().then(() => res.status(200).json({ message: "book UPDATED successfully"}));
    } 
    catch (error) {
        console.log(error);
    }
});

//DELETE REQUEST / Single Book / Delete
router.delete('/deleteBook/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let deletedBook = await bookModel.findByIdAndDelete(id)
        .then(() => res.status(201).json({ message: "book DELETED successfully"}));
    } 
    catch (error) {
        console.log(error);
    }
});

module.exports = router;

