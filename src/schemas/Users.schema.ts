import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { userEnum } from 'src/constants';

@Schema()
export class Users {
  @Prop({ required: true })
  userName: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    enum: Object.values(userEnum.role),
    default: userEnum.role.USER,
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
