import authService from "../../../services/auth/AuthService.js";
const login = async (req, res) => {
  const result = await authService.login(req.body.email, req.body.password);
  return res.status(200).json(result);
};

export default login;
