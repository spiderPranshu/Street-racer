class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getcount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();

        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount :4
        });
    }
    update(name){
        var playerIndex = "player"+ this.index ;
        database.ref(playerIndex).set({
            name:this.name,
            distance = this.distance
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef .on("value",(data)=>{
allplayers = data.val();
        })
        
    }
}