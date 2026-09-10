import jwt from "jsonwebtoken";

export function login(req, res) {
  const { email, password } = req.body;

  const adminEmail = process.env.ADMIN_EMAIL || "admin@portfolio.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET || "dev_secret", {
    expiresIn: "1d"
  });

  res.json({ token });
}
