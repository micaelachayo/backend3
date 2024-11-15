// UsuarioDao.js (DAO)
import { usuarioModelo } from "./models/users.models.js";

export class UsuarioDao {
    
    static async getUsuario() {
        return await usuarioModelo.find().lean();
    }

    static async createUsuario(data) {
        return await usuarioModelo.create(data);
    }

    static async findById(filtro) {
        return await usuarioModelo.findOne(filtro).lean();
    }

    static async update(id, usuario) {
        return await usuarioModelo.updateOne({ _id: id }, usuario);
    }
}
