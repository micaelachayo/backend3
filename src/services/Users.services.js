// UsersService.js (Service)
import { UsuarioDao as DAO } from "../dao/users.dao.js";

class UsersService {
    constructor(dao) {
        this.dao = dao;
    }

    async getUserByEmail(email) {
        try {
            return await this.dao.findById({ email });
        } catch (error) {
            throw new Error(`Error al buscar el usuario: ${error.message}`);
        }
    }

    async getUserById(id) {
        try {
            const user = await this.dao.findById({ _id: id });
            if (!user) throw new Error("Usuario no encontrado");
            return user;
        } catch (error) {
            throw new Error(`Error al obtener el usuario: ${error.message}`);
        }
    }

    async create(data) {
        try {
            return await this.dao.createUsuario(data);
        } catch (error) {
            throw new Error(`Error al crear el usuario: ${error.message}`);
        }
    }

    async updateUser(id, data) {
        try {
            const updatedUser = await this.dao.update(id, data);
            if (updatedUser.modifiedCount === 0) throw new Error("Usuario no encontrado para actualizar");
            return updatedUser;
        } catch (error) {
            throw new Error(`Error al actualizar el usuario: ${error.message}`);
        }
    }
}

export const usersService = new UsersService(DAO);
