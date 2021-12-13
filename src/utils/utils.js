export function getTime(timestamp = Date.now()) {
  // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
  const date = new Date(timestamp);
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D = date.getDate() + " ";
  const h = date.getHours() + ":";
  const m = date.getMinutes() + ":";
  const s = date.getSeconds();
  const res = Y + M + D + h + m + s;
  //   console.log(Y + M + D + h + m + s);
  // 输出结果：2014-04-23 18:55:49
  return res;
}

export function getDate(timestamp) {
  // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
  const date = new Date(timestamp);
  const Y = date.getFullYear() + ".";
  const M = date.getMonth() + 1 + ".";
  const D = date.getDate();
  const res = Y + M + D;
  //   console.log(Y + M + D);
  // 输出结果：2014.04.23
  return res;
}
