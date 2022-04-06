export function pieceColor(pieceSymbol: string) {
  return pieceSymbol === pieceSymbol.toLowerCase() ? "black" : "white"
}

export function fenColorTurn(fen: string) {
  return fen.split(" ")[1] === "w" ? "white" : "black"
}

export function nameFromFile(files?: FileList) {
  if (files === undefined) {
    return []
  }
  return Array.from(files).map((file) => file.name)
}

export function delay(n: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000)
  })
}

export function convertSquareIdx(i: number) {
  return (7 - Math.floor(i / 8)) * 8 + (i % 8)
}
