migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("34a61ab4tqi3oep")

  collection.createRule = null

  return dao.saveCollection(collection)
})
