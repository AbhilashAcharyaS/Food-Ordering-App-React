import { sum } from "../sum"

test("Sum should return sum of the arguments", ()=>{
    const result = sum(2,4);
    expect(result).toBe(6);
})