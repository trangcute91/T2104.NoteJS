function topLink() {
 var lt = "<ul class=\"nav\">\n" +
     "            <li><a href=\"/home\">HOME</a></li>\n" +
     "            <li><a href=\"#\">\n" +
     "                MENU\n" +
     "                <i class=\"nav-arrow-down ti-angle-down\"></i>\n" +
     "            </a>\n" +
     "                <ul class=\"subnav\">\n" +
     "                    <li><a href=\"/menucupcake\">CUPCAKE</a></li>\n" +
     "                    <li><a href=\"/menupie\">PIE</a></li>\n" +
     "                    <li><a href=\"/menudonut\">DONUT</a></li>\n" +
     "                    <li><a href=\"/cheatcake\">CHEESECAKE</a></li>\n" +
     "                </ul>\n" +
     "            </li>\n" +
     "            <li><a href=\"/news\">NEWS</a></li>\n" +
     "            <li><a href=\"/Aboutcompany\">ABOUT COMPANY</a></li>\n" +
     "            <li><a href=\"/videosss\"> VIDEOS</a></li>\n" +
     "            <li><a href=\"/baking\">BAKING AND PASTRY ARTS</a></li>\n" +
     "        </ul>";
    document.getElementById("tl").innerHTML = lt;
}
topLink();