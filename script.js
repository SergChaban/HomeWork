function Coffee() {
	let water = 0,  // сколько воды
		price = 2, // цена чашки кофе
		coffeeWater = 0.5, // сколько литров на одну чашку
		money = 0, // денег в аппарате 
		gramCoffee = 0, // сколько кофе в аппарате в кг
		gramCupCoffee = 0.3, // сколько грамм кофе уходит на одну чашку
		moneyBtn = document.querySelector(".reception"),
		buttonStart = document.querySelector(".button-start"),
		buttonChange = document.querySelector('.change'),
		tablo = document.querySelector(".interface"), 
		buttonWater = document.querySelector(".water"),
        buttonCoffee = document.querySelector(".coffee"),
        buttonCappuccino = document.querySelector(".cappuccino"),
        buttonAmericano = document.querySelector(".americano"),
        cof = document.querySelector(".cof"),
        
		coffeWater = document.querySelector(".coffe-water");

	moneyBtn.onclick = function () {
		let prom = prompt(`
    Вставьте деньги.
       Цена кофе ${price}$.
      `);
		if (prom) {
			if (isNaN(+prom) || +prom < 0) return;
			tablo.innerHTML = prom + "$ приняты";
			money += +prom;
		}
	}

	self = this;

	buttonStart.onclick = function () {
		coffeWater.style.display = "block";
		self.start();
	};

	buttonChange.onclick = function () {
		tablo.innerHTML = `Ваша сдача: ${money}$`;
		money = 0;
		clearInterval(timerID)
		cof.style.height = ""
		coffeWater.style.display = "none";
	}

	buttonWater.onclick = function () {
		let prom = prompt(`Залейти воду. Не больше 5 литров.`, "5");
		if (prom) {
			if (isNaN(+prom) || +prom < 0) return;
			self.setWater(+prom)
			self.getWater()
		}
	}

	buttonCoffee.onclick = function () {
		let prom = prompt(`Засыпте кофе. Не больше 5кг.`, "5");
		if (prom) {
			if (isNaN(+prom) || +prom < 0) return;
			self.setGramCoffee(+prom);
			self.getGramCoffee();
		}
	}
	buttonAmericano.onclick = function () {
		let prom = alert(`Вы выбрали Амереканно `, "Да");
		if (prom) {
			if (isNaN(+prom) || +prom < 0) return;
			self.setGramCoffee(+prom);
			self.getGramCoffee();
		}

	}
  
    buttonCappuccino.onclick = function () {
		let prom = alert(`Вы выбрали Крапучина`, "Да");
		if (prom) {
			if (isNaN(+prom) || +prom < 0) return;
			self.setGramCoffee(+prom);
			self.getGramCoffee();
		}
	}

	this.getWater = function () {  // узнаём сколько воды осталось
		tablo.innerHTML = `Воды в аппарате: ${water}л`;
	};

	this.setWater = function (liter) { // заливаем воду, если больше 5 литров, то объём будет 5 литров
		if (!water) {
			liter <= 5 ? water = liter : water = 5;
		} else if (water) {
			(water + liter < 5) ? water += liter : water = 5;
		}
	};

	this.getGramCoffee = function () { // узнаём сколько кофе осталось
		tablo.innerHTML = `Кофе в аппарате: ${gramCoffee}кг`;
	};

	this.setGramCoffee = function (event) { // засыпаем кофе, если больше 5кг, то будет 5кг
		if (!gramCoffee) {
			event <= 5 ? gramCoffee = event : gramCoffee = 5;
		}
	};

	this.getPrice = function () { // цена одной чашки
		console.log(`Цена одной чашки: ${price}$`);
	};

	this.setPrice = function (event) { // устанавливаем цену одной чашки
		if (event) {
			price = event;
		}
	};

	this.getMoney = function (event) { // узнаем сколько денег в аппарате
		console.log(`Денег в аппарате: ${money}$`);
	}

	this.setMoney = function (event) { // вставляем деньги
		if (event > 0) money = event;
		console.log('Деньги приняты')
	}

	this.start = function () { // готовим кофе
		cof.style.height = "";
		tablo.innerHTML = "";
		if (money < price) {
			tablo.innerHTML += `Не хватает ${price - money}$<br>`;
		}


		if (coffeeWater > water) {
			tablo.innerHTML += `Не хватает ${coffeeWater - water} литра(ов) воды<br>`;
		}


		if (gramCoffee < gramCupCoffee) {
			tablo.innerHTML += `Не хватает ${gramCupCoffee - gramCoffee} грамм(а) кофе<br>`;
		}

		if (money >= price && water > coffeeWater && gramCoffee > gramCupCoffee) {
			timerID = setInterval(time, 1000);
			let i = 5;
			function time() {
				tablo.innerHTML = `Кофе будет готов через ${i}`;
				if (i === 0) {
					clearInterval(timerID);
					tablo.innerHTML = `Кофе готов.`;
					coffeWater.style.height = "219px";
					setTimeout(() => { cof.style.height = "100px" }, 400);
					setTimeout(() => { coffeWater.style.display = "none"; coffeWater.style.height = "0px" }, 1400);
				}
				--i;
			}
			money -= price;
			water -= coffeeWater;
			gramCoffee -= gramCupCoffee;
		};
	};
};

let coffee = new Coffee();