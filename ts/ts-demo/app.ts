
import {PrimitiveType} from './ts/primitiveType';
import {AnyType} from './ts/anyType'
let type = new PrimitiveType();
type.booleanTest();
type.numberTest();
type.stringTest();
type.voidTest();
type.nullAndUndefined();

let anyType = new AnyType();
anyType.anyTest();
