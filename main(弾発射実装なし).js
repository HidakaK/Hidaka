enchant();//reset
window.onload=function(){
    var game=new Game(1920,1080);//ゲーム画面のフレームの大きさ
    game.fps=60;//fps config
    game.preload("finder.png","bg.jpg","findera.png","misaile.png");//picture preload
game.onload=function(){
    var enemy=new Sprite(156,172);//的のファインダー
    var fighter=new Sprite(312,298);//fighterの大きさ new finder 
    var misaile=new Sprite(122,122);//爆弾
    var background=new Sprite(1920,1080);//background
    fighter.image=game.assets["finder.png"];//imageにassets配列代入
    enemy.image=game.assets["findera.png"];
    misaile.image=game.assets["misaile.png"];
    background.image=game.assets["bg.jpg"];
    enemy.x=0;
    enemy.y=0;
    fighter.x=0;//座標指定
    fighter.y=650;//座標指定
    misaile.x=0;//初期化
    misaile.y=0;
    enemy.rotation=0;//角度初期化
    game.input.right//キーボード宣言
    game.input.left
    game.input.up
    game.input.down
    game.rootScene.addChild(background);
    game.rootScene.addChild(enemy);
    game.rootScene.addChild(fighter);//実際に表示
    game.rootScene.addChild(misaile);
    enemy.addEventListener(Event.ENTER_FRAME,function(){//ここから}
       enemy.rotation=enemy.rotation+0.7;//回転を実装したい
        if(enemy.x+enemy.width<game.width)  enemy.x=enemy.x+3;
        else
        if(enemy.x=1024) enemy.x=0;
    });//ここまで的オブジェクトの移動処理の塊
    fighter.addEventListener(Event.ENTER_FRAME,function(){//ここから
        if(game.input.right)
        fighter.x=fighter.x+6;
        if(game.input.left)
        fighter.x=fighter.x-6;
        if(game.input.up)
        fighter.y=fighter.y+6;
        if(game.input.down)
        fighter.y=fighter.y-6;
    
});//ここまで自機のキー操作の処理


//当たり判定かも

game.rootScene.addEventListener(Event.ENTER_FRAME,function()//一フレームごとに行う処理
{
    if(fighter.intersect(enemy))//fighterとenemyが当たった時の処理　この時は当たった時つまりtrueの時に行う処理
    {
        enemy.visible=false; //enemyオブジェクトをinvisibleにする
        enemy.visible=true;//再表示してx軸を0にリセット
        enemy.x=0;
        
    }
});
}
game.start();
}