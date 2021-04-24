import { Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users") 
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  // Ele sempre e chamado sempre que instanciar um objetivo ou seja sempre que agente der um new user a esse construtor ele vai ser chamado e verificado id ja veio preenchido 
  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { User }