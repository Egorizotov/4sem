const output = document.getElementById("result");

const btn0 = document.getElementById("btn_digit_0");
const btn1 = document.getElementById("btn_digit_1");
const btn2 = document.getElementById("btn_digit_2");
const btn3 = document.getElementById("btn_digit_3");
const btn4 = document.getElementById("btn_digit_4");
const btn5 = document.getElementById("btn_digit_5");
const btn6 = document.getElementById("btn_digit_6");
const btn7 = document.getElementById("btn_digit_7");
const btn8 = document.getElementById("btn_digit_8");
const btn9 = document.getElementById("btn_digit_9");
const btnDot = document.getElementById("btn_digit_dot");

const btnClear = document.getElementById("btn_op_clear");
const btnSign = document.getElementById("btn_op_sign");
const btnPercent = document.getElementById("btn_op_percent");
const btnDiv = document.getElementById("btn_op_div");
const btnMult = document.getElementById("btn_op_mult");
const btnMinus = document.getElementById("btn_op_minus");
const btnPlus = document.getElementById("btn_op_plus");
const btnEqual = document.getElementById("btn_op_equal");

let expr = "0";

function render() {
  output.textContent = expr;
}

function isOperator(ch) {
  return ch === "+" || ch === "-" || ch === "*" || ch === "/";
}

function appendDigit(d) {
  if (expr === "0") {
    expr = d;
  } else {
    expr += d;
  }
  render();
}

function appendDot() {
  let i = expr.length - 1;
  while (i >= 0 && !isOperator(expr[i])) i--;
  const currentNumber = expr.slice(i + 1);
  if (currentNumber.includes(".")) return;

  if (expr === "0") expr = "0.";
  else if (isOperator(expr[expr.length - 1])) expr += "0.";
  else expr += ".";
  render();
}

function appendOp(op) {
  if (expr.length === 0) return;

  const last = expr[expr.length - 1];
  if (isOperator(last)) {
    expr = expr.slice(0, -1) + op;
  } else {
    expr += op;
  }
  render();
}

function clearAll() {
  expr = "0";
  render();
}
// Максимальное количество символов (цифр) на экране
const MAX_DIGITS = 17

function appendDigit(d) {
  // Если текущая длина строки превышает MAX_DIGITS, не добавляем новые цифры
  if (expr.length >= MAX_DIGITS) {
    return; // Прекращаем выполнение функции
  }

  if (expr === "0") {
    expr = d;  // если на экране 0, заменяем на первую цифру
  } else {
    expr += d;  // добавляем цифру к текущему выражению
  }

  render();  // обновляем экран с новым значением
}

function toggleSign() {
  let i = expr.length - 1;
  while (i >= 0 && !isOperator(expr[i])) i--;
  const before = expr.slice(0, i + 1);
  let numStr = expr.slice(i + 1);

  if (numStr.length === 0) return;

  if (numStr.startsWith("(0-") && numStr.endsWith(")")) {
    numStr = numStr.slice(3, -1);
    expr = before + numStr;
  } else {
    expr = before + "(0-" + numStr + ")";
  }
  render();
}

function percent() {
  let i = expr.length - 1;
  while (i >= 0 && !isOperator(expr[i])) i--;
  const before = expr.slice(0, i + 1);
  let numStr = expr.slice(i + 1);

  if (numStr.length === 0) return;

  let value;
  try {
    value = eval(numStr);
  } catch {
    return;
  }
  value = value / 100;
  expr = before + String(value);
  render();
}

function compute() {
  const last = expr[expr.length - 1];
  if (isOperator(last)) return;

  try {
    const result = eval(expr);
    if (!Number.isFinite(result)) {
      expr = "0";
      output.textContent = "Ошибка";
      return;
    }
    expr = String(result);
    render();
  } catch {
    expr = "0";
    output.textContent = "Ошибка";
  }
}

btn0.onclick = () => appendDigit("0");
btn1.onclick = () => appendDigit("1");
btn2.onclick = () => appendDigit("2");
btn3.onclick = () => appendDigit("3");
btn4.onclick = () => appendDigit("4");
btn5.onclick = () => appendDigit("5");
btn6.onclick = () => appendDigit("6");
btn7.onclick = () => appendDigit("7");
btn8.onclick = () => appendDigit("8");
btn9.onclick = () => appendDigit("9");
btnDot.onclick = () => appendDot();

btnClear.onclick = () => clearAll();

btnPlus.onclick = () => appendOp("+");
btnMinus.onclick = () => appendOp("-");
btnDiv.onclick = () => appendOp("/");
btnMult.onclick = () => appendOp("*");

btnEqual.onclick = () => compute();

btnSign.onclick = () => toggleSign();
btnPercent.onclick = () => percent();

render();