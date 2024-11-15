// PetDao.js (DAO)
import { petsModel } from "./models/pets.models.js";

export class PetDao {
  
    static async getPets() {
        return await petsModel.find().lean(); // lean() para obtener objetos planos de MongoDB
    }

    static async getBy(id) {
        return await petsModel.findOne({ _id: id }).lean();
    }

    static async updatePets(id, pet) {
        return await petsModel.updateOne({ _id: id }, pet);
    }

    static async delete(id) {
        return await petsModel.findByIdAndDelete(id);
    }

    static async createP(data) {
        return await petsModel.create(data);
    }
}
