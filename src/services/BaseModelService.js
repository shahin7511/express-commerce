class BaseModelService {
  constructor(model) {
    this.model = model;
  }

  create(data) {
    return this.model.create(data);
  }

  delete(id) {
    return this.model.deleteOne({ _id: id });
  }

  update(id, data) {
    return this.model.updateOne({ _id: id }, data);
  }

  find(id) {
    return this.model.findById(id);
  }

  deleteAll(filters = {}) {
    return this.model.deleteMany(filters);
  }
}

export default BaseModelService;
