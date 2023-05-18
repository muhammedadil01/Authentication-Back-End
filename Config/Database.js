const mongoose =require("mongoose")

const connectDB =async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://adilshoukath690:adil123@cluster0.w10mora.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("DataBase Connected");
    }catch(error){
      console.log(`Error:${error}`);

      process.exit();
    }
}

module.exports = connectDB 