import { Router } from "express";
import {
	login,
	logout,
	protect,
	signup,
} from "./../controllers/authController";
import { getAllUsers } from "./../controllers/userController";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get("/", (_, res) => {
	res.json({
		message: "Working...",
	});
});
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// Protect all routes after this middleware
router.use(protect);

router.route("/").get(getAllUsers);

export default router;
