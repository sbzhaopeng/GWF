/**
 * Loon 网络类型检测脚本
 * 作者: ChatGPT
 * 功能: 通过 http 请求触发，检测网络类型并显示通知
 */

if (typeof $network === "undefined") {
  $notification.post("网络检测失败", "Loon 未提供网络信息", "请确保通过 HTTP 请求触发执行");
  $done({});
} else {
  let title = "📡 当前网络状态";
  let subtitle = "";
  let detail = "";

  if ($network.wifi) {
    subtitle = "Wi-Fi 网络";
    detail = `SSID：${$network.ssid || "未知"}\nBSSID：${$network.bssid || "未知"}\nIP：${$network.ipv4 || "无IPv4"}`;
  } else if ($network.cellular) {
    subtitle = "蜂窝数据网络";
    detail = `运营商：${$network.carrier || "未知"}\nIP：${$network.ipv4 || "无IPv4"}`;
  } else {
    subtitle = "无网络连接";
    detail = "请检查网络状态。";
  }

  $notification.post(title, subtitle, detail);
  console.log(`${subtitle}\n${detail}`);
  $done({});
}
