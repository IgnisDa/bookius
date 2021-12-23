import { ValidationError } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export async function validatePlainObjectByDecorators(
  obj: any,
  transformToType: any
) {
  const transformedObj = plainToClass(transformToType, obj);
  const validationErrors: ValidationError[] = await validate(transformedObj);
  const errors: Record<string, string[]> = {};
  validationErrors.map((v) => {
    errors[v.property] = Object.values(v.constraints!);
    return errors;
  });
  return errors;
}
