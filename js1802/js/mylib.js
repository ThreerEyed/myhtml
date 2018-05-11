// 用cache对象缓存已经获得过的元素
// 元素的id是key, 元素对象是对应的value
// 缓存: 牺牲空间换取时间的策略
var cache = {};

function $(id) {
	if (!cache[id]) {
		cache[id] = document.getElementById(id);
	}
	return cache[id];
}

function getStyle(elem) {
	return window.getComputedStyle ? 
		window.getComputedStyle(elem) : elem.currentStyle;
}
