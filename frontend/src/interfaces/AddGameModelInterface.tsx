import { NullLiteral } from "@babel/types";

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
  boxArt: ImageData | Blob
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

export interface DataResponse {
  
}

export default interface AddGameInterface {
  isLoading: boolean,
  data: DataResponse,
  error: Error | null
}

export interface LooseObject {
  [key: string]: any
}
