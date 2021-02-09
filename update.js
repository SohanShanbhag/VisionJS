class Update{
    constructor(){
        this.name = null;
    }

    getName(){
        var getNameRef = database.ref("name");
        getNameRef.on("value", (data) => {
            userName = data.val();
        });
    }

    updateName(newName){
        database.ref("/").update({
            userName: newName
        })
    }
}