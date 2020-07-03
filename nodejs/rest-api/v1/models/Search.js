var schema = new Schema({
  name: String,
  email: String,
  profile: {
    something: String,
    somethingElse: String,
  },
});
schema.index({ name: 'text', 'profile.something': 'text' });
// Or if you want to include all string fields in the index, use the '$**' wildcard:

schema.index({ '$**': 'text' });
//This would enable you to performed a paged text search query like:

MyModel.find({ $text: { $search: searchString } })
  .skip(20)
  .limit(10)
  .exec(function (err, docs) {
    console.log(docs);
  });
