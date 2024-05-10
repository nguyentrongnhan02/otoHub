(function () {
    "use strict";
    var HT = {};

    HT.getLocation = () => {
        $(document).on("change", ".location", function () {
            let _this = $(this);
            let option = {
                data: {
                    location_id: _this.val(),
                },
                target: _this.attr("data-target"),
            };
            HT.sendDataTogetLocation(option);
        });
    };

    HT.sendDataTogetLocation = (option) => {
        $.ajax({
            url: "ajax/location/getLocation", // Đường dẫn tới API hoặc tập tin xử lý dữ liệu trên máy chủ
            type: "GET",
            data: option,
            dataType: "json", // Kiểu dữ liệu mà bạn mong đợi từ phản hồi
            success: function (res) {
                console.log(res);
                $("." + option.target).html(res.html);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Xử lý lỗi nếu có
                console.log("loi: " + textStatus + " " + errorThrown);
            },
        });
    };

    $(document).ready(function () {
        HT.getLocation();
    });
})(jQuery);
