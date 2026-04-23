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
} // Вывод на экран чисел и действий

function isOperator(ch) {
  return ch === "+" || ch === "-" || ch === "*" || ch === "/";
} // проверка, является ли символ оператором,  нужна чтобы делать проверки при добавлении операторов и знаков

function appendDot() {
  let i = expr.length - 1;
  while (i >= 0 && !isOperator(expr[i])) i--; // Находим начало текущего числа, двигаясь назад, пока не встретим оператор или не достигнем начала строки
  const currentNumber = expr.slice(i + 1);
  if (currentNumber.includes(".")) return;

  if (expr === "0") expr = "0.";
  else if (isOperator(expr[expr.length - 1])) expr += "0.";
  else expr += ".";
  render();
} // добавление десятичной точки, проверяет, есть ли уже точка в текущем числе, и не позволяет добавить вторую точку

function appendOp(op) { // добавление операторов, проверяет разные случаи, чтобы не допустить некорректные выражения

  if (op === "-" && expr === "0") {  // если нажать минус в начале, то начнем ввод отрицательного числа
    expr = "-";
    render();
    return;
  }

  if (expr.length === 0) return; // если строка пустая, не добавляем оператор (кроме случая с минусом выше)

  const last = expr[expr.length - 1];

  if (isOperator(last)) {
    expr = expr.slice(0, -1) + op; // если последний символ - оператор, заменяем его на новый оператор
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
  if (expr.length >= MAX_DIGITS) {
    return;
  }

  if (expr === "0") {
    expr = d;
  } else if (expr === "-") {
    expr = "-" + d;
  } else {
    expr += d;
  }

  render();
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
} // Вычисляет процент от текущего числа, деля его на 100, и обновляет выражение на экране. Если текущее число некорректно, функция просто возвращается без изменений.

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