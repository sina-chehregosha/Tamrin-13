$(document).ready(function () {
    $("#searchButton").click(function () {
        // ('#searchBox').value()
        console.log('search function run');
        let searched = $('#searchInput').val();
        // console.log(searched);

        $.ajax({
            type: "GET",
            url: `/home?search=${searched}`,
            // data: searched,
            success: function (response) {
                console.log('search was successful \n', searched);
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});