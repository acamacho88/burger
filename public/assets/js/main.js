// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".updatefield").keypress(function (event) {
        if (event.which == 13) {

            event.preventDefault();

            var id = $(this).data("id");

            var updateData = {
                updateCol: "burger_name",
                updateVal: $(this).val().trim()
            };

            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: updateData
            }).then(function () {
                console.log("updated burger name");
                location.reload();
            })
        }
    });

    $(".devourbtn").on("click", function (event) {
        var id = $(this).data("id");

        var updateData = {
            updateCol: "devoured",
            updateVal: true
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateData
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgername").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});