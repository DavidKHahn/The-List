

$(document).on("click", ".searchBtn",function () {
event.preventDefault();
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
                        console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
                        console.log("ASIN #: " + results.Items.Item[i].ASIN);
                        console.log("Image: " + results.Items.Item[i].LargeImage.URL);
                        console.log("---------------")
            
                        $(items).append("<tr><th> <img class='responsive-img' src='" + results.Items.Item[i].MediumImage.URL + "'/> </th>")
                        $(items).append("<td>" + results.Items.Item[i].ItemAttributes.Title + "</td>")
                        // $(items).append("<td> ASIN #: " + results.Items.Item[i].ASIN + "</td>")
                        $(items).append("<a class='btn-floating btn-large waves-effect waves-light red modal-action modal-close' id='add' data-asin='" + results.Items.Item[i].ASIN + 
                        "' data-name='" + results.Items.Item[i].ItemAttributes.Title + 
                        "' data-url='" + results.Items.Item[i].DetailPageURL +
                        "' data-image='" + results.Items.Item[i].LargeImage.URL +
                        "'><i class='material-icons'>add</i></a></tr>")
            
                        //id will be changed to the search result div id
                        $(".results").append(items);
                    };
                }
                else {

                    $(".results").empty();
                    var items = $("<tbody>")
            
                    for (var i = 0; i < results.Items.Item.length; i++) {
                        console.log("Product Name: " + results.Items.Item[i].ItemAttributes.Title);
                        console.log("Amazon Link: " + results.Items.Item[i].DetailPageURL);
                        console.log("ASIN #: " + results.Items.Item[i].ASIN);
                        console.log("Image: " + results.Items.Item[i].LargeImage.URL);
                        console.log("---------------")
            
                        $(items).append("<tr><th> <img class='responsive-img' src='" + results.Items.Item[i].MediumImage.URL + "'/> </th>")
                        $(items).append("<td>" + results.Items.Item[i].ItemAttributes.Title + "</td>")
                        // $(items).append("<td> ASIN #: " + results.Items.Item[i].ASIN + "</td>")
                        $(items).append("<a class='btn-floating btn-large waves-effect waves-light red modal-action modal-close' id='add' data-asin='" + results.Items.Item[i].ASIN + 
                        "' data-name='" + results.Items.Item[i].ItemAttributes.Title + 
                        "' data-url='" + results.Items.Item[i].DetailPageURL +
                        "' data-image='" + results.Items.Item[i].LargeImage.URL +
                        "'><i class='material-icons'>add</i></a></tr>")
            
                        //id will be changed to the search result div id
                        $(".results").append(items);
                    };
            
                }
    }
    )

});


var cart = [];
var listId;

$(document).on("click", "#add", function() {
    var newItem = {
        asin: $(this).data("asin"),
        name: $(this).data("name"),
        image: $(this).data("image"),
        url: $(this).data("url"),
        ListId: listId
    }

    $(".addItem").append("<p>" + newItem.name + "</p>")
    

    console.log(newItem);

    $.post("/api/item/" + newItem.ListId, newItem).then(function(data){
        console.log("this is add " + data)
    })

    
})


$(document).on("click", "#create", function() {
    var id = window.localStorage.getItem("profileID");
    var total = {
        title: $("#title").val().trim(),
        description: $("#textarea1").val().trim()

    }
    $(".title").html("<h4>Title:</h4>");
    $(".title").append("<p>" + total.title+ "</p>");
    $(".description").html("<h4>Description:</h4>");
    $(".description").append("<p>" + total.description + "</p>");
    $("#product-search").empty();
    $("#product-search").html("<div class='input-field col s6'><input id='searchBar' type='text' class='validate'><label for='searchBar'>Search</label></div>");
    $("#product-search").append("<div data-target='modal1' class='btn modal-trigger searchBtn'><span>Submit</span></div>")




    $.post("/api/list/" + id, total).then(function(data){
        console.log("this is create " + data)
        listId = data;
    })

})


