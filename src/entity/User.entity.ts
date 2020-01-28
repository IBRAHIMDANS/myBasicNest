import { BaseEntity, Column, CreateDateColumn, Entity, EventSubscriber, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsBoolean, IsDate, IsEmail, IsString, Length } from 'class-validator';

@Entity('User')
@EventSubscriber()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid!: string;

    @Column('text', { nullable: true })
    @Length(4, 20)
    @IsString()
    firstName!: string;

    @Column('text', { nullable: true })
    @Length(4, 20)
    @IsString()
    lastName!: string;

    @Column('text', { nullable: true, unique: true })
    @IsEmail()
    email!: string;

    @Column('boolean')
    @IsBoolean()
    isActive!: boolean;

    @Column('text', { select: false })
    @Length(4, 100)
    @IsString()
    password!: string;

    @CreateDateColumn({ type: 'timestamp' })
    @IsDate()
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    @IsDate()
    updatedAt!: Date;
}
