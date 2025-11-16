import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://benmossadmin:o79WajpOqk8ZTqU3@cluster0.didbvdc.mongodb.net/vites"
    )
    .then(() => console.log("DB Connected"));
};
