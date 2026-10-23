import { test } from "node:test"
import assert from "node:assert/strict"
import { add } from "../src/calc.js"
import * as calc from "../src/calc.js"

test("add", () => {
  assert.equal(add(1, 1), 2)
})

test("subtract returns a positive difference", () => {
  assert.equal(calc.subtract(5, 3), 2)
})

test("subtract returns a negative difference when b is larger", () => {
  assert.equal(calc.subtract(3, 5), -2)
})
