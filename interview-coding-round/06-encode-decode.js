//! We make two funciton one is encode and another is decode

function encode(string) {
  //! Regex
  string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`);
}

function decode(string) {
  string.replace("", () => console.log());
}

console.log(encode(uuueeeiiiggg));
