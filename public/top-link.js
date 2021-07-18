function topLink() {
 var lt = "<ul class=\"nav\">\n" +
     "            <li><a href=\"http://localhost:5000/home\">HOME</a></li>\n" +
     "            <li><a href=\"#\">\n" +
     "                MENU\n" +
     "                <i class=\"nav-arrow-down ti-angle-down\"></i>\n" +
     "            </a>\n" +
     "                <ul class=\"subnav\">\n" +
     "                    <li><a href=\"http://localhost:5000/menucupcake\">CUPCAKE</a></li>\n" +
     "                    <li><a href=\"http://localhost:5000/menupie\">PIE</a></li>\n" +
     "                    <li><a href=\"http://localhost:5000/menudonut\">DONUT</a></li>\n" +
     "                    <li><a href=\"http://localhost:5000/cheatcake\">CHEESECAKE</a></li>\n" +
     "                </ul>\n" +
     "            </li>\n" +
     "            <li><a href=\"http://localhost:5000/news\">NEWS</a></li>\n" +
     "            <li><a href=\"http://localhost:5000/Aboutcompany\">ABOUT COMPANY</a></li>\n" +
     "            <li><a href=\"http://localhost:5000/videosss\"> VIDEOS</a></li>\n" +
     "            <li><a href=\"http://localhost:5000/baking\">BAKING AND PASTRY ARTS</a></li>\n" +
     "        </ul>";
    document.getElementById("tl").innerHTML = lt;
}
topLink();