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
}

export default BaseModelService;
