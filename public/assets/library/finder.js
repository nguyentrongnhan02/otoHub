(function ($) {
    "use strict";
    var HT = {};
    var document = $(document);

    HT.inputImage = () => {
        $(document).on("click", ".input-image", function () {
            HT.BrowseServerInput($(this), "Images");
        });
    };
    HT.BrowseServerInput = () => {
        if (typeof type == "underfined") {
            type = "Images";
        }
        var finder = new CKFinder();
        finder.resourceType = type;

        finder.selectActionFunction = function (fileUrl, data) {
            console.log(fileUrl);
            fileUrl = fileUrl.replace(BASE_URL, "/");
            object.val(fileUrl);
        };
        finder.popup();
    };

    document.ready(function () {
        HT.inputImage();
    });
})(jQuery);
