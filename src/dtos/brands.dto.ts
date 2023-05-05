import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  // Para especificar un mensaje personalizado
  @IsString({ message: 'La marca debe tener nombre' })
  @IsNotEmpty()
  readonly name: string;
}

/**
 * Implementación utilizando PartialType para
 * no tener que escribir todos los campos de nuevo
 * pero con la diferencia que los haga a todos opcionales
 * */
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
