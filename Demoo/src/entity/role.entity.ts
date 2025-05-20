import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    name;

    @ManyToMany(() => Permission)
    @JoinTable({
        joinColumn: { name: 'roleId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'permissionId', referencedColumnName: 'id' }
    })
    permissions;

    // No additional methods or functionalities added in this class
}
