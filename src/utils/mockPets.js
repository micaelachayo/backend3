import { faker } from '@faker-js/faker';
import PetDTO from '../DTO/pet.dto.js';

export const generateMockPets = (numPets) => {
    console.log("Número de mascotas a generar:", numPets); // Debug line
    let pets = [];
    
    for (let i = 0; i < numPets; i++) {
        const pet = {
            name: faker.person.firstName(),
            specie: faker.animal.type(),
            birthDate: faker.date.past(5),
            adopted: false,
            owner: null,
            image: faker.image.url()
        };

        // Usamos el DTO para formatear la mascota antes de agregarla al array
        pets.push(PetDTO.getPetInputFrom(pet));
    }
    
    return pets;
};
