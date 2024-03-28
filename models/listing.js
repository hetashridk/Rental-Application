const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url: String
        // default: "https://unsplash.com/photos/palm-tree-leaf-near-at-body-of-water-FbN2z3bEaSs",
        // set: (v) => v === "" ? "https://unsplash.com/photos/palm-tree-leaf-near-at-body-of-water-FbN2z3bEaSs" : v,
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
// export { Listing };
