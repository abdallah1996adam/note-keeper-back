
const noteController = {
    getAll : async (req, res)=>{
        try {
            res.status(200).json({message:"hello note"})
        } catch (error) {
            
        }
    }, 
    getOne: async (req, res)=>{

    },
    getById: async (req, res)=>{
        
    }
}

module.exports =  noteController