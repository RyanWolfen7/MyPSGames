import { NullLiteral } from "@babel/types";
import { Image } from "react-native";

export interface AddGameModelInterface {
  isOpen: Boolean
  toggle: CallableFunction
}

export interface AddGameFieldInterface {
  updateGameInfo: CallableFunction
  platforms: Platforms
}

export interface AddGameInputSchemaInterface {
  schema: Array<Schema>
}

export interface Schema {
  name: String
  field: String
  type: String
}
export interface GameInfo {
  name: String
  genre: String
  releaseDate: Date
  players: Number
  boxArt: String
  publisher: String
  platforms: Platforms
}['name', 'genre', 'releaseDate', 'players', 'boxArt', 'platforms']

export interface Platforms {
  ps1: Boolean
  ps2: Boolean
  ps3: Boolean
  ps4: Boolean
  psp: Boolean
  psv: Boolean
}

export interface GamesInLibrary {
  genre: string
  name: string
  platforms: Platforms
  players: number
  boxArt: string
  publisher: string
  releaseDate: string
  _v: number
  _id: string
}

export default interface AddGameInterface {
  isLoading: boolean,
  gamesList: GamesInLibrary[],
  game: GamesInLibrary
  error: Error | null
}

export interface LooseObject {
  [key: string]: string
}
