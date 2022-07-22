
$(document).ready(function() {
	var country = '';
	$.get("https://api.2ip.ua/geo.json?key=b8b8e66abf73f451", function (response) {
		country = response.country_code;
		chengPlaceholder(country);
		$('[name="phone"]').click(function () {
			chengPhone(country, $(this))
		})
	}, "json");

	function chengPhone(country, idPhone) {
		if (country == 'UA') {
			if (idPhone.val() == '') {
				idPhone.val('+380');
			}
		} else if (country == "RU" || country == "KZ") {
			if (idPhone.val() == '') {
				idPhone.val('+7');
			}
		} else if (country == "BY") {
			if (idPhone.val() == '') {
				idPhone.val('+375');
			}
		} else if (country == "TR") {
			if (idPhone.val() == '') {
				idPhone.val('+90');
			}
		} else if (country == "AZ") {
			if (idPhone.val() == '') {
				idPhone.val('+994');
			}
		} else if (country == "KG") {
			if (idPhone.val() == '') {
				idPhone.val('+996');
			}
		} else if (country == "MD") {
			if (idPhone.val() == '') {
				idPhone.val('+373');
			}
		} else if (country == "LV") {
			if (idPhone.val() == '') {
				idPhone.val('+371');
			}
		} else if (country == "GE") {
			if (idPhone.val() == '') {
				idPhone.val('+995');
			}
		} else if (country == "UZ") {
			if (idPhone.val() == '') {
				idPhone.val('+998');
			}
		} else if (country == "PL") {
			if (idPhone.val() == '') {
				idPhone.val('+48');
			}
		} else if (country == "EE") {
			if (idPhone.val() == '') {
				idPhone.val('+372');
			}
		} else {
			idPhone.val('+');
		}
	}
	function chengPlaceholder(country) {
		if (country == 'UA') {
			$('[type="tel"]').attr("placeholder", "+38 (ххх) ххx-хх-хх");
		} else if (country == "RU" || country == "KZ") {
			$('[type="tel"]').attr("placeholder", "+7 xxx xxx xxxx");
		} else if (country == "BY") {
			$('[type="tel"]').attr("placeholder", "+375 xxx xxx xxxx");
		} else if (country == "TR") {
			$('[type="tel"]').attr("placeholder", "+90 xxx xxx xx xx");
		} else if (country == "AZ") {
			$('[type="tel"]').attr("placeholder", "+994 xxxx xxx xx");
		} else if (country == "KG") {
			$('[type="tel"]').attr("placeholder", "+996 xxx xxx xx");
		} else if (country == "MD") {
			$('[type="tel"]').attr("placeholder", "+373 xxx xxxxx");
		} else if (country == "LV") {
			$('[type="tel"]').attr("placeholder", "+371 xxx xxxxx");
		} else if (country == "GE") {
			$('[type="tel"]').attr("placeholder", "+995 xxx xx xx");
		} else if (country == "UZ") {
			$('[type="tel"]').attr("placeholder", "+998 xxxxx xx xx");
		} else if (country == "PL") {
			$('[type="tel"]').attr("placeholder", "+48 xx xxx xx");
		} else if (country == "EE") {
			$('[type="tel"]').attr("placeholder", "+372 xxxx xxxx");
		} else {
			$('[type="tel"]').attr("placeholder", "Ваш номер телефона");
		}
	}

});