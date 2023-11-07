<template>
    <div id="mainScreen">
    <div class="menu-bar">
    <div class="stripe">
    <div class="menu-items-left">
        <div class="menu-wrapper">
        <ul class="parent" id="main-nav-menu">
            <li>
            <a href="#" class="menu-items"
                ><img
                src="../assets/images/logo.svg"
                alt=""
                id="apple-icon"
            /></a>
            <ul id="menu-mac" class="child">
                <li>
                <div>About This Mac</div>
                </li>
                <li>
                <div>System Preferences...</div>
                </li>
                <li>
                <div>App Store...</div>
                </li>
                <li class="ui-state-disabled">
                <div>Recent Items</div>
                <div class="item-align-right">▸</div>
                </li>
                <li class="ui-state-disabled">
                <div>Force Quit</div>
                <div class="item-align-right">⌥⇧⌘⎋</div>
                </li>
                <li>
                <div>Sleep</div>
                </li>
                <li>
                <div>Restart...</div>
                </li>
                <li>
                <div>Shut Down...</div>
                </li>
                <li>
                <div id="fullscreen-button" @click="onFullScreen()">Full Screen</div>
                <div class="item-align-right">⌃⌘Q</div>
                </li>
                <li>
                <div id="logout"><a @click="onLogout()">Log Out...</a></div>
                <div class="item-align-right">⇧⌘Q</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="finder-button"
                ><strong>Finder</strong></a
            >
            <ul id="menu-finder" class="child">
                <li>
                <div>About Finder</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Preferences...</div>
                <div class="item-align-right">⌘,</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Empty Bin...</div>
                <div class="item-align-right">⇧⌘⌫</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Services</div>
                <div class="item-align-right">▸</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Hide Finder</div>
                <div class="item-align-right">⌘H</div>
                </li>
                <li>
                <div>Hide Others</div>
                <div class="item-align-right">⌥⌘H</div>
                </li>
                <li class="ui-state-disabled">
                <div>Show All</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="file-button">File</a>
            <ul id="menu-file" class="child">
                <li>
                <div class="item-align-left">New Finder Windows</div>
                <div class="item-align-right">⌘N</div>
                </li>
                <li>
                <div>New Folder</div>
                <div class="item-align-right">⇧⌘N</div>
                </li>
                <li class="ui-state-disabled">
                <div>New Folder with Selection</div>
                <div class="item-align-right">⌃⌘N</div>
                </li>
                <li>
                <div>New Smart Folder</div>
                </li>
                <li>
                <div>New Tab</div>
                <div class="item-align-right">⌘T</div>
                </li>
                <li class="ui-state-disabled">
                <div>Open</div>
                <div class="item-align-right">⌘O</div>
                </li>
                <li class="ui-state-disabled">
                <div>Open With</div>
                <div class="item-align-right">▸</div>
                </li>
                <li class="ui-state-disabled">
                <div>Print</div>
                <div class="item-align-right">⌘P</div>
                </li>
                <li class="ui-state-disabled">
                <div>Close Window</div>
                <div class="item-align-right">⌘W</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Get Info</div>
                <div class="item-align-right">⌘I</div>
                </li>
                <li class="ui-state-disabled">
                <div>Rename</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Compres</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Duplicate</div>
                <div class="item-align-right">⌘D</div>
                </li>
                <li class="ui-state-disabled">
                <div>Make Alias</div>
                <div class="item-align-right">⌃⌘A</div>
                </li>
                <li class="ui-state-disabled">
                <div>Quick Look</div>
                <div class="item-align-right">⌘Y</div>
                </li>
                <li class="ui-state-disabled">
                <div>Show Original</div>
                <div class="item-align-right">⌃⌥⌘A</div>
                </li>
                <li class="ui-state-disabled">
                <div>Add to Dock</div>
                <div class="item-align-right">⌃⇧⌘T</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Move to Bin</div>
                <div class="item-align-right">⌘⌫</div>
                </li>
                <li class="ui-state-disabled">
                <div>Eject</div>
                <div class="item-align-right">⌘E</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Find</div>
                <div class="item-align-right">⌘F</div>
                </li>
                <hr class="spacing-line" />
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="edit-button">Edit</a>
            <ul id="menu-edit" class="child">
                <li class="ui-state-disabled">
                <div class="item-align-left">Undo</div>
                <div class="item-align-right">⌘Z</div>
                </li>
                <li class="ui-state-disabled">
                <div>Redo</div>
                <div class="item-align-right">⇧⌘Z</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Cut</div>
                <div class="item-align-right">⌘X</div>
                </li>
                <li class="ui-state-disabled">
                <div>Copy</div>
                <div class="item-align-right">⌘C</div>
                </li>
                <li class="ui-state-disabled">
                <div>Paste</div>
                <div class="item-align-right">⌘V</div>
                </li>
                <li>
                <div>Select All</div>
                <div class="item-align-right">⌘A</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Show Clipboard</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Start Dictation...</div>
                <div class="item-align-right">fn fn</div>
                </li>
                <li>
                <div>Emoji & Symbols</div>
                <div class="item-align-right">⌃⌘Space</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="view-button">View</a>
            <ul id="menu-view" class="child">
                <li class="ui-state-disabled">
                <div>as Icons</div>
                <div class="item-align-right">⌘1</div>
                </li>
                <li class="ui-state-disabled">
                <div>as List</div>
                <div class="item-align-right">⌘2</div>
                </li>
                <li class="ui-state-disabled">
                <div>as Columns</div>
                <div class="item-align-right">⌘3</div>
                </li>
                <li class="ui-state-disabled">
                <div>as Gallery</div>
                <div class="item-align-right">⌘4</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Use Stacks</div>
                <div class="item-align-right">⌃⌘O</div>
                </li>
                <li>
                <div>Sort By</div>
                <div class="item-align-right">▸</div>
                <ul class="submenu" id="sub-menu">
                    <li>
                    <div>
                        <img
                        src="../assets/images/checkbox.svg"
                        alt=""
                        id="checkbox"
                        />None
                    </div>
                    <div class="item-align-right">⌃⌥⌘O</div>
                    </li>
                    <li>
                    <div>Snap to Grid</div>
                    </li>
                    <li>
                    <div>Name</div>
                    <div class="item-align-right">⌃⌥⌘1</div>
                    </li>
                    <li>
                    <div>Kind</div>
                    <div class="item-align-right">⌃⌥⌘2</div>
                    </li>
                    <li>
                    <div>Date Last Opened</div>
                    <div class="item-align-right">⌃⌥⌘3</div>
                    </li>
                    <li>
                    <div>Date Added</div>
                    <div class="item-align-right">⌃⌥⌘4</div>
                    </li>
                    <li>
                    <div>Date Modified</div>
                    <div class="item-align-right">⌃⌥⌘5</div>
                    </li>
                    <li>
                    <div>Date Created</div>
                    </li>
                    <li>
                    <div>Size</div>
                    <div class="item-align-right">⌃⌥⌘6</div>
                    </li>
                    <li>
                    <div>Tags</div>
                    <div class="item-align-right">⌃⌥⌘7</div>
                    </li>
                </ul>
                </li>
                <li>
                <div>Clean Up</div>
                </li>
                <li>
                <div>Clean Up By</div>
                <div class="item-align-right">▸</div>
                <ul class="submenu" id="sub-menu">
                    <li>
                    <div>Name</div>
                    <div class="item-align-right">⌥⌘1</div>
                    </li>
                    <li>
                    <div>Kind</div>
                    <div class="item-align-right">⌥⌘2</div>
                    </li>
                    <li>
                    <div>Date Modified</div>
                    <div class="item-align-right">⌥⌘5</div>
                    </li>
                    <li>
                    <div>Date Created</div>
                    </li>
                    <li>
                    <div>Size</div>
                    <div class="item-align-right">⌥⌘6</div>
                    </li>
                    <li>
                    <div>Tags</div>
                    <div class="item-align-right">⌥⌘7</div>
                    </li>
                </ul>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Hide Sidebar</div>
                <div class="item-align-right">⌥⌘S</div>
                </li>
                <li class="ui-state-disabled">
                <div>Hide Preview</div>
                <div class="item-align-right">⇧⌘P</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Hide Toolbar</div>
                <div class="item-align-right">⌥⌘T</div>
                </li>
                <li class="ui-state-disabled">
                <div>Show All Tabs</div>
                <div class="item-align-right">⇧⌘\</div>
                </li>
                <li class="ui-state-disabled">
                <div>Hide Tab Bar</div>
                <div class="item-align-right">⇧⌘T</div>
                </li>
                <li class="ui-state-disabled">
                <div>Hide Path Bar</div>
                <div class="item-align-right">⌥⌘P</div>
                </li>
                <li class="ui-state-disabled">
                <div>Hide Status Bar</div>
                <div class="item-align-right">⌘/</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Customize Toolbar...</div>
                </li>
                <li>
                <div>Customize Touch Bar...</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Show View Options</div>
                <div class="item-align-right">⌘J</div>
                </li>
                <li class="ui-state-disabled">
                <div>Show Preview Options</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Enter Full Screen</div>
                <div class="item-align-right">⌃⌘F</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="go-button">Go</a>
            <ul id="menu-go" class="child">
                <li class="ui-state-disabled">
                <div>Back</div>
                <div class="item-align-right">⌘[</div>
                </li>
                <li class="ui-state-disabled">
                <div>Forward</div>
                <div class="item-align-right">⌘]</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>
                    <img
                    src="../assets/images/menu/recents.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Recents
                </div>
                <div class="item-align-right">⇧⌘F</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/documents.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Documents
                </div>
                <div class="item-align-right">⇧⌘O</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/desktop.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Desktop
                </div>
                <div class="item-align-right">⇧⌘D</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/download.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Downloads
                </div>
                <div class="item-align-right">⌥⌘L</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/home.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Home
                </div>
                <div class="item-align-right">⇧⌘H</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/laptop.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Computer
                </div>
                <div class="item-align-right">⇧⌘C</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/airdrop.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Air Drop
                </div>
                <div class="item-align-right">⇧⌘R</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/network.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Network
                </div>
                <div class="item-align-right">⇧⌘K</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/icloud.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    iCloud Drive
                </div>
                <div class="item-align-right">⇧⌘I</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/apps.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Applications
                </div>
                <div class="item-align-right">⇧⌘A</div>
                </li>
                <li>
                <div>
                    <img
                    src="../assets/images/menu/utilities.png"
                    alt=""
                    class="sidebar-icons"
                    />
                    Utilities
                </div>
                <div class="item-align-right">⇧⌘U</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Recent Folders</div>
                <div class="item-align-right">▸</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Go to Folder...</div>
                <div class="item-align-right">⇧⌘G</div>
                </li>
                <li>
                <div>Connect to Server...</div>
                <div class="item-align-right">⌘K</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="window-button">Window</a>
            <ul id="menu-window" class="child">
                <li class="ui-state-disabled">
                <div>Minimise</div>
                <div class="item-align-right">⌘M</div>
                </li>
                <li class="ui-state-disabled">
                <div>Zoom</div>
                </li>
                <li class="ui-state-disabled">
                <div>Move Window to Left Side of Screen</div>
                </li>
                <li class="ui-state-disabled">
                <div>Move Window to Right Side of Screen</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Move to iPad</div>
                </li>
                <li class="ui-state-disabled">
                <div>Cycle Through Windows</div>
                <div class="item-align-right">⌘`</div>
                </li>
                <hr class="spacing-line" />
                <li class="ui-state-disabled">
                <div>Show Previous Tab</div>
                <div class="item-align-right">⌃⇧⇥</div>
                </li>
                <li class="ui-state-disabled">
                <div>Show Next Tab</div>
                <div class="item-align-right">⌃⇥</div>
                </li>
                <li class="ui-state-disabled">
                <div>Move Tab to New Window</div>
                </li>
                <li class="ui-state-disabled">
                <div>Merge All Windows</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>Bring All to Front</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>images</div>
                </li>
            </ul>
            </li>
            <li>
            <a href="#" class="menu-items" id="help-button">Help</a>
            <ul id="menu-help" class="child">
                <li id="search-input" class="ui-state-disabled">
                <div>Search</div>
                <form action=""><input type="text" /></form>
                </li>
                <li>
                <div>macOS Help</div>
                </li>
                <hr class="spacing-line" />
                <li>
                <div>See What's New in macOS</div>
                </li>
                <li>
                <div>New to Mac? Tour the Basics</div>
                </li>
                <li>
                <div>Get to know your MacBook Pro</div>
                </li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    <div class="menu-items-right">
        <a href="#" id="battery-level">100%</a>
        <a href="#" class="menu-items">
        <img src="../assets/images/battery.svg" alt="" width="22px" />
        </a>
        <a href="#" class="menu-items"><span id="current-time"> </span> </a>
        <a href="#" class="menu-items">
        <img src="../assets/images/launcher2.svg" alt=""
        /></a>
    </div>
    </div>
    </div>
    <div class="desktop-folders">
    <div id="position-box" class="ui-widget-content folder-style">
    <img
        src="../assets/images/folder-icon.png"
        alt=""
        class="folder-icon"
    />
    <span class="icon-font">Web Development</span>
    </div>
    <div id="position-box2" class="ui-widget-content folder-style">
    <img
        src="../assets/images/folder-icon.png"
        alt=""
        class="folder-icon"
    />
    <span class="icon-font">My Projects</span>
    </div>
    <!-- <div id="position-box3" class="ui-widget-content folder-style"><img src="../assets/images/folder-icon.png" alt=""
            class="folder-icon">
        <span class="icon-font">My Projects</span>
    </div> -->
    </div>

    <!-- Youtube -->
    <div class="resizable-windows">
    <div id="resizable-box3" class="ui-widget-content resizable youtube-box">
    <div class="box-header">
        <div class="control-buttons">
        <div class="buttons">
            <img
            src="../assets/images/finder/red.png"
            alt=""
            id="red-cross3"
            />
            <img src="../assets/images/finder/yellow.png" alt="" />
            <img src="../assets/images/finder/green.png" alt="" />
        </div>
        <div class="folder-name">
            <img src="../assets/images/folder-icon.png" alt="" /><span>
            Music</span
            >
        </div>
        </div>
        <div class="control-buttons2">
        <div class="buttons-left">
            <button>
            <img src="../assets/images/finder/left-arrow.svg" alt="" />
            </button>
            <button>
            <img src="../assets/images/finder/right-arrow.svg" alt="" />
            </button>
        </div>
        <div class="buttons-right">
            <div class="menu-icon-buttons">
            <!-- <div class="sort-button">
                            <button><img src="../assets/images/finder/menu1.svg" alt=""></button>
                            <button><img src="../assets/images/finder/menu2.svg" alt=""></button>
                            <button><img src="../assets/images/finder/menu3.svg" alt=""></button>
                            <button><img src="../assets/images/finder/menu4.svg" alt=""></button>
                        </div>
                        <div class="setting-button">
                            <button><img src="../assets/images/finder/menu5.svg" alt=""><span><img
                                        src="images/finder/expand.svg" alt=""></span></button>
                            <button><img src="../assets/images/finder/settings.svg" alt=""><span><img
                                        src="images/finder/expand.svg" alt=""></span></button>
                            <button><img src="../assets/images/finder/export.svg" alt=""></button>
                            <button><img src="../assets/images/finder/tag.png" alt=""></button>
                        </div> -->
            </div>
            <div class="search-menu-bar">
            <input type="text" placeholder="Search" />
            </div>
        </div>
        </div>
    </div>
    <div class="box-body">
        <iframe
        id="ytb-embed"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=RDMMTkYVBTEMC5s&index=4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>
    </div>
    <!-- <div class="box-footer"></div> -->
    </div>
    </div>

    <!-- photo -->
    <div class="resizable-windows">
    <div id="resizable-box2" class="ui-widget-content resizable photos-box">
    <div class="box-header">
        <div class="control-buttons">
        <div class="buttons">
            <img
            src="../assets/images/finder/red.png"
            alt=""
            id="red-cross2"
            />
            <img src="../assets/images/finder/yellow.png" alt="" />
            <img src="../assets/images/finder/green.png" alt="" />
        </div>
        <div class="folder-name">
            <img src="../assets/images/folder-icon.png" alt="" /><span>
            Wallpapers</span
            >
        </div>
        </div>
        <div class="control-buttons2">
        <div class="buttons-left">
            <button>
            <img src="../assets/images/finder/left-arrow.svg" alt="" />
            </button>
            <button>
            <img src="../assets/images/finder/right-arrow.svg" alt="" />
            </button>
        </div>
        <div class="buttons-right">
            <div class="menu-icon-buttons"></div>
            <div class="search-menu-bar">
            <input type="text" placeholder="Search" />
            </div>
        </div>
        </div>
    </div>
    <div class="box-body">
        <div class="photo-grid" id="photo-grid">
    <a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/1.gif?raw=true" alt="Photo 1"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/10.gif?raw=true" alt="Photo 2"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/11.gif?raw=true" alt="Photo 3"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/12.gif?raw=true" alt="Photo 4"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/13.gif?raw=true" alt="Photo 5"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/14.gif?raw=true" alt="Photo 6"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/15.gif?raw=true" alt="Photo 7"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/16.gif?raw=true" alt="Photo 8"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/17.gif?raw=true" alt="Photo 9"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/18.gif?raw=true" alt="Photo 10"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/19.gif?raw=true" alt="Photo 11"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/2.gif?raw=true" alt="Photo 12"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/20.png?raw=true" alt="Photo 13"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/21.jpeg?raw=true" alt="Photo 14"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/22.png?raw=true" alt="Photo 15"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/23.png?raw=true" alt="Photo 16"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/24.png?raw=true" alt="Photo 17"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/25.png?raw=true" alt="Photo 18"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/26.png?raw=true" alt="Photo 19"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/27.png?raw=true" alt="Photo 20"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/28.jpg?raw=true" alt="Photo 21"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/29.jpg?raw=true" alt="Photo 22"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/3.gif?raw=true" alt="Photo 23"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/30.jpg?raw=true" alt="Photo 24"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/31.gif?raw=true" alt="Photo 25"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/32.jpeg?raw=true" alt="Photo 26"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/33.gif?raw=true" alt="Photo 27"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/34.gif?raw=true" alt="Photo 28"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/35.jpg?raw=true" alt="Photo 29"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/36.jpg?raw=true" alt="Photo 30"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/37.gif?raw=true" alt="Photo 31"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/38.webp?raw=true" alt="Photo 32"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/39.gif?raw=true" alt="Photo 33"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/4.gif?raw=true" alt="Photo 34"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/40.gif?raw=true" alt="Photo 35"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/41.jpg?raw=true" alt="Photo 36"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/5.gif?raw=true" alt="Photo 37"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/5.jpg?raw=true" alt="Photo 38"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/6.gif?raw=true" alt="Photo 39"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/7.gif?raw=true" alt="Photo 40"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/8.gif?raw=true" alt="Photo 41"></a><a class="photo-item" @click="changeBC($event)"><img src="https://github.com/dangtranhuu/frog-lofi/blob/main/wallpaper/9.gif?raw=true" alt="Photo 42"></a></div>
    </div>
    </div>
    </div>
    <div class="dock-menu">
    <div class="background-dock">
    <nav class="main-nav">
        <ul class="main-nav-list">
        <li class="dock-icons">
            <img
            src="../assets/images/apps/finder.png"
            alt="Finder"
            title="Finder"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/launchpad.png"
            alt="launchpad"
            title="Launchpad"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/safari.png"
            alt="Safari"
            title="Safari"
            />
        </li>
        <li class="dock-icons showMusic">
            <img
            src="../assets/images/apps/ytb.png"
            alt="TouTube"
            title="YouTube"
            />
        </li>
        <li class="dock-icons showPhotos">
            <img
            src="../assets/images/apps/photos.png"
            alt="Photos"
            title="Photos"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/calendar.png"
            alt="Calendar"
            title="Calendar"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/appstore.png"
            alt="Appstore"
            title="Appstore"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/messages.png"
            alt="Messages"
            title="Messages"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/mail.png"
            alt="Mail"
            title="Mail"
            />
        </li>
        <li class="dock-icons">
            <img
            src="../assets/images/apps/trash.png"
            alt="Trash"
            title="Trash"
            />
        </li>
        </ul>
    </nav>
    </div>
    </div>
    </div>
</template>

<style>
    @import url('../assets/styles/global.css');
    @import url('../assets/styles/photos.css');
</style>
<script>
    import '../assets/js/index';
    export default {
        name: 'MainScreen', 
        methods: {
            changeBC(event) {
                const aElement = event.currentTarget; // Lấy phần tử <a> được nhấp
                const imgElement = aElement.querySelector('img'); // Tìm phần tử <img> bên trong phần tử <a>
                const imageUrl = imgElement.getAttribute('src'); // Lấy URL của hình ảnh từ thuộc tính src
                // Ở đây, bạn có thể sử dụng imageUrl để thực hiện các xử lý bạn cần.
                console.log('URL của hình ảnh:', imageUrl);
                // const imgElements = this.$el.querySelectorAll('#photo-grid img'); //currentSrc
                // console.log(imgElements);
                // console.log(att)
                // //document.body.style.backgroundImage = `url(${url})`;
                // let url="yu"
                this.$emit('onChangeBC',  { imageUrl: imageUrl });
            },
            onLogout() {
                this.$emit('onLogout');
            },
            onFullScreen(){
                this.$emit('onFullscreen');
            },
            onChangeBC(url){
                this.$emit('onChangeBC', {url})
            }
        }
    }

</script>