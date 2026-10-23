import { test } from "node:test"
import assert from "node:assert/strict"
import * as calc from "../src/calc.js"

const { add, subtract } = calc

test("add", () => {
  assert.equal(add(1, 1), 2)
})

test("subtract returns a positive difference", () => {
  assert.equal(subtract(5, 3), 2)
})

test("subtract returns a negative difference", () => {
  assert.equal(subtract(3, 5), -2)
})
