import {} from "../bootstrap.js";
import attributeService from "../../../src/services/attribute/AttributeService.js";

afterEach(async () => {
  await attributeService.deleteAll({});
});

describe("tests CRUD attributes service operation", () => {
  const data = {
    name: "Color",
    type: "text",
    required: true,
  };
  test("Create Attribute Test", async () => {
    const attribute = await attributeService.create(data);
    return expect(attribute).toHaveProperty("_id");
  });
  test("Delete Attribute Test", async () => {
    const attribute = await attributeService.create(data);
    const result = await attributeService.delete(attribute._id);
    return expect(result).toHaveProperty("deletedCount", 1);
  });

  test("Patch Attribute Test", async () => {
    const attribute = await attributeService.create(data);
    const patchData = {
      name: "Colour",
      type: "hex",
    };
    const result = await attributeService.update(attribute._id, patchData);
    return expect(result).toHaveProperty("modifiedCount", 1);
  });

  test("Find Attribute Test", async () => {
    const attribute = await attributeService.create(data);
    return expect(attribute).toHaveProperty("_id");
  });
});
