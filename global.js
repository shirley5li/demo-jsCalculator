var clear = false;//记录清除按钮
var calString = "";//记录通过按钮输入的计算字符串
var ans = "";//记录计算结果
$(document).ready(function() {
	$("button").click(function() {
		//text记录每一个按钮的值
		var text = $(this).attr("value");
		if(parseInt(text, 10) == text || text === "%" || text === "/" || text === "*" || text === "-" || text === "+" || text === ".") {
			//如果没有按清除，则将按下的按键值拼接
			if(clear === false) {
				calString += text;
				//将拼接的输入字符串显示在屏幕区域
				$(".display").html(calString);

			} else {
				calString = text;
				$(".display").html(calString);
				clear = false;
			}
		} else if(text === "AC") {
			calString = "";
			$(".display").html("");
		} else if(text === "CE") {
			calString = calString.slice(0,-1);
			$(".display").html(calString);
		} else if(text === "=") {
			//eval()方法 计算某个字符串，并执行其中的的 JavaScript 代码
			ans = eval(calString);
			$(".display").html(ans);
			clear = true;
		}
	});
});