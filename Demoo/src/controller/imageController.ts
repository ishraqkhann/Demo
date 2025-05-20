import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { extname } from "path";

/**
 * Uploads an image file.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The next middleware function.
 * @returns The uploaded image URL.
 */
export const UploadImage = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const storage = multer.diskStorage({
        destination: "./upload",
        filename(req, file, callback) {
            const randomName = Math.random().toString(20).substr(2, 12);
            return callback(null, `${randomName}-image${extname(file.originalname)}`);
        },
    });

    const upload = multer({ storage }).single("image");

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).send(err);
        }

        return res.send({
            url: `http://localhost:8000/api/uploads/${req.file.filename}`,
        });
    });
};
