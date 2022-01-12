import { ValidationError } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { isObject, isArray, reduce, camelCase } from 'lodash';

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

// I have absolutely no idea how this thing works. Apparently its a recursive function or
// something. I will just leave the SO link:
// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
export const camelCaseKeys: any = (obj: any) => {
  if (!isObject(obj)) {
    return obj;
  } else if (isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v));
  }
  return reduce(
    obj,
    (r, v, k) => {
      return {
        ...r,
        [camelCase(k)]: camelCaseKeys(v),
      };
    },
    {}
  );
};
