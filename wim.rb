require'dxruby'
Window.resize(800,600)
Font.default=("ＭＳ Ｐゴシック")
font=Font.new(20)
m = Image.new(100, 100, C_WHITE)
s = Sprite.new(0, 100, Image.new(100, 100, C_WHITE))
Window.loop do
    m.x, m.y = Input.mouse_pos_x, 
    if Input.key_push?(K_SPACE)
        s.y +=10
        s.draw

    end
m.draw
if m=== s
    Window.draw_font(0,0,"hit",font)
end
    Window.draw_font(20,41,"escで終了",font)
    Window.draw_font(20,20,"スコア",font)
if Input.key_push?(K_ESCAPE) then# escで終了
    Window.close
end	
end