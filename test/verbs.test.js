import test from "node:test";
import assert from "node:assert/strict";
import { OUTFIT_ACTION_VERBS, isOutfitActionVerb } from "../src/verbs.js";

test("outfit action verbs only include outfit switching terms", () => {
    assert.deepEqual(OUTFIT_ACTION_VERBS, ["switch", "change", "swap"]);
    assert.equal(isOutfitActionVerb("switch"), true);
    assert.equal(isOutfitActionVerb("speaker"), false);
    assert.equal(isOutfitActionVerb(""), false);
});

