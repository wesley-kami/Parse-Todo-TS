import Parse from "parse/node";

Parse.Cloud.define("getTodo", async (req)=> {
    const {id} = req.params;
    if(!id) throw new Parse.Error(422,"id field is required");
    
    try{
        const query = new Parse.Query("Todo");
        const todo = await query.get(id);

        if(!todo) throw new Parse.Error(404,"Todo not Found");

        return {
            success:true,
            msg:"Todo retrieved successfully",
            data: todo.toJSON()
        }


    }catch(error:any){
        return{
            success:false,
            msg:error.message
        }
    }
})