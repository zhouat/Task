/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var cityInput = document.getElementById('aqi-city-input');
  var indexInput = document.getElementById('aqi-value-input');

  cityInput.value && indexInput.value && (aqiData[cityInput.value] = indexInput.value);

  if (!cityInput.value) {
    alert('请输入城市名称');
    return;
  } else if (!indexInput.value) {
    alert('请输入空气质量指数');
    return;
  }

  return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var strHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';

  for (var n in aqiData) {
    strHTML += '<tr><td>' + n + '</td><td>' + aqiData[n] + '</td><td><button>删除</button></td></tr>';
  }
  document.getElementById('aqi-table').innerHTML = strHTML;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(index) {
  delete aqiData[index];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

  document.getElementById('add-btn').addEventListener('click', addBtnHandle);

  document.getElementById("aqi-table").addEventListener("click", function(e) {
    if (e.target.nodeName == "BUTTON") {

      delBtnHandle(e.target.parentNode.parentNode.firstChild.firstChild.nodeValue);
    }
  });
}

init();