/**
 * network_check.js
 * Loon 网络类型检测脚本（本地插件配套脚本）
 * 触发方式：在浏览器访问 https://network-check.loon/
 *
 * 功能：判断当前为 Wi-Fi 或 蜂窝数据并弹出通知；在控制台输出详细信息
 */

(function () {
  if (typeof $network === "undefined") {
    $notification.post("网络检测 - 失败", "Loon 未提供网络信息", "请通过 http-request 触发（访问 https://network-check.loon/）");
    $done({});
    return;
  }

  let title = "📡 网络类型检测";
  let subtitle = "";
  let detail = "";

  try {
    if ($network.wifi) {
      subtitle = "Wi-Fi 网络";
      detail = `SSID：${$network.ssid || "未知"}\nBSSID：${$network.bssid || "未知"}\nIP：${$network.ipv4 || "无IPv4"}`;
    } else if ($network.cellular) {
      subtitle = "蜂窝数据（移动数据）";
      detail = `运营商：${$network.carrier || "未知"}\nIP：${$network.ipv4 || "无IPv4"}`;
    } else {
      subtitle = "网络状态未知或无网络";
      detail = "请检查设备网络连接。";
    }
  } catch (e) {
    subtitle = "检测异常";
    detail = `错误：${e && e.message ? e.message : JSON.stringify(e)}`;
  }

  $notification.post(title, subtitle, detail);
  console.log(`${title}\n${subtitle}\n${detail}`);
  $done({});
})();
