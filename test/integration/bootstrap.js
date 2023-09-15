import app from "../../src/app.js";
import request from "supertest";
const server = request(app);
export default server;
