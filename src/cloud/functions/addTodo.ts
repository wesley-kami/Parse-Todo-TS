import type { Todo } from "../../Interface/TodoInterface.js";
import Parse from "parse/node";

Parse.Cloud.define("addTodo", async (req: Parse.Cloud.FunctionRequest<Todo>)=>{
    const data: Todo = req.params;

    if(data.title == undefined || data.title.trim()=="") throw new Parse.Error(422,"title field is required");

    try{

        const Todo = Parse.Object.extend("Todo");
        const todo = new Todo();
        
        todo.set("title",data.title);

        todo.set("description",data.description ? (data.description.trim()!=="" ? data.description : null ) : null );
        todo.set("status",data.status ? (data.status.trim()!=="" ? data.status : "On-hold" ) : "On-hold" );
        todo.set("dueDate",data.dueDate ? (data.dueDate.trim()!=="" ? new Date(data.dueDate) : null ) : null );

        const addedTodo = await todo.save();
        console.log("-----------------------");
        console.log(addedTodo.toJSON());
        console.log("-----------------------");

        return {
            success:true,
            msg:"Todo added successfully",
            data: addedTodo.toJSON()
        }

    }catch(error:any){
        return {
            success:false,
            msg:error.message
        }
    }

})
