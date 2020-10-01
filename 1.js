document.addEventListener("DOMContentLoaded",function(){
	var nutchayslide = document.querySelectorAll('.nutslide ul li'); // phần khai báo phần nút slide
	var slidechay = document.querySelectorAll('.cacslide ul li'); // phần khai báo các slide
	var thoigian = setInterval(function(){	autoslide()}, 4000) // set thời gian autu slide
	for (var i = 0; i < nutchayslide.length; i++) // duyệt các phần tử nút
	{
		nutchayslide[i].onclick = function() // cho các nút hàm click
		{
			clearInterval(thoigian); // khi click thì bỏ hàm auto slide
			for (var i = 0; i < nutchayslide.length; i++) 
			{
				nutchayslide[i].classList.remove('chayslide'); // tất cả các nút đc bỏ class đang chạy
			}
			this.classList.add("chayslide"); // sau đó add class vào phần tử đang được click
				var thutuslide = this;
				var vitrislide = 0;
				for (var vitrislide = 0; thutuslide = thutuslide.previousElementSibling; vitrislide++){} //hàm check vị trí của nút đang click và xác định slide tương ứng
					for (var i = 0; i < slidechay.length; i++) 
					{
						slidechay[i].classList.remove('active'); // xác định được rồi thì duyệt r cho tất cả slide ẩn đi
						slidechay[vitrislide].classList.add('active');// cho slide tương ứng với nút hiện lên
					}
		}
	}
	// viet ham autoslide
	autoslide = function()
	{
		var vitrislide = 0;
		var slidedanghien =document.querySelector('.cacslide ul li.active');

		for (var vitrislide = 0;  slidedanghien = slidedanghien.previousElementSibling; vitrislide++) {} // kiểm tra vị trí slide đang active
		if(vitrislide < slidechay.length -1) // nếu vị trí đang nhỏ hơn slide thì remove tất cả rồi add vào thằng tiếp theo
		{
			for (var i = 0; i < slidechay.length; i++) {
			slidechay[i].classList.remove('active');
			nutchayslide[i].classList.remove('chayslide');
		}
			slidechay[vitrislide].nextElementSibling.classList.add('active');
			nutchayslide[vitrislide].nextElementSibling.classList.add('chayslide');
		}
		else // nếu bằng thì cũng bỏ tất cả và add vào thằng đầu tiên, coi như được 1 vòng
		{
			for (var i = 0; i < slidechay.length; i++) {
			slidechay[i].classList.remove('active');
			nutchayslide[i].classList.remove('chayslide');
		}
			slidechay[0].classList.add('active');
			nutchayslide[0].classList.add('chayslide');
		
		}
	}

},false)