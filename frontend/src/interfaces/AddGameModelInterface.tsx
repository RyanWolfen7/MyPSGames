import { NullLiteral } from "@babel/types";

export interface AddGameModelInterface {
  isOpen: Boolean
  toggle: CallableFunction
}

export interface AddGameFieldInterface {
  updateGameInfo: CallableFunction
  platforms: Platforms
}

export interface GameInfo {
  name: String
  genre: String
  releaseDate: Date
  players: Number
  boxArt: ImageData | null
  platforms: Platforms
}

export interface Platforms {
  ps1: Boolean
  ps2: Boolean
  ps3: Boolean
  ps4: Boolean
  psp: Boolean
  psv: Boolean
}
