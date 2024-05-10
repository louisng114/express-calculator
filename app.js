const express = require("express");
const ExpressError = require("./expressError");
const fs = require("fs")

const {findMean, findMedian, findMode} = require("./compute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean", (req, res) => {
    const nums = req.query.nums;
    if (!nums){
        throw new ExpressError("Nums are required!", 400);
    }
    const mean = findMean(nums);
    const result = {
            operation : "mean",
            value : mean
        }
    if (req.query.save == "true"){
        fs.appendFile("results.json", `Timestamp: ${Date.now()}\n` + JSON.stringify(result) + "\n\n", (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    return res.json(result);
});

app.get("/median", (req, res) => {
    const nums = req.query.nums;
    if (!nums){
        throw new ExpressError("Nums are required!", 400);
    }
    const median = findMedian(nums);
    const result = {
            operation : "median",
            value : median
        }
    if (req.query.save == "true") {
        fs.appendFile("results.json", `Timestamp: ${Date.now()}\n` + JSON.stringify(result) + "\n\n", (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    return res.json(result);
});

app.get("/mode", (req, res) => {
    const nums = req.query.nums;
    if (!nums){
        throw new ExpressError("Nums are required!", 400);
    }
    const mode = findMode(nums);
    const result = {
            operation : "mode",
            value : mode
        }
    if (req.query.save == "true") {
        fs.appendFile("results.json", `Timestamp: ${Date.now()}\n` + JSON.stringify(result) + "\n\n", (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    return res.json(result);
});

app.get("/all", (req, res) => {
    const nums = req.query.nums;
    if (!nums){
        throw new ExpressError("Nums are required!", 400);
    }
    const mean = findMean(nums);
    const median = findMedian(nums);
    const mode = findMode(nums);
    const result = { operation : "all",
            mean : mean,
            median : median,
            mode: mode
        }
    if (req.query.save == "true") {
        fs.appendFile("results.json", `Timestamp: ${Date.now()}\n` + JSON.stringify(result) + "\n\n", (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    return res.json(result);
});

app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;
    return res.status(status).json({
        error: {message, status}
});


app.listen(3000, function(){
    console.log('App on port 3000');
})
