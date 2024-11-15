// PetsService.js (Service)
import { PetDao as DAO } from "../dao/pets.dao.js";

class PetsService {
    constructor(dao) {
        this.dao = dao;
    }

    async getPets() {
        try {
            return await this.dao.getPets();
        } catch (error) {
            throw new Error(`Error al obtener las mascotas: ${error.message}`);
        }
    }

    async getBy(id) {
        try {
            const pet = await this.dao.getBy(id);
            if (!pet) {
                throw new Error("Mascota no encontrada");
            }
            return pet;
        } catch (error) {
            throw new Error(`Error al obtener la mascota: ${error.message}`);
        }
    }

    async update(id, pet) {
        try {
            const updatedPet = await this.dao.updatePets(id, pet);
            if (updatedPet.modifiedCount === 0) {
                throw new Error("No se pudo actualizar la mascota (posiblemente no exista)");
            }
            return updatedPet;
        } catch (error) {
            throw new Error(`Error al actualizar la mascota: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const deletedPet = await this.dao.delete(id);
            if (!deletedPet) {
                throw new Error("Mascota no encontrada para eliminar");
            }
            return deletedPet;
        } catch (error) {
            throw new Error(`Error al eliminar la mascota: ${error.message}`);
        }
    }

    async create(data) {
        try {
            return await this.dao.createP(data);
        } catch (error) {
            throw new Error(`Error al crear la mascota: ${error.message}`);
        }
    }
}

export const petsService = new PetsService(DAO);
