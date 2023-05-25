"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.getProfile = void 0;
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
const success_1 = require("../core/enums/success");
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield UserRepository_1.default.getUserById(req.body.user.id);
    res.json(profile);
});
exports.getProfile = getProfile;
const deleteAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserRepository_1.default.deleteUser(req.body.user.id);
    return res.json({ message: success_1.Success.ACCOUNT_DELETED });
});
exports.deleteAccount = deleteAccount;
