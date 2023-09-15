const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: { // answers ko add krwnana h  , kyunki questions ke sth ans bhi dikha skte h
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  user: Object,
});

module.exports = mongoose.model("Questions", QuestionSchema);