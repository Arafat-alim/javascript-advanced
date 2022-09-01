// ! Lexical Scope

function a() {
  function c() {
    console.log(b);
  }
  c();
}

var b = 14;

a(); //14
bhusgbashdsagb;
