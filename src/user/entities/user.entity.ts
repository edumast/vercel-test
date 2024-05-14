import {Column, PrimaryColumn,Entity} from 'typeorm'
@Entity()
export class User {
    @PrimaryColumn({name:'user_id', length: 10})
    id:number

    @Column()
    name:string
}
