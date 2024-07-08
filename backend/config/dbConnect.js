const {
  default: mongoose,
} = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://hoa2051220041:bon13052002@glcl.vbj9g76.mongodb.net/?retryWrites=true&w=majority&appName=glcl"
    );
    console.log(
      "Database connect successfully"
    );
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
