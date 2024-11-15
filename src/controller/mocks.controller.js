// mocks.controller.js
import { petsService} from '../services/Pets.services.js';
import { usersService } from '../services/Users.services.js';
import { generateMockPets } from '../utils/mockPets.js';
import { generateMockUsers } from '../utils/mockUsers.js';

// Controlador para generar mascotas mockeadas
export const generatePetsController = (req, res) => {
  try {
    const num = parseInt(req.query.num, 10) || 50; // Número de mascotas, por defecto 50
    console.log("Número solicitado en la query:", num);
    const pets = generateMockPets(num); // Genera el número de mascotas mockeadas
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ payload: pets });
  } catch (error) {
    console.log(error);
    res.setHeader('Content-Type','application/json');
    return res.status(500).json(
        {
            error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            detalle:`${error.message}`
        }
    )
    
  }
};

// Controlador para generar usuarios mockeados
export const generateUsersController = async (req, res) => {
    try {
        const numUsers = parseInt(req.query.num) || 50;
        const mockUsers = await generateMockUsers(numUsers);
        
       ; // Genera 50 usuarios por defecto
        res.status(200).json({mockUsers}); // Devuelve los usuarios generados
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        res.status(500).json({ message: `Error al generar los usuarios: ${error.message}` });
    }
};


export const generateDataController = async (req, res) => {
    try {
        const users = parseInt(req.query.users, 10) || 0;
        const pets = parseInt(req.query.pets, 10) || 0;

        console.log(`Número de usuarios a generar: ${users}`);
        console.log(`Número de mascotas a generar: ${pets}`);


        // Generar usuarios y mascotas mockeados
        const mockUsers = await generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        // Insertar usuarios y mascotas en la base de datos de manera paralela
        await Promise.all([
            ...mockUsers.map(user => usersService.create(user)),
            ...mockPets.map(pet => petsService.create(pet))
        ]);

        res.status(200).json({
            status: 'success',
            message: `${users} users and ${pets} pets inserted into the database`,
            mockUsers,mockPets
        });
    } catch (error) {
        console.error("Error al generar datos mockeados:", error);
        res.status(500).json({
            status: 'error',
            message: "Error al generar datos mockeados",
            detail: error.message
        });
    }
};

