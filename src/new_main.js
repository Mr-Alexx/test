export default `
/**
 * 重写网页关键js代码
 * new_main.js
 */

// 停掉原页面的调用
function showHint () {}
// if (window.XMLHttpRequest) {
// 	window.XMLHttpRequest = function () {}
// } else {
// 	window.ActiveXObject = function () {}
// }

function getNumber (value) {
	if (isNaN(value)) {
		return 0
	}
	return parseFloat(value)
}

const code2Name = {
  JZJ_au: '黄金:1',
  JZJ_ag: '白银:2',
  JZJ_pt: '铂金:3',
  JZJ_pd: '钯金:4',
  SG5101: '黄金9999:5',
  SG5124: '港金:50',
  CFDXAU: '伦敦金:51',
  XPTUSD: '伦敦铂:52',
  USDCNH: '美元汇率:53',
}

async function showData () {
	const res = await fetch('./get_price.php')
	const data = await res.json()

	// 非营业中，不做处理
	// if (data.state !== '1') {
	// 	return
	// }

	const list = data.items || []

	const codes = Object.keys(code2Name)
	const formData = list
		.filter(item => codes.includes(item.code))
		.map((item) => {
			const [name, type] = code2Name[item.code].split(':')

			return {
				name,
				type: +type,
				buy_back_price: getNumber(item.bidprice),
				sale_price: getNumber(item.askprice),
				sale_price_low: getNumber(item.low),
				sale_price_high: getNumber(item.high),
				// 0未知，1跌，2涨
				updown: item.updown === '0' ? 1 : item.updown === '1' ? 2 : 0,
			}
		})
	// console.log('formData', formData)

	// 上传数据
	// http://127.0.0.1:7001/api/metals/update-crawl-data
	// https://api.izoro.top/api/metals/update-crawl-data
	// const url = 'https://api.izoro.top/api/metals/update-crawl-data'
	const url = 'http://127.0.0.1:3001/crawl'
	fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			date: new Date(),
			state: +data.state,
			data: formData
		})
	})
	// window.timer2 = setInterval(() => {
	// 	fetch('http://127.0.0.1:3001')
	// }, 3000)
}

showData();
setInterval(showData, 5000);
`