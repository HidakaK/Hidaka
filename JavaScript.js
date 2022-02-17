enchant();//reset
window.onload=function(){//windowsが読まれた時に行います
    var game=new Game(1920,1080);//ゲーム画面のフレームの大きさ
    game.fps=60;//fps config
    game.preload("finder.png","bg.jpg","findera.png","misaile.png");//picture preload

    

    game.onload=function(){
    
        

    var enemy=new Sprite(156,172);//的のファインダー
    var fighter=new Sprite(312,298);//fighterの大きさ new finder 
    var background=new Sprite(1920,1080);//background
    var misaile=new Array();//ここはミサイルのvarでmisaile宣言をししてarray 配列
    var misailemax=5;//発車するミサイルの上限を格納する変数

    
    fighter.image=game.assets["finder.png"];//imageにassets配列代入
    enemy.image=game.assets["findera.png"];
    background.image=game.assets["bg.jpg"];

    enemy.x=0;
    enemy.y=0;
    fighter.x=0;//座標指定
    fighter.y=game.height-fighter.height;//座標指定

    enemy.rotation=0;//角度初期化

    game.input.right//キーボード宣言
    game.input.left
    game.input.up
    game.input.down
    
    for(var i=0;i<misailemax;i++){
        misaile[i]=new Sprite(122,122);//爆弾のフレームの座標
        misaile[i].image=game.assets["misaile.png"];//misaile[i]に画像を代入
        misaile[i].y=-misaile[i].height;
        misaile[i].flag=false;
        game.rootScene.addChild(misaile[i]);
    }
    
    
    game.rootScene.addChild(background);
    game.rootScene.addChild(enemy);
    game.rootScene.addChild(fighter);//実際に表示
    game.keybind(90,"a");//z=a

    enemy.addEventListener(Event.ENTER_FRAME,function(){//ここから enemyの1フレームごとの処理
       enemy.rotation=enemy.rotation+0.7;//回転を実装したい

        if(enemy.x+enemy.width<game.width)  enemy.x=enemy.x+3;
        else
        if(enemy.x=1024) enemy.x=0;//はじまで行ったら最初の地点に折り返す

    });//ここまで的オブジェクトの移動処理の塊

    


//当たり判定かも

game.rootScene.addEventListener(Event.ENTER_FRAME,function()//一フレームごとに行う処理
{
    if(game.input.right)
    fighter.x=fighter.x+6;
    if(game.input.left)
    fighter.x=fighter.x-6;
    if(game.input.up)
    fighter.y=fighter.y+6;
    if(game.input.down)
    fighter.y=fighter.y-6;




    if(misaile.intersect(enemy))//fighterとenemyが当たった時の処理　この時は当たった時つまりtrueの時に行う処理
    {
        enemy.visible=false; //enemyオブジェクトをinvisibleにする
        enemy.visible=true;//再表示してx軸を0にリセット
        enemy.x=0;
        
    }

    for(var i=0; i<misailemax;i++)
    {
        if(misaile[i].flag==true)
        {
            misaile[i].y=misaile[i].y-24;
            if(misaile[i].y<-misaile[i].height)
            {
                misaile[i].flag=false;
            }
        }
    }
    if(game.input.a){
        //a この場合はaにキーバインドをした時
       for(var i=0;i<misailemax;i++){
           if(misaile[i].flag==true)
           {
               continue;
           }
           misaile[i].flag=true;
           misaile[i].x=fighter.x+14;
           misaile[i].y=fighter.y;
           break;
       }
       
        //ここまでかいた
    }
});
}
game.start();
}