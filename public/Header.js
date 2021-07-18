function header() {
    var ct = " <div class=\"header_con\">\n" +
        "                <div class=\"logo\">\n" +
        "                    <h1>\n" +
        "                        <a href=\"#\">\n" +
        "                            <img src=\"images/logo.webp\" height=\"120\" width=\"108\"/>\n" +
        "                        </a>\n" +
        "                    </h1>\n" +
        "                </div>\n" +
        "                <div class=\"search\">\n" +
        "                    <input type=\"hidden\" name=\"type\" value=\"product\">\n" +
        "                    <input type=\"search\" name=\"q\" value placeholder=\"Search...\">\n" +
        "                    <div class=\"search1\">\n" +
        "                        <button type=\"submit\" class=\"search-icon\">\n" +
        "                            <img src=\"images/search-13-24 (1).png\" height=\"20\" width=\"20\"/>\n" +
        "                        </button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"link\">\n" +
        "                    <div class=\"link-con\">\n" +
        "                        <a href=\"tel:0358054499\">\n" +
        "                            <div class=\"fa-phone\">\n" +
        "                                <img src=\"images/iconfinder_2703069_phone_cell_contact_telephone_icon_20px.png\"\n" +
        "                                     height=\"20\" width=\"20\"/>\n" +
        "                            </div>\n" +
        "                            <span class=\"phone\">\n" +
        "                                 035.805.4499\n" +
        "                             </span>\n" +
        "                        </a>\n" +
        "                        <a href=\"#\">\n" +
        "                            <div class=\"fa-con\">\n" +
        "                                <img src=\"images/iconfinder_2703084_bank_banking_payment_icon_20px.png\" height=\"20\"\n" +
        "                                     width=\"20\"/>\n" +
        "                            </div>\n" +
        "                            <span class=\"fa-con1\">\n" +
        "                                 Restaurant System\n" +
        "                             </span>\n" +
        "                        </a>\n" +
        "                        <a href=\"#\">\n" +
        "                            <div class=\"taikhoan\">\n" +
        "                                <img src=\"images/iconfinder_2703063_user_man_person_icon_20px.png\" height=\"20\"\n" +
        "                                     width=\"20\"/>\n" +
        "                            </div>\n" +
        "                            <span class=\"taikoan1\">\n" +
        "                                 Account\n" +
        "                             </span>\n" +
        "                        </a>\n" +
        "                        <a href=\"#\">\n" +
        "                            <div class=\"buy\">\n" +
        "                                <img src=\"images/iconfinder_2703085_bag_cart_ecommerce_shop_icon_20px.png\" height=\"20\"\n" +
        "                                     width=\"20\"/>\n" +
        "                            </div>\n" +
        "                            <span class=\"buy1\">\n" +
        "                                 0\n" +
        "                             </span>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>"
    document.getElementById("row").innerHTML = ct;
}
header();

