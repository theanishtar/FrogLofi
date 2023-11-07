import $ from '../lib/jquery-3.5.1.min';
import '../lib/jquery-ui';
import '../lib/jquery.resizeOnApproach.1.0.min';
$(document).ready(function () {
    //draggable function
    $(function () {
        $("#position-box").draggable();
    });
    $(function () {
        $("#position-box2").draggable();
    });
    $(function () {
        $("#resizable-box3").draggable();
    });

    //resizable function
    $(function () {
        $("#resizable-box").resizable({
            autoHide: true
        });
    });
    $(function () {
        $("#resizable-box2").resizable({
            autoHide: true
        });
    });
    $(function () {
        $("#resizable-box3").resizable({
            autoHide: true
        });
    });

    $(function () {
        var youtubeBoxInitialized = false;
        $(".youtube-box").resizable({
            minWidth: 560,
            minHeight: 385,
            resize: function (event, ui) {
                $('#ytb-embed').width(ui.size.width);
                $('#ytb-embed').height(ui.size.height);
            },
            create: function () {
                youtubeBoxInitialized = true;
            }
        });

        if (youtubeBoxInitialized) {
            $(".youtube-box").resizable("destroy");
        }
    });

    $(function () {
        var youtubeBox3Initialized = false;
        $(".youtube-box3").resizable({
            minWidth: 560,
            minHeight: 385,
            resize: function (event, ui) {
                $('#ytb-embed').width(ui.size.width);
                $('#ytb-embed').height(ui.size.height);
            },
            create: function () {
                youtubeBox3Initialized = true;
            }
        });

        if (youtubeBox3Initialized) {
            $(".youtube-box3").resizable("destroy");
        }
    });



    //active on top
    $("#resizable-box").draggable({
        start: function () {
            $("#resizable-box").css("z-index", "99");
            $(".desktop-folders").find("div.folder-style").css("z-index", "5");
        },
        drag: function () { },
        stop: function () { }
    });
    $("#resizable-box2").draggable({
        start: function () {
            $("#resizable-box2").css("z-index", "99");
            $(".desktop-folders").find("div.folder-style").css("z-index", "5");
        },
        drag: function () { },
        stop: function () { }
    });
    $("#resizable-box3").draggable({
        start: function () {
            $("#resizable-box3").css("z-index", "99");
            $(".desktop-folders").find("div.folder-style").css("z-index", "5");
        },
        drag: function () { },
        stop: function () { }
    });

    $(".desktop-folders").find("div.folder-style").draggable({
        start: function () {
            $("#resizable-box").css("z-index", "5");
            $(".desktop-folders").find("div.folder-style").css("z-index", "99");
        },
        drag: function () { },
        stop: function () { }
    });

    $(".desktop-folders").find("div.folder-style").draggable({
        start: function () {
            $("#resizable-box3").css("z-index", "5");
            $(".desktop-folders").find("div.folder-style").css("z-index", "99");
        },
        drag: function () { },
        stop: function () { }
    });

    //tooltip function
    $(function () {
        $(".dock-icons").tooltip({
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function (position, feedback) {
                    $(this).css(position);
                    $(this)
                        .addClass(feedback.vertical);
                }
            },
            show: {
                duration: 8
            },
            hide: {
                duration: 8
            },
        });
    });

    //menu bar
    $("ul.parent > li").hover(function () {
        $(this).find("ul.child").show().menu({
            icons: {
                submenu: 'ui-icon-blank'
            }
        });
    }, function () {
        $(this).find("ul.child").hide()
    });

    //sidebar items linked to proper div content
    $(".item-selected").on("click", function (event) {
        var clickedItem = ($(event.target).text()).replace(/\s+/g, '-').toLowerCase();
        $("#main-box").find("div.hide").css("display", "none");
        $('#sidebar-' + clickedItem + '').css("display", "flex");
    });

    //current time
    var date = new Date();
    var time = date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });
    document.getElementById("current-time").innerHTML = time;

    //change font color on hover
    $("#main-nav-menu > li").mouseover(function () {
        $(this).find("a").css("color", "white");
    }).mouseleave(function () {
        $(this).find("a").css("color", "black");
    });

    //change apple icon color
    $("#main-nav-menu > li:first-of-type").hover(function () {
        $("#apple-icon").attr('src', 'images/apple-logo-white.png');
    }, function () {
        $("#apple-icon").attr('src', 'images/logo.svg');
    });

    //red button closes finder window
    $("#red-cross").on("click", function () {
        $("#resizable-box").css("display", "none");
    });

    //red button closes finder window
    $("#red-cross2").on("click", function () {
        $("#resizable-box2").css("display", "none");
    });

    //red button closes finder window
    $("#red-cross3").on("click", function () {
        $("#resizable-box3").css("display", "none");
    });

    //double click on folder opens finder
    $(".desktop-folders").find("div.folder-style").dblclick(function () {
        $("#resizable-box3").css("display", "block");
    });

    //double click on folder opens finder
    $(".showPhotos").dblclick(function () {
        $("#resizable-box2").css("display", "block");
    });

    $(".showMusic").dblclick(() => {
        $("#resizable-box3").css("display", "block");
    })

    //dock function
    $('.main-nav-list img').resizeOnApproach({
        elementDefault: 70,
        elementClosest: 90,
        triggerDistance: 100
    });
});

// eslint-disable-next-line
function changeBC(url) {
    document.body.style.backgroundImage = `url(${url})`;
}