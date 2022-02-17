enchant();
window.onload = function()
{
    var game = new Game(1024, 768);
    game.fps = 60;
    // 画像の読み込み処理
    game.preload('bg.png','chara1.png','icon1.png');
    // spaceキーをaボタンとして割り当てる
    game.keybind(' '.charCodeAt(0), 'a');
    
    var kuma = null;
    
    // ゲームの処理
    game.onload = function()
    {
        // 背景用の画像を表示する
        var bgA = new Sprite(320,320);
        bgA.image = game.assets['bg1.png'];
        game.rootScene.addChild(bgA);
            
        kuma = new Sprite(32,32);
        kuma.image = game.assets['chara1.png'];
        kuma.frame = 6;
        kuma.x = 60;
        kuma.y = 230;
        game.rootScene.addChild(kuma);
        
        // 定期処理
        game.rootScene.addEventListener('enterframe', function()
        {
            // ←→　キー入力受付＋移動
            if(game.input.right)
            {
                kuma.x++;
            }
            if(game.input.left)
            {
                kuma.x--;
            }
            
            // スペースキー入力で弾発射
            if(game.input.a)
            {
                var ball = new Ball();
            }
            
            // １秒に１回ターゲット出現
            if(game.frame%game.fps ===0)
            {
                var mato = new Target();
            }
            
            // BallクラスとTargetクラスの衝突判定
            Ball.intersect(Target).forEach(function(pair)
            {
                //pair[0]: Ballのインスタンス
                //pair[1]: Targetのインスタンス
                game.rootScene.removeChild(pair[0]);
                game.rootScene.removeChild(pair[1]);
            });

        });
    };
    
    // ゲームの処理をスタート
    game.start();
    
    // ボールクラス
    var Ball = Class.create(Sprite, {initialize:function(){
        Sprite.call(this,16,16);
        
        this.image = game.assets['icon1.png'];
        this.x = kuma.x + Math.floor(kuma.width/3);
        this.y = kuma.y + Math.floor(kuma.height/3);
        game.rootScene.addChild(this);
        
        // 重力
        this.ang = -5;      // 飛び出す勢い（高さ方向）
        this.grav = -10;    // 重力（下にひっぱる力） 
        
        // 定期処理
        this.addEventListener('enterframe', function(){
            //横に常に移動します
            this.x += 2;
            this.y = this.y + this.ang + this.grav;
            this.grav += 1;
            
            // 一定のエリアを出たら消す
            if(this.x > 320 || this.y > 260 || this.x < 0 || this.y < 0)
            {
                game.rootScene.removeChild(this);
            }
        });
    }});
    
    // ターゲットクラス
    var Target = Class.create(Sprite, {initialize:function(){
        Sprite.call(this,32,32);
        
        this.image = game.assets['chara1.png'];
        this.scaleX = -1;
        this.frame = 4;
        game.rootScene.addChild(this);
        
        // 出現位置
        this.x = game.width;        
        this.y = Math.floor(Math.random()*100) + 100;
        
        // 移動処理
        this.addEventListener('enterframe', function(){
           this.x -= 2;
           if(this.x < 0) game.rootScene.removeChild(this);
        });
        
    }});
  
};


