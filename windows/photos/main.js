// Array of image file paths
const arrPath = [
	"images/wallpaper/lofi/0c7b7bd6de1525cecb762d4f3de34ea1.gif",
	"images/wallpaper/lofi/0f26af4294b7db3c955db824910d9d43.gif",
	"images/wallpaper/lofi/0r1Oea1.gif",
	"images/wallpaper/lofi/4a705e028bb9f5d50995e68c791fb10a.gif",
	"images/wallpaper/lofi/4b27fefc2727568599138cf509cd8df0.gif",
	"images/wallpaper/lofi/4de8faadc4bf354644a7d78fb4cbd208.gif",
	"images/wallpaper/lofi/6dda3750efc2de4d968173df424195c1.gif",
	"images/wallpaper/lofi/7bf4982141cab6df949c30ead4ae68a3.gif",
	"images/wallpaper/lofi/7f479e2c82c702aa8f956764a8c4c7c2.gif",
	"images/wallpaper/lofi/08eba1de6100c1f367c847c512ba0ad4.gif",
	"images/wallpaper/lofi/9a58c343701abc80f7e1d5ec4142ab4d.gif",
	"images/wallpaper/lofi/13bcdd9473b235fdd3ed62fd120a5686.gif",
	"images/wallpaper/lofi/27d5ffcd4cc0e4bc8deb6d526bce1d67.gif",
	"images/wallpaper/lofi/40f34ef63156ac41b222459f4557ee5b.gif",
	"images/wallpaper/lofi/77faaf235029735d214299115875c41e.gif",
	"images/wallpaper/lofi/462d72ac37841cac4f434a6ca2336eaf.gif",
	"images/wallpaper/lofi/664d2a0d4145a08503a0acfd5dd8366e.gif",
	"images/wallpaper/lofi/9702a93a11c0c0df57564ec1fafe374d.gif",
	"images/wallpaper/lofi/537460ef0012ec5dc81926266a640dc9.gif",
	"images/wallpaper/lofi/8407471211d7a2e46c06cccfc412a1cf.gif",
	"images/wallpaper/lofi/f0dbfcd9f0fb297df2b0fbb89ddd720b.gif",
	"images/wallpaper/lofi/f8978deb32b323af2107dc52e2786fe2.gif",
	"images/wallpaper/lofi/q3z1k0zc7umy.gif",
	"images/wallpaper/lofi/tumblr_p177vracYv1wh4uq0o1_1280.gif",
	"images/wallpaper/lofi/wp9389607.gif",
];

// document.addEventListener('DOMContentLoaded', function () {
// 	const photoGrid = document.getElementById('photo-grid');

// 	for (let i = 0; i < arrPath.length; i++) {
// 		const photoItem = document.createElement('a');
// 		photoItem.className = 'photo-item';
// 		photoItem.href = arrPath[i];;

// 		const img = document.createElement('img');
// 		img.src = arrPath[i];
// 		img.alt = `Photo ${i + 1}`;

// 		photoItem.appendChild(img);
// 		photoGrid.appendChild(photoItem);
// 	}
// });

function photos() {
	console.log(document.getElementById('#resizable-box4'));
	document.getElementById('#resizable-box4').style.display = 'block';
	const photoGrid = document.getElementById('photo-grid');

	for (let i = 0; i < arrPath.length; i++) {
		const photoItem = document.createElement('a');
		photoItem.className = 'photo-item';
		photoItem.href = arrPath[i];;

		const img = document.createElement('img');
		img.src = arrPath[i];
		img.alt = `Photo ${i + 1}`;

		photoItem.appendChild(img);
		photoGrid.appendChild(photoItem);
	}
}