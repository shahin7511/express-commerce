import bcrypt from "bcrypt";

class Hash {
  constructor() {
    this.saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND);
  }

  make(password) {
    try {
      return bcrypt.hashSync(password, this.saltRounds);
    } catch (e) {
      console.log(e);
      throw new Error("Internal error. ");
    }
  }

  compare(password, hash) {
    try {
      return bcrypt.compareSync(password, hash);
    } catch (e) {
      console.log(e);
      throw new Error("Internal error. ");
    }
  }
}

export default new Hash();
