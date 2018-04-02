

$(".searchBtn").on("click", function () {

    var product = {
        name: $("#searchBar").val().trim()
    }

    $.post("api/search", product, function (data) {
        console.log(data)
    }).then(function (results) {
        console.log(results);

        if (results.Items.Item.length > 10) {
                    var items = $("<div>")
            
                    for (var i = 0; i < 11; i++) {
                        console.log("Product Name: " + results.Items.Item[i].ItemAttributes.Title);
                        console.log("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName);
                        console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
                        console.log("ASIN #: " + results.Items.Item[i].ASIN);
                        console.log("Image: " + results.Items.Item[i].LargeImage.URL);
                        console.log("---------------")
            
                        $(items).append("Product Name: " + results.Items.Item[i].ItemAttributes.Title)
                        $(items).append("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName)
                        $(items).append("Amazon Link: " + results.Items.Item[i].DetailPageURL)
                        $(items).append("ASIN #: " + results.Items.Item[i].ASIN)
                        $(items).append("Image: <img src='" + results.Items.Item[i].LargeImage.URL + "'/>")
            
                        //id will be changed to the search result div id
                        $(".results").append(items);
                    };
                }
                else {
            
                    var items = $("<div>")
            
                    for (var i = 0; i < results.Items.Item.length; i++) {
                        console.log("Product Name: " + results.Items.Item[i].ItemAttributes.Title);
                        console.log("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName);
                        console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
                        console.log("ASIN #: " + results.Items.Item[i].ASIN);
                        console.log("Image: " + results.Items.Item[i].LargeImage.URL);
                        console.log("---------------")
            
                        $(items).append("<div id='" + results.Items.Item[i].ASIN + "'>Product Name: " + results.Items.Item[i].ItemAttributes.Title)
                        $(items).append("Product Type: " + results.Items.Item[i].ItemAttributes.ProductTypeName)
                        $(items).append("Amazon Link: " + results.Items.Item[i].DetailPageURL)
                        $(items).append("ASIN #: " + results.Items.Item[i].ASIN)
                        $(items).append("Image: <img src='" + results.Items.Item[i].LargeImage.URL + "'/>") 
                        $(items).append("<button id='add' data-asin=" + results.Items.Item[i].ASIN + ">Add</button></div>")
            
                        //id will be changed to the search result div id
                        $(".results").append(items);
                    };
            
                }
    }
    )

});


$(document).on("click", "#add", function() {
    var asin = {
        asin: $(this).data("asin")
    }
    console.log(asin);
    var id = window.localStorage.getItem("profileID");
    $.post("/api/list/" + id, asin).then(function(data){
        console.log("this is data" + data)
    })
})





