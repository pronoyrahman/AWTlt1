import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('faculties')
export class Faculties {
    @PrimaryColumn({type: 'varchar', length: 10})
    id: string;

    @Column({type:'varchar', length: 100})
    name: string;

    @Column({
        type:'varchar', 
        length: 100
    })
    expertise: string;

    @Column({
      type: 'int',
    })
    noOFPublication: number;

}