import Parse from "parse/node";
Parse.Cloud.define("updateTodo", async (req) => {

    const {id, title, description, status, dueDate} = req.params;

    try{

        const query = new Parse.Query("Todo");

        const todo = await query.get(id);

        if(!todo) throw new Parse.Error(404,"To do not found");

        if(title !== undefined && title.trim()!=="") todo.set("title",title);
        if(description !== undefined && description.trim()!=="") todo.set("description",description);
        if(status !== undefined && status.trim()!=="") todo.set("status",status);
        if(dueDate !== undefined && dueDate.trim()!=="") todo.set("dueDate", new Date(dueDate));

        const updatedTodo = await todo.save();

        return {
            success:true,
            msg:"Todo successfully updated",
            data: (await updatedTodo).toJSON()
        }

    }catch(error:any){
        return {
            success:false,
            msg:error.message
        }
    }

});