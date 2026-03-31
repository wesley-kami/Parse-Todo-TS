import Parse from "parse/node";

Parse.Cloud.define('getTodos', async ()=>{

    try{
        const query = new Parse.Query('Todo');
        const todos = await query.findAll();

        const todosJson = todos.map(todo => todo.toJSON());

        return {
            success:true,
            msg:"Data retrieved successfully",
            data: todosJson
        }
        
    }catch(error:any){
        return{
            success:false,
            msg:error.message
        }
    }

})