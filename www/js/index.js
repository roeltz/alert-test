document.addEventListener('deviceready', () => {
	cordova.plugins.notification.local.schedule({
		title: "Cami",
		text: "¡Recuerda tomar tu pastilla!",
		every: { minute: 30 },
		actions: [
			{id: "take", title: "Tomar pastilla"},
			{id: "snooze", title: "Más tarde"}
		]
	});
	
	cordova.plugins.notification.local.on("take", () => {
		alert("Pastilla tomada");
	});

	cordova.plugins.notification.local.on("snooze", () => {
		alert("Pastilla pospuesta");
	});
});
