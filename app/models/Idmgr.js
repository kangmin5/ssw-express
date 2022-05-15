export default function IdmgrModel(mongoose) {
    const IdmgrSchema = mongoose.Schema({
        sitename:{type:String,maxlength:20},
        url:{type:String,trim:true,unique:1},
        siteid:{type:String,maxlength:10},
        sitepw:{type:String,maxlength:10},
        comment:{type:String,maxlength:50},
        register:{type:String,maxlength:10},
    }, { timestamps: true })
    
    return mongoose.model('Idmgr',IdmgrSchema)
}
