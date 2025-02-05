const mongoose = require("mongoose");
(async () => {
    try {
        const cnn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connected on", cnn.connection.host);

    } catch (error) {
        console.error("error on server connection: ", error);
        process.exit(1);
    };

})();

