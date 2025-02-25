import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    email: string;

    @Column()
    password: string; // 비밀번호 노출 x , return 하지않음

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => Int)
    age: number;
}
