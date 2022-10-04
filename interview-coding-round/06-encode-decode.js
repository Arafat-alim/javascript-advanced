//! Program on encode and decoded string using repeat()

const encode = (string) => {
  return string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`);
};

const decode = (string) => {
  return string.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y));
};

const encodedString = encode("tttuyiioopplllll");
console.log(encodedString); // 3tuy2i2o2p5l
console.log(decode(encodedString)); //tttuyiioopplllll
