const colors = [
	'#333745',
	'#E63462',
	'#FE5F55',
	'#C7EFCF',
	'#EEF5DB',
	'#00B4A6',
	'#007DB6',
	'#FFE972',
	'#9C7671',
	'#0C192B',
];

const elem = document.querySelector('color-picker');
elem.setAttribute('colors', JSON.stringify(colors));
