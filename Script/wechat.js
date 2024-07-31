// https://your-script-url-here

function formatDateToHTTPDate(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = monthsOfYear[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    
    return `${dayOfWeek}, ${day < 10 ? '0' + day : day} ${month} ${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} GMT`;
}

var response = {};
var url = $request.url;
var method = $request.method;

if (url.includes("/xpg.html") && method === "GET") {
    // 动态获取当前 UTC 时间
    const now = new Date();
    const httpDate = formatDateToHTTPDate(now);
    
    // 修改响应头
    response.headers = {
        'HTTP/1.1': '200 OK',
        'Server': 'nginx',
        'Date': httpDate,
        'Content-Type': 'text/html',
        'Content-Length': '479',
        'Last-Modified': 'Tue, 02 Apr 2024 00:03:10 GMT',
        'Connection': 'close',
        'ETag': '"660b4b3e-1df"',
        'Accept-Ranges': 'bytes'
    };
    // 修改响应体
    response.body = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>403</title>
<style>
    body{
        background-color:#444;
        font-size:14px;
    }
    h3{
        font-size:60px;
        color:#eee;
        text-align:center;
        padding-top:30px;
        font-weight:normal;
    }
</style>
</head>
<body>
<h3>404，您请求的文件不存在!</h3>
</body>
</html>`;
} else if (url.includes("/tll/tll2024.php") && method === "POST") {
    // 动态获取当前 UTC 时间
    const now = new Date();
    const httpDate = formatDateToHTTPDate(now);
    
    // 修改响应头
    response.headers = {
        'HTTP/1.1': '200 OK',
        'Server': 'nginx',
        'Date': httpDate,
        'Content-Type': 'text/html; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Connection': 'keep-alive',
        'Vary': 'Accept-Encoding',
        'Content-Encoding': 'gzip'
    };
    // 修改响应体
    response.body = `ovhZc8c+BRrptq3lovODCdStwCzhpFP3POyauoJoz9Vb1AGHQ+L0osL20vg4GRSI`;
}

$done(response);
