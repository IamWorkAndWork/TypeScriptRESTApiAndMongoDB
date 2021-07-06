import * as mongoose from 'mongoose'

const uri: string = "mongodb://127.0.0.1:27017/local"

mongoose.connect(uri, (err: any) => {

    if (err) {
        console.log("error : " + err.message)
    }
    else {
        console.log("successfully connected!")
    }

})
