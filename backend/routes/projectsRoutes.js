"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController = __importStar(require("../controllers/projectsController"));
const auth_1 = require("../Auth/auth");
const UploadRoutes_1 = __importDefault(require("./UploadRoutes"));
const p_router = express_1.default.Router();
p_router.get("/projects/id", projectController.getProjectById);
p_router.get("/projects", projectController.getAllProjects);
p_router.get("/projects/title", projectController.getProjectByTitle);
p_router.post("/projects", auth_1.verifyAccessToken, UploadRoutes_1.default.single('image_url'), projectController.createProject);
p_router.put("/projects", auth_1.verifyAccessToken, projectController.updateProject);
p_router.delete("/projects", auth_1.verifyAccessToken, projectController.deleteProject);
exports.default = p_router;
