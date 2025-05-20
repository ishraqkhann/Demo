import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    lastName;

    @Column()
    firstName;

    @Column()
    email;

    @CreateDateColumn()
    created_at;

    @OneToMany(() => OrderItem, orderItems => orderItems.order)
    order_items;

    /**
     * Retrieves the full name of the customer.
     *
     * @returns The full name of the customer.
     */
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * Calculates the total price of the order.
     *
     * @returns The total price of the order.
     */
    get total() {
        return this.order_items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }
}
