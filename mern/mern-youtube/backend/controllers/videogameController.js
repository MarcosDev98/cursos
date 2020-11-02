const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

const Videogame = require('../models/Videogame');
const { errorHandler } = require('../helpers/dberrorHandler');


exports.create = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not be uploaded.'
            })
        } else{
            const {name, description, price, category, quantity} = fields;
            let videogame = new Videogame(fields);
            
            if (files.photo){
                if (files.photo.size > 1000000){
                    return res.status(400).json({
                        error: 'Image should be less than 1MB in size.'
                    })
                } else{
                    videogame.photo.data = fs.readFileSync(files.photo.path);
                    videogame.photo.contentType = files.photo.type
                }
            }
            videogame.save((err,result) => {
                if (err){
                    return res.status(400).json({
                        error: errorHandler(error)
                    })
                } else{
                    res.json(result)
                }
            })
        }
    })
}


exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy :'name'

    Videogame.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .exec((err,videogames) => {
            if (err){
                return res.status(400).json({
                    error: "Videogames not found"
                })
            } else{
                res.json(videogames);
            }
        })

}