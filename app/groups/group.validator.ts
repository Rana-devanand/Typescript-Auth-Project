import {body} from "express-validator"

export const creategroup = [
    body('name').notEmpty().withMessage('Name is required'),
    body('type').notEmpty().withMessage('Type is required'),
    body('adminId').notEmpty().withMessage('Admin ID is required'),
]