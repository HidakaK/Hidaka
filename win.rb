require 'dxruby'
image=Image.load('OEMLOGO1.bmp')
Window.resize(800,600)#解像度変更 
y=250
x=420
font=Font.new(32)#fontの大きさ
sound=Sound.new("mssound.wav") #sound変数にsoundクラスnewメソッドを当てる
mikatasound=Sound.new("tada.wav")
kakusi=Sound.new("Windows Logon.wav")
#Imageの前の座標はオブジェクトを出力する座標
d=Image.load('OEMLOGO1.bmp')#whiteのx,yは図形の大きさ
sound.play#.playメソッド
s=Sprite.new(21,54,Image.new(50,50,C_WHITE))

Window.loop do#ゲーム中呼び出される処理
	#敵の処理
	s.x +=2
	s.draw
	s.alpha+=20
	s.angle+=4
	x=x+Input.x*2.4#xをキー入力*2.4倍
	y=y+Input.y*2.4

Window.draw(x,y,image)#実機出力
Window.draw_font(20,20,"スコア""x",font)#
Window.draw_font(20,41,"escで終了",font)
Window.draw_font(20,60,"returnキーで発射",font)
if Input.key_down?(K_RETURN)
Window.draw(x+20,y+20,d)
 end
 if Input.key_push?(K_RETURN)
 	mikatasound.play#実記が玉を発射したときの効果音
 end
 if Input.key_push?(K_SPACE) 
 	kakusi.play
 end

if Input.key_push?(K_ESCAPE) then# escで終了
		Window.close
	end	
end