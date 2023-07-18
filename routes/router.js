const express = require("express");
const controller = require("./../controller/controller");
const catchAsync = require("./../utils/catchAsync");
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');

const router = express.Router();
/**
 * @swagger
 * /hello:
 *   get:
 *     description: Get all Employee
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/hello", catchAsync(controller.getHello));

module.exports = router;
