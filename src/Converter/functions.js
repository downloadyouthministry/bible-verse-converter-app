const lP = (value, length) =>
  new Array(length - value.toString().length).fill(0).join("") + value

const books = [
  "Gen",
  "Exod",
  "Lev",
  "Num",
  "Deut",
  "Josh",
  "Judg",
  "Ruth",
  "1Sam",
  "2Sam",
  "1Kgs",
  "2Kgs",
  "1Chr",
  "2Chr",
  "Ezra",
  "Neh",
  "Esth",
  "Job",
  "Ps",
  "Prov",
  "Eccl",
  "Song",
  "Isa",
  "Jer",
  "Lam",
  "Ezek",
  "Dan",
  "Hos",
  "Joel",
  "Amos",
  "Obad",
  "Jonah",
  "Mic",
  "Nah",
  "Hab",
  "Zeph",
  "Hag",
  "Zech",
  "Mal",
  "Matt",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Rom",
  "1Cor",
  "2Cor",
  "Gal",
  "Eph",
  "Phil",
  "Col",
  "1Thess",
  "2Thess",
  "1Tim",
  "2Tim",
  "Titus",
  "Phlm",
  "Heb",
  "Jas",
  "1Pet",
  "2Pet",
  "1John",
  "2John",
  "3John",
  "Jude",
  "Rev",
]

const convert = textToConvert => {
  const bcvParser = require("bible-passage-reference-parser/js/en_bcv_parser")
    .bcv_parser
  const bcv = new bcvParser()

  // setup variables
  const verses = bcv.parse(textToConvert).parsed_entities()
  const parsedVerse = bcv.parse(textToConvert).osis()

  // const complied entities
  const compiledEntities = verses.reduce((arr, v) => {
    return arr.concat(v.entities)
  }, [])

  // // convert new verses
  const newVerses = !verses[0]
    ? null
    : compiledEntities.reduce((str, entity) => {
      // setup variables
      const newString =
          JSON.stringify(entity.start) === JSON.stringify(entity.end)
            ? `${lP(books.indexOf(entity.start.b) + 1, 2)}.${lP(
              entity.start.c,
              3
            )}.${lP(entity.start.v, 3)}`
            : `${lP(books.indexOf(entity.start.b) + 1, 2)}.${lP(
              entity.start.c,
              3
            )}.${lP(entity.start.v, 3)}-${lP(
              books.indexOf(entity.end.b) + 1,
              2
            )}.${lP(entity.end.c, 3)}.${lP(entity.end.v, 3)}`

      return str === "" ? newString : str + ";;" + newString
    }, "")

  return { converted: newVerses, verses: parsedVerse }
}

export { convert }
