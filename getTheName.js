class Name{
    constructor(){

    }
    async start(){
        user = new Update();
        var getNameRef = await database.ref('name').once("value");
        if(getNameRef.exists()){
            userName = getNameRef.val();
            user.getName();
        }
    }

    // changeName(name){
    //     if("change name" === transcript1){
    //         user.updateName(name);
    //     }
    // }
}