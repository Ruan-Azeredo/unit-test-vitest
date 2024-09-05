import { assert, test } from "vitest";
import { Connection } from "./connection";

test('test API connection', async () => {
    const connection = new Connection()

    const response =  await connection.callApi()

    assert.instanceOf(response, Array)
})