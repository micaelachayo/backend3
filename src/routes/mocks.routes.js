// mocks.router.js
import { Router } from 'express';
import { generateDataController, generatePetsController, generateUsersController } from '../controller/mocks.controller.js';

export const router = Router();
// Endpoint para generar mascotas mockeadas
router.get('/mockingpets', generatePetsController);

// Endpoint para generar usuarios mockeados
router.get('/mockingusers', generateUsersController);

// Define el endpoint POST para generar datos mockeados
router.post('/generateData', generateDataController);