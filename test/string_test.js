'use strict';
import { toHump, toHyphen, toFormData } from '../src/string';

describe('toHump', () => {
    it('返回值验证', () => {
        expect(toHump('font-size')).toBe('fontSize');
        expect(toHump('-font-size')).toBe('FontSize');
        expect(toHump('-font-size-')).toBe('FontSize-');
        expect(toHump('color')).toBe('color');
        expect(toHump('xxx-111-xx')).toBe('xxx111Xx');
        expect(toHump('background-color')).toBe('backgroundColor');
    });
});

describe('toHyphen', () => {
    it('返回值验证', () => {
        expect(toHyphen('FontSize')).toBe('-font-size');
        expect(toHyphen('fontSize')).toBe('font-size');
        expect(toHyphen('FontSize-')).toBe('-font-size-');
        expect(toHyphen('XXX')).toBe('-x-x-x');
    });
});

describe('toFormData', () => {
    it('测试效果', () => {
        expect(toFormData('name=zhangsan&age=22&gender=male')).toEqual({name:'zhangsan', age: '22', gender:'male'});
        expect(toFormData('?name=zhangsan&age=22&gender=male&other={gender: "male"}')).toEqual({name: "zhangsan", age: "22", gender: "male", other: "{gender: \"male\"}"});
    })
});
