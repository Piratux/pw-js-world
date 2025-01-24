// TODO: clean this code to make it easier to get named exports.

import PWGameWorldHelper from "./dist/Helper.js";
import Block from "./dist/Block.js";
import BufferReader, { ComponentTypeHeader } from "./dist/BufferReader.js";
import Player, { PlayerEffect } from "./dist/Player.js";
import { LayerType } from "./dist/Constants.js";

export default {
    PWGameWorldHelper, Block, BufferReader,
    Player, LayerType, ComponentTypeHeader,
    PlayerEffect
}