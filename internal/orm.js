/**
 * Orm yang digunakan oleh aplikasi.
 */
class Orm {
  set(orm) {
    this.orm = orm
  }

  get() {
    return this.orm
  }
}

module.exports = new Orm()
