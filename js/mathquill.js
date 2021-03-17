console.log('hello')


var problemSpan = document.getElementById('problem');
MQ.StaticMath(problemSpan);


var mathFieldSpan = document.getElementById('math-field');
var mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true,
    handlers: {
      edit: function() {
        mathField.focus();
      }
    }
});


function input(str) {
    mathField.cmd(str);
    mathField.focus();
  }