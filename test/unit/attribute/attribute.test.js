import {} from "../bootstrap.js";
import AttributeService from "../../../src/services/attribute/AttributeService.js";

describe("tests CRUD attributes service operation", () => {
  const data = {
    name: "Color",
    type: "text",
    required: true,
  };
  test("Create Attribute Test", async () => {
    const attribute = await AttributeService.create(data);
    return expect(attribute).toHaveProperty("_id");
  });
  test("Delete Attribute Test", async () => {
    const attribute = await AttributeService.create(data);
    const result = await AttributeService.delete(attribute._id);
    return expect(result).toHaveProperty("deletedCount", 1);
  });
});
