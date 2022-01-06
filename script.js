//To add a symbol (don`t forget to add "onclick="insert(...)" in HTML items)
function insert(num) {
   document.form.textview.value = document.form.textview.value + num;
}

//To clean input (don`t forget to add "onclick="clean()" in HTML item)
function clean() {
   document.form.textview.value = "";
}

//To delete a symbol (don`t forget to add onclick="back()" in HTML item)
function back() {
   var exp = document.form.textview.value; //добавляем переменную, в которой будут содержаться все данные, которые есть в поле
   document.form.textview.value = exp.substring(0,exp.length-1); //берём переменную и от неё получаем ПОДСТРОКУ методом substring
                                                                 //длина от 0-первого символа до exp.length-1-предпоследнего символа
}

//To get a result (don`t forget to add onclick="equal()" in HTML item)
function equal() {
   var exp = document.form.textview.value; //создаём переменную, содержащую текущее состояние текстовой СТРОКИ
   if(exp) { //если переменная не пустая, то будем устанавливать в это поле результат
      document.form.textview.value = eval(exp); // функция eval принимает код из строки и высчитывает результат-это выглядит так'8*6'
   }                                            //затем она высчитывает результат и возвращает его в текстовое поле
}