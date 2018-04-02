amazon = require('amazon-affiliate-api');

var search = amazon.createClient({
    awsId: "AKIAI6WBUE3QV3KGDEAA",
    awsSecret: "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",
    awsTag: "mobilead0046f-20"
});

search.itemSearch({
    //keyword will come from the user input, will change to the class/id when ready
    keywords: "",
    responseGroup: 'ItemAttributes,Images'
}).then(function (results) {
    console.log("---------------")

    if (results.Items.Item.length > 10) {
        var items = $("<div>")

        for (var i = 0; i < 11; i++) {
            console.log("Product Name: " + results.Items.Item[i].ItemAttributes.Title);
            console.log("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName);
            console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
            console.log("Image: " + results.Items.Item[i].LargeImage.URL);
            console.log("---------------")

            $(items).append("Product Name: " + results.Items.Item[i].ItemAttributes.Title)
            $(items).append("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName)
            $(items).append("Amazon Link: " + results.Items.Item[i].DetailPageURL)
            $(items).append("Image: <img src='" + results.Items.Item[i].LargeImage.URL + "'/>")

            //id will be changed to the search result div id
            $(".test").append(items);
        };
    }
    else {

        var items = $("<div>")

        for (var i = 0; i < results.Items.Item.length; i++) {
            console.log("Product Name: " + results.Items.Item[i].ItemAttributes.Title);
            console.log("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName);
            console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
            console.log("Image: " + results.Items.Item[i].LargeImage.URL);
            console.log("---------------")

            $(items).append("Product Name: " + results.Items.Item[i].ItemAttributes.Title)
            $(items).append("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName)
            $(items).append("Amazon Link: " + results.Items.Item[i].DetailPageURL)
            $(items).append("Image: <img src='" + results.Items.Item[i].LargeImage.URL + "'/>")

            //id will be changed to the search result div id
            $(".test").append(items);
        };

    }


}).catch(function (err) {
    console.log(err);
});

module.exports = search;
