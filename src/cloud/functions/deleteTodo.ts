import Parse from "parse/node";

Parse.Cloud.define("deleteTodo", async (req) =>{
    const {id}=req.params;

    try{

        const query = new Parse.Query("Todo");
        const todo = await query.get(id);

        const data = await todo.destroy();

        return {
            success:true,
            msg:"Todo deleted successfully",
            data
        }

    }catch(error:any){
        return{
            success:false,
            msg:error.message,
        }
    }
});