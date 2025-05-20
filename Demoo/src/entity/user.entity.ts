import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";

export class User {
    id; // Unique identifier for the user

    email; // User's email address

    username; // User's username

    password; // User's password

    role; // Role associated with the user

    // No additional methods or functionalities added in this class
}
