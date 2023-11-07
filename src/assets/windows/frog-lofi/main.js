let isDragging = false;
let offsetX, offsetY;

const showButton = document.getElementById('show-lofi');

console.log(showButton)

function showFrogLofi() {
	const newDiv = document.createElement('div');
	newDiv.className = 'draggable';
	newDiv.innerHTML = `
	<div class="resizable-windows">
		<div id="resizable-box" class="ui-widget-content resizable">
			<div class="box-header">
				<div class="control-buttons">
					<div class="buttons">
						<img src="images/finder/red.png" alt="" id="red-cross">
						<img src="images/finder/yellow.png" alt="">
						<img src="images/finder/green.png" alt="">
					</div>
					<div class="folder-name">
						<img src="images/folder-icon.png" alt=""><span> Music</span>
					</div>
				</div>
				<div class="control-buttons2">
					<div class="buttons-left">
						<button><img src="images/finder/left-arrow.svg" alt=""></button>
						<button><img src="images/finder/right-arrow.svg" alt=""></button>
					</div>
					<div class="buttons-right">
						<div class="menu-icon-buttons">
							<div class="sort-button">
								<button><img src="images/finder/menu1.svg" alt=""></button>
								<button><img src="images/finder/menu2.svg" alt=""></button>
								<button><img src="images/finder/menu3.svg" alt=""></button>
								<button><img src="images/finder/menu4.svg" alt=""></button>
							</div>
							<div class="setting-button">
								<button><img src="images/finder/menu5.svg" alt=""><span><img
											src="images/finder/expand.svg" alt=""></span></button>
								<button><img src="images/finder/settings.svg" alt=""><span><img
											src="images/finder/expand.svg" alt=""></span></button>
								<button><img src="images/finder/export.svg" alt=""></button>
								<button><img src="images/finder/tag.png" alt=""></button>
							</div>
						</div>
						<div class="search-menu-bar">
							<input type="text" placeholder="Search">
						</div>
					</div>
				</div>
			</div>
			<div class="box-body">
				<div class="box-sidebar ">
					<div class="sidebar-background">
						<div class="sidebar-items">
							<div class="item-category">
								Favourites
							</div>
							<div class="item-selected">
								<img src="images/menu/airdrop.png" alt=""><a href="#">AirDrop</a>
							</div>
							<div class="item-selected">
								<img src="images/menu/recents.png" alt=""><a href="#">Recents</a>
							</div>
							
						</div>
					</div>
				</div>
				<div class="box-main" id="main-box">
					<div id="sidebar-airdrop" class="app-layout hide">
						<div class="align-center"><img src="images/apps/air.png" alt="">AirDrop</div>
					</div>
					<div id="sidebar-recents" class="app-layout hide">
						<div class="align-center"><img src="images/apps/recents/camera.svg" alt="">Camera</div>
						<div class="align-center"><img src="images/apps/recents/notes.png" alt="">Notes</div>
						<div class="align-center"><img src="images/apps/recents/office.svg" alt="">Office</div>
						<div class="align-center"><img src="images/apps/recents/settings.png" alt="">Settings</div>
						<div class="align-center"><img src="images/apps/recents/window.png" alt="">Window</div>
					</div>

					<div id="sidebar-applications" class="app-layout hide">
						<div class="align-center"><img src="images/apps/ae.png" alt="">Adobe After Effects CC 2019
						</div>
						<div class="align-center"><img src="images/apps/air.png" alt="">AirDrop</div>
						<div class="align-center"><img src="images/apps/backup.png" alt="">Time Machine</div>
						<div class="align-center"><img src="images/apps/bitcoin.png" alt="">Bitcoin</div>
						<div class="align-center"><img src="images/apps/book.png" alt="">Books</div>
						<div class="align-center"><img src="images/apps/calculator.png" alt="">Calculator</div>
						<div class="align-center"><img src="images/apps/calendar.png" alt="">Calendar</div>
						<div class="align-center"><img src="images/apps/chrome.png" alt="">Google Chrome</div>
						<div class="align-center"><img src="images/apps/mail.png" alt="">Mail</div>
						<div class="align-center"><img src="images/apps/messages.png" alt="">Messages</div>
						<div class="align-center"><img src="images/apps/music.png" alt="">Music</div>
						<div class="align-center"><img src="images/apps/onedrive.png" alt="">Google One Drive</div>
						<div class="align-center"><img src="images/apps/pics.png" alt="">Pictures</div>
						<div class="align-center"><img src="images/apps/ps.png" alt="">Adobe Photoshop CC 2019</div>
						<div class="align-center"><img src="images/apps/safari.png" alt="">Safari</div>
						<div class="align-center"><img src="images/apps/spotify.png" alt="">Spotify</div>
						<div class="align-center"><img src="images/apps/stockmarket.png" alt="">Stockmarket</div>
						<div class="align-center"><img src="images/apps/stocks.png" alt="">Stocks</div>
						<div class="align-center"><img src="images/apps/textedit.png" alt="">TextEdit</div>
						<div class="align-center"><img src="images/apps/tv.png" alt="">Apple Tv</div>
						<div class="align-center"><img src="images/apps/twitter.png" alt="">Twitter</div>
						<div class="align-center"><img src="images/apps/xcode.png" alt="">Xcode</div>
					</div>
					<div id="sidebar-google-drive" class="app-layout hide">
						<div class="align-center"><img src="images/folder-icon.png" alt="">My Documents</div>
					</div>
					<div id="sidebar-desktop" class="app-layout hide">
						<div class="align-center"><img src="images/folder-icon.png" alt="">Web Development</div>
						<div class="align-center"><img src="images/folder-icon.png" alt="">My Projects</div>
					</div>
					<div id="sidebar-documents" class="app-layout hide">
						<div class="align-center"><img src="images/folder-icon.png" alt="">My Local Documents</div>
					</div>
					<div id="sidebar-pictures" class="app-layout hide">
						<div class="align-center"><img src="images/apps/photos.png" alt="">Photos</div>
					</div>
					<div id="sidebar-your-macbook-pro" class="app-layout hide">
						<div class="align-center"><img src="images/disk.png" alt="">Macintosh HD</div>
						<div class="align-center"><img src="images/globe.png" alt="">Network</div>
					</div>
				</div>
			</div>
			<div class="box-footer"></div>
		</div>
	</div>
`;

	document.body.appendChild(newDiv);

	// Xử lý khi chuột được nhấn xuống
	newDiv.addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - newDiv.getBoundingClientRect().left;
		offsetY = e.clientY - newDiv.getBoundingClientRect().top;
		newDiv.style.cursor = 'grabbing';
	});

	// Xử lý khi chuột được kéo
	document.addEventListener('mousemove', (e) => {
		if (isDragging) {
			newDiv.style.left = e.clientX - offsetX + 'px';
			newDiv.style.top = e.clientY - offsetY + 'px';
		}
	});

	// Xử lý khi chuột được thả ra
	document.addEventListener('mouseup', () => {
		if (isDragging) {
			isDragging = false;
			newDiv.style.cursor = 'grab';
		}
	});
}

showButton.addEventListener("click", () => {
	alert("click")
	const newDiv = document.createElement('div');
	newDiv.textContent = 'Di chuyển tôi!';
	newDiv.className = 'draggable';

	document.body.appendChild(newDiv);

	// Xử lý khi chuột được nhấn xuống
	newDiv.addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - newDiv.getBoundingClientRect().left;
		offsetY = e.clientY - newDiv.getBoundingClientRect().top;
		newDiv.style.cursor = 'grabbing';
	});

	// Xử lý khi chuột được kéo
	document.addEventListener('mousemove', (e) => {
		if (isDragging) {
			newDiv.style.left = e.clientX - offsetX + 'px';
			newDiv.style.top = e.clientY - offsetY + 'px';
		}
	});

	// Xử lý khi chuột được thả ra
	document.addEventListener('mouseup', () => {
		if (isDragging) {
			isDragging = false;
			newDiv.style.cursor = 'grab';
		}
	});
});
