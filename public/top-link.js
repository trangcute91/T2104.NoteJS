function topLink() {
 var lt = "<ul class=\"nav\">\n" +
     "            <li><a href=\"#\">HOME</a></li>\n" +
     "            <li><a href=\"#\">\n" +
     "                MENU\n" +
     "                <i class=\"nav-arrow-down ti-angle-down\"></i>\n" +
     "            </a>\n" +
     "                <ul class=\"subnav\">\n" +
     "                    <li><a href=\"#\">CUPCAKE</a></li>\n" +
     "                    <li><a href=\"#\">PIE</a></li>\n" +
     "                    <li><a href=\"#\">DONUT</a></li>\n" +
     "                    <li><a href=\"https://doanweb11.herokuapp.com/cheesecake/cheat%20cake.html\">CHEESECAKE</a></li>\n" +
     "                </ul>\n" +
     "            </li>\n" +
     "            <li><a href=\"#\">NEWS</a></li>\n" +
     "            <li><a href=\"#\">ABOUT COMPANY</a></li>\n" +
     "            <li><a href=\"#\"> VIDEOS</a></li>\n" +
     "            <li><a href=\"#\">BAKING AND PASTRY ARTS</a></li>\n" +
     "        </ul>";
    document.getElementById("tl").innerHTML = lt;
}
topLink();