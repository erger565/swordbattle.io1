(()=>{"use strict";class t extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){document.getElementsByClassName("grecaptcha-badge")[0].style.opacity=100,this.load.image("opening","/assets/images/opening.png"),this.load.html("title","/title.html"),this.load.html("promo","/promo.html"),this.load.audio("openingsound","/assets/sound/opening.mp3")}create(){this.redirect=!1;var t=!0;try{window.localStorage}catch(i){t=!1}try{this.music=this.sound.add("openingsound",{mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!0,delay:0}),this.music.play()}catch(t){return}this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),this.background=this.add.image(0,0,"opening").setOrigin(0).setScrollFactor(0,0).setScale(2),this.background.displayHeight=this.canvas.height,this.background.displayWidth=this.canvas.width,this.nameBox=this.add.dom(this.canvas.width/2,this.canvas.height/1.7).createFromCache("title"),this.showPromo&&(this.promo=this.add.dom(0,0).createFromCache("promo"),this.promo.x=this.canvas.width/2,this.promo.y=this.canvas.height/2,this.promo.getChildByName("close").onclick=()=>{this.promo.destroy()}),this.input.keyboard.on("keydown",function(t){this.nameBox.getChildByName("name")&&(this.nameBox.getChildByName("name").value.length>=16||this.nameBox.getChildByName("name")!==document.activeElement)||("a"==t.key||"s"==t.key||"d"==t.key||"w"==t.key||32==t.which)&&(this.nameBox.getChildByName("name").value+=t.key)}.bind(this)),this.nameBox.getChildByName("name").value=t&&window.localStorage.getItem("oldName")?window.localStorage.getItem("oldName"):"",this.done=!1,this.text=this.add.text(this.canvas.width/2,0,"Swordbattle.io",{fontSize:"64px",fill:"#000000"}).setOrigin(.5);const i=()=>{let i=this.nameBox.getChildByName("name");i&&""!=i.value&&(this.done||(this.done=!0,t&&window.localStorage.setItem("oldName",i.value),this.callback(i.value,this.music),this.nameBox.destroy()))};this.nameBox.getChildByName("btn").onclick=()=>{this.promo&&this.promo.visible||i()},this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.promo&&this.promo.visible?this.promo.destroy():i()}));const e=()=>{this.game.scale.resize(this.canvas.width,this.canvas.height),this.background.displayHeight=this.canvas.height,this.background.displayWidth=this.canvas.width,this.nameBox.x=this.canvas.width/2,this.nameBox.y=this.canvas.height/2,this.text.x=this.canvas.width/2,0!=this.text.y&&(this.text.y=this.canvas.height/3)};window.addEventListener("resize",e,!1),e()}update(t){try{this.text.setFontSize(this.canvas.width/10),this.text.y<this.canvas.height/3&&(this.text.y=(i=this.text.y,e=this.canvas.height/3,(1-.1)*i+.1*e))}catch(t){if(this.redirect)return;this.redirect=!0,alert("Your administrator has blocked swordbattle.io\nDon't worry, You are being redirected to a proxy server to attempt to bypass this."),window.location.replace("https://sword-io-game.herokuapp.com/")}var i,e}}const i=t,e=class{constructor(t,i,e,s,a,h=!1){this.custom=h,this.bar=new Phaser.GameObjects.Graphics(t).setDepth(99),this.x=i,this.y=e,this.maxValue=100,this.value=0,this.toLerp=0,this.height=a,this.width=s,t.add.existing(this.bar)}setHealth(t){var i,e;return this.value=(i=t,0,e=this.maxValue,Math.min(Math.max(i,0),e)),this.draw(),0===this.value}setLerpValue(t){this.toLerp=t}draw(){this.bar.clear(),this.bar.fillStyle(0),this.bar.fillRect(this.x,this.y,this.width,this.height),this.bar.fillStyle(16777215),this.bar.fillRect(this.x+2,this.y+2,this.width-4,this.height-4),this.custom?this.bar.fillStyle(65535):this.value/this.maxValue<.3?this.bar.fillStyle(16711680):this.value/this.maxValue<.5?this.bar.fillStyle(16776960):this.bar.fillStyle(65280);var t=Math.floor((this.width-4)*(this.value/this.maxValue));this.bar.fillRect(this.x+2,this.y+2,t,this.height-4)}update(){this.setHealth((1-.25)*this.value+.25*this.toLerp)}destroy(){this.bar.destroy()}};class s extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){try{document.getElementsByClassName("grecaptcha-badge")[0].style.opacity=0}catch(t){console.log(t)}this.ready=!1,this.loadrect=this.add.rectangle(0,0,2*this.canvas.width,2*this.canvas.height,25600).setDepth(200)}died(t){this.loseSound.play(),this.children.list.forEach((t=>{t.destroy()})),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.myObj.coins}),this.callback({win:!1,data:t})}win(t){this.winSound.play(),this.dead=!0,t=Object.assign(t,{name:this.myObj.name,kills:this.myObj.kills,coins:this.levels[this.levels.length-1].coins}),this.callback({win:!0,data:t})}create(){this.levels=[],grecaptcha.ready((()=>{grecaptcha.execute("6LdVxgYdAAAAAPtvjrXLAzSd2ANyzIkiSqk_yFpt",{action:"join"}).then((t=>{this.readyt=!0,this.openingBgm.stop();var i={mute:!1,volume:1,rate:1,detune:0,seek:0,loop:!1,delay:0};this.coin=this.sound.add("coin",i),this.damage=this.sound.add("damage",i),this.hit=this.sound.add("hit",i),this.winSound=this.sound.add("winSound",i),this.loseSound=this.sound.add("loseSound",i),this.tps=0,this.background=this.add.tileSprite(0,0,this.canvas.width,this.canvas.height,"background").setOrigin(0).setDepth(2),this.background.fixedToCamera=!0,this.meSword=this.add.image(400,100,"sword").setScale(.25).setDepth(50),this.mePlayer=this.add.image(400,100,"player").setScale(.25).setDepth(51),this.swordAnim={go:!1,added:0},this.goTo={x:void 0,y:void 0},this.myObj=void 0,this.killCount=this.add.text(this.canvas.width/1.5,0,"Kills: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(40).setDepth(101),this.killCount.scrollFactorX=0,this.killCount.scrollFactorY=0;try{this.playerCount=this.add.text(this.cameras.main.worldView.x*this.cameras.main.zoom,this.cameras.main.worldView.y*this.cameras.main.zoom,"Players: 0\nFPS: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(20).setDepth(101),this.playerCount.scrollFactorX=0,this.playerCount.scrollFactorY=0,this.leaderboard=this.add.text(this.canvas.width,this.cameras.main.worldView.y*this.cameras.main.zoom,"Players: 0\nFPS: 0",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(20).setDepth(101),this.playerCount.scrollFactorX=0,this.playerCount.scrollFactorY=0}catch(t){console.log(t)}const s=(t,i,e)=>e*i/t;this.miniMap={people:[],scaleFactor:s(1189,96,this.canvas.width),square:void 0},this.miniGraphics=this.add.graphics().setDepth(100);var a=13;this.miniMap.scaleFactor=s(1189,96,this.canvas.width),this.miniGraphics.x=this.canvas.width-(2*this.miniMap.scaleFactor+a),this.miniGraphics.y=this.canvas.height-(2*this.miniMap.scaleFactor+a),this.miniGraphics.lineStyle(5,16776960,1),this.miniGraphics.strokeRoundedRect(0,0,2*this.miniMap.scaleFactor,2*this.miniMap.scaleFactor,0),this.cameras.main.ignore(this.miniGraphics),this.mobile&&(this.joyStick=this.plugins.get("rexvirtualjoystickplugin").add(this,{x:this.canvas.width/8,y:this.canvas.height-this.canvas.height/2.5,radius:s(2360,200,this.canvas.width),base:this.add.circle(0,0,s(2360,250,this.canvas.width),8947848),thumb:this.add.circle(0,0,s(2360,100,this.canvas.width),13421772)})),this.meBar=new e(this,0,0,16,80),this.lvlBar=new e(this,0,0,0,0,!0),a=this.canvas.width/2,this.lvlBar.x=a/2,this.lvlBar.width=this.canvas.width-a,this.lvlBar.height=this.canvas.height/30,this.lvlBar.y=this.canvas.height-this.lvlBar.height-this.canvas.height/40,this.lvlBar.draw(),this.coins=[],this.enemies=[],this.dead=!1,this.cursors=this.input.keyboard.createCursorKeys(),this.lvlText=this.add.text(this.canvas.width/2,this.canvas.height/4,"nice",{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif'}).setFontSize(75).setDepth(75).setAlpha(0).setOrigin(.5),this.lvlTextTween=void 0,this.cameras.main.setZoom(1),this.UICam=this.cameras.add(this.cameras.main.x,this.cameras.main.y,this.canvas.width,this.canvas.height),this.cameras.main.ignore([this.killCount,this.playerCount,this.leaderboard,this.lvlBar.bar,this.lvlText]),this.UICam.ignore([this.mePlayer,this.meBar.bar,this.meSword,this.background]),this.cameras.main.startFollow(this.mePlayer),this.input.addPointer(3),window.addEventListener("resize",(()=>{try{this.game.scale.resize(this.canvas.width,this.canvas.height),this.mobile&&(this.joyStick.x=this.canvas.width/8,this.joyStick.y=this.canvas.height-this.canvas.height/2.5,this.joyStick.base.radius=s(2360,250,this.canvas.width),this.joyStick.thumb.radius=s(2360,100,this.canvas.width)),this.UICam.x=this.cameras.main.x,this.UICam.y=this.cameras.main.y,this.miniGraphics.clear();var t=13;this.miniMap.scaleFactor=s(1189,96,this.canvas.width),this.miniGraphics.x=this.canvas.width-(2*this.miniMap.scaleFactor+t),this.miniGraphics.y=this.canvas.height-(2*this.miniMap.scaleFactor+t),this.miniGraphics.lineStyle(5,16776960,1),this.miniGraphics.strokeRoundedRect(0,0,2*this.miniMap.scaleFactor,2*this.miniMap.scaleFactor,0),this.background.width=this.canvas.width,this.background.height=this.canvas.height,t=this.canvas.width/2,this.lvlBar.x=t/2,this.lvlBar.width=this.canvas.width-t,this.lvlBar.height=this.canvas.height/30,this.lvlBar.y=this.canvas.height-this.lvlBar.height-this.canvas.height/40,this.lvlBar.draw()}catch(t){console.log(t)}}),!0),this.socket=io(),this.socket.emit("go",this.name,t),this.input.on("pointerdown",(function(t){this.mobile&&this.joyStick.pointer&&this.joyStick.pointer.id==t.id||this.mouseDown||(this.gamePoint={x:t.x,y:t.y},this.mouseDown=!0,this.socket.emit("mouseDown",!0))}),this),this.input.on("pointerup",(function(t){this.mobile&&this.joyStick.pointer&&this.joyStick.pointer.id==t.id||this.mouseDown&&(this.gamePoint={x:t.x,y:t.y},this.mouseDown=!1,this.socket.emit("mouseDown",!1))}),this),this.mobile&&(this.gamePoint={x:0,y:0},this.input.on("pointermove",(t=>{this.joyStick.pointer&&this.joyStick.pointer.id==t.id||(this.gamePoint={x:t.x,y:t.y})}))),this.socket.on("tps",(t=>{this.tps=t})),this.socket.on("ban",(t=>{document.write(t)})),this.graphics=this.add.graphics().setDepth(4);this.graphics.lineStyle(5e3,25600,1),this.graphics.strokeRoundedRect(-5e3,-5e3,1e4,1e4,0),this.graphics.lineStyle(10,16776960,1),this.graphics.strokeRoundedRect(-2500,-2500,5e3,5e3,0),this.socket.on("levels",(t=>this.levels=t));const h=t=>{if(!(this.enemies.filter((i=>i.id===t.id)).length>0)){var i={id:t.id,down:!1,toMove:{x:void 0,y:void 0},playerObj:void 0,lastTick:Date.now(),sword:this.add.image(t.pos.x,t.pos.y,t.skin+"Sword").setScale(.25).setDepth(49),player:this.add.image(t.pos.x,t.pos.y,t.skin+"Player").setScale(.25).setDepth(49),bar:new e(this,t.pos.x,t.pos.y+55),nameTag:this.add.text(t.pos.x,t.pos.y-90,t.name,{fontFamily:"serif",fill:"#000000",fontSize:"25px"}).setDepth(100),swordAnim:{go:!1,added:0},toAngle:0},s=100/(100*t.scale)*1.5;i.sword.angle=180*Math.atan2(t.mousePos.y-t.mousePos.viewport.height/2,t.mousePos.x-t.mousePos.viewport.width/2)/Math.PI+45,i.sword.x=i.player.x+i.player.width/s*Math.cos(i.sword.angle*Math.PI/180),i.sword.y=i.player.y+i.player.width/s*Math.sin(i.sword.angle*Math.PI/180),this.UICam.ignore([i.player,i.bar.bar,i.sword,i.nameTag,this.graphics]),this.enemies.push(i);var a=this.add.circle(0,0,10,16711680);this.cameras.main.ignore(a),a.setDepth(98),this.miniMap.people.push({id:t.id,circle:a})}};this.removePlayer=t=>{try{var i=this.enemies.find((i=>i.id==t));i.player.destroy(),i.sword.destroy(),i.bar.destroy(),i.nameTag.destroy(),this.enemies.splice(this.enemies.findIndex((i=>i.id==t)),1),this.miniMap.people.find((i=>i.id===t)).circle.destroy(),this.miniMap.people=this.miniMap.people.filter((i=>i.id!=t))}catch(t){console.log(t)}},this.socket.on("players",(t=>{t.forEach((t=>h(t))),this.ready=!0,this.ready||(this.ready=!0)})),this.socket.on("new",(t=>{h(t),this.ready||(this.ready=!0)})),this.socket.on("me",(t=>{if(this.loadrect.visible&&this.loadrect.destroy(),this.levels.length>0){var i=this.levels[t.level-1].coins-this.levels[t.level-1].start,e=t.coins-this.levels[t.level-1].start;this.lvlBar.setLerpValue(e/i*100),this.myObj&&t.level>this.myObj.level&&(this.lvlTextTween&&this.lvlTextTween.stop(),this.lvlText.data||this.lvlText.setData("x",0),this.lvlText.setData("x",this.lvlText.getData("x")+(t.level-this.myObj.level)),this.lvlText.setText("Level up!"+(this.lvlText.getData("x")>1?` x${this.lvlText.getData("x")}`:"")),this.lvlTextTween=this.tweens.add({targets:this.lvlText,alpha:1,y:this.canvas.height/3,completeDelay:1e3,duration:500,onComplete:()=>{this.lvlTextTween=this.tweens.add({targets:this.lvlText,alpha:0,y:this.canvas.height/4,onComplete:()=>this.lvlText.setData("x",0),duration:300,ease:"Power2"},this)},ease:"Power2"},this))}if(this.mePlayer.texture.key+"Player"!=t.skin&&(this.mePlayer.setTexture(t.skin+"Player"),this.meSword.setTexture(t.skin+"Sword")),this.myObj?(this.goTo.x=t.pos.x,this.goTo.y=t.pos.y):(this.mePlayer.x=t.pos.x,this.mePlayer.y=t.pos.y),this.mePlayer.setScale(t.scale),this.meBar.maxValue=t.maxHealth,this.meBar.setHealth(t.health),this.cameras.main.zoom<=.15||(t.scale<.75&&this.cameras.main.setZoom(1.25-t.scale),t.scale>=3||t.scale>=1?this.cameras.main.setZoom(.56-(t.scale-1)/8):t.scale>=.75&&this.cameras.main.setZoom(.56-(t.scale-.75)/3)),this.meSword.setScale(t.scale),this.background.setTileScale(this.cameras.main.zoom,this.cameras.main.zoom),this.background.displayWidth=this.cameras.main.displayWidth,this.background.displayHeight=this.cameras.main.displayHeight,this.killCount.setText("Kills: "+t.kills+"\nCoins: "+t.coins),this.myObj=t,!this.miniMap.people.find((i=>i.id===t.id))){var a=this.add.circle(0,0,10,16777215);this.cameras.main.ignore(a),a.setDepth(99),this.miniMap.people.push({id:t.id,circle:a})}var h=this.miniMap.people.find((i=>i.id===t.id));h.circle.x=this.miniGraphics.x+t.pos.x/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,h.circle.y=this.miniGraphics.y+t.pos.y/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,h.circle.radius=t.scale*s(1280,20,this.canvas.width)})),this.socket.on("player",(t=>{if(this.ready)try{var i=this.enemies.find((i=>i.id==t.id));if(!i)return;i.lastTick=Date.now(),i.playerObj=t,i.bar.maxValue=t.maxHealth,i.bar.setHealth(t.health),i.toMove.x=t.pos.x,i.toMove.y=t.pos.y;var e=t.mousePos;i.toAngle=180*Math.atan2(e.y-e.viewport.height/2,e.x-e.viewport.width/2)/Math.PI+45,i.player.setScale(t.scale),i.sword.setScale(t.scale),i.down=t.mouseDown;var a=this.miniMap.people.find((i=>i.id===t.id));a.circle.x=this.miniGraphics.x+t.pos.x/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,a.circle.y=this.miniGraphics.y+t.pos.y/2500*this.miniMap.scaleFactor+this.miniMap.scaleFactor,a.circle.radius=s(1280,20,this.canvas.width)*t.scale}catch(t){console.log(t)}})),this.socket.on("playerLeave",this.removePlayer),this.socket.on("playerDied",((t,i)=>{if(this.myObj&&this.myObj.id===i.killedBy.id){var e=this.enemies.find((i=>i.id==t));if(e&&e.playerObj){var s=`[color=#e82a1f]Killed [/color][color=#ffffff]${e.playerObj.name}[/color]`,a=this.add.rexBBCodeText(100,30,s,{fontSize:"60px"});this.cameras.main.ignore(a)}}this.removePlayer(t)})),this.socket.on("dealHit",(t=>{this.hit.play()})),this.socket.on("takeHit",(t=>{this.damage.play()}));const n=t=>{this.dead||(this.coins.push({id:t.id,item:this.add.image(t.pos.x,t.pos.y,"coin").setScale(t.size/100).setDepth(20),state:{collected:!1,collectedBy:void 0,time:0}}),this.UICam.ignore(this.coins[this.coins.length-1].item))};this.socket.on("coins",(t=>{t.forEach((t=>{0==this.coins.filter((i=>i.id==t.id)).length&&n(t)})),this.coins.filter((i=>0==t.filter((t=>i.id==t.id&&!i.state.collected)).length)).forEach((t=>{t.item.destroy()})),this.coins=this.coins.filter((i=>1==t.filter((t=>i.id==t.id&&!i.state.collected)).length))})),this.socket.on("coin",(t=>{Array.isArray(t)?t.forEach((t=>{n(t)})):n(t)})),this.socket.on("youDied",(t=>{this.died(t)})),this.socket.on("youWon",(t=>{this.win(t)})),this.socket.on("collected",((t,i)=>{this.myObj&&this.myObj.id==i&&this.coin.play(),this.coins.find((i=>i.id==t))&&(this.coins.find((i=>i.id==t)).state={collected:!0,collectedBy:i,time:0})}))}))}))}update(){if(this.readyt){this.lvlBar.update();var t={left:!1,up:!1,right:!1,down:!1},i=this.input.keyboard.addKey("W"),e=this.input.keyboard.addKey("A"),s=this.input.keyboard.addKey("S"),a=this.input.keyboard.addKey("D");try{this.key=this.mobile?this.joyStick.createCursorKeys():this.cursors,(this.key.up.isDown||i.isDown)&&(t.up=!0),(this.key.down.isDown||s.isDown)&&(t.down=!0),(this.key.right.isDown||a.isDown)&&(t.right=!0),(this.key.left.isDown||e.isDown)&&(t.left=!0),this.socket.emit("move",t)}catch(t){console.log(t)}if(this.meSword)var h=this.meSword.angle;if(this.mobile)n=this.gamePoint;else var n=this.input;this.meSword.angle=180*Math.atan2(n.y-this.canvas.height/2,n.x-this.canvas.width/2)/Math.PI+45,this.mePlayer.angle=this.meSword.angle+45+180,this.mouseDown?this.swordAnim.go=!0:this.swordAnim.go=!1,this.swordAnim.go?(this.swordAnim.added<50&&(this.swordAnim.added+=10),this.meSword.angle-=this.swordAnim.added):this.swordAnim.added>0&&(this.swordAnim.added-=10,this.meSword.angle-=this.swordAnim.added);var o={viewport:{width:this.canvas.width,height:this.canvas.height},x:n.x,y:n.y};this.socket&&h&&this.meSword.angle!=h&&this.socket.emit("mousePos",o);var l=this.sys.game.loop.actualFps;this.enemies.forEach((t=>{if(Date.now()-t.lastTick>1e4)return this.removePlayer(t);if(t.toMove.x&&(t.player.x=p(t.player.x,t.toMove.x,l/500),t.player.y=p(t.player.y,t.toMove.y,l/500)),t.playerObj)var i=t.playerObj.scale;else i=.25;t.bar.width=t.player.height*i/.9375,t.bar.height=t.player.height*i*.15,t.bar.x=t.player.x-t.bar.width/2,t.bar.y=t.player.y-t.player.height*i/1.2,t.bar.draw();try{t.nameTag.setFontSize(100*i),t.nameTag.x=t.player.x-t.nameTag.width/2,t.nameTag.y=t.player.y-t.player.height*i-t.nameTag.height}catch(t){console.log(t)}if(t.playerObj)var e=100/(100*t.playerObj.scale)*1.5;else e=6;t.sword.angle=function(t,i,e){const s=function(t,i){return e=t-Math.floor(t/i)*i,s=i,Math.min(Math.max(e,0),s);var e,s}(i-t,360);return p(t,t+(s>180?s-360:s),.5)}(t.sword.angle,t.toAngle),t.player.angle=t.sword.angle+45+180,t.down?(t.swordAnim.go=!0,t.swordAnim.added||(t.swordAnim.added=0)):t.swordAnim.go=!1,t.swordAnim.go&&t.swordAnim.added<50&&(t.swordAnim.added+=10),!t.swordAnim.go&&t.swordAnim.added>0&&(t.swordAnim.added-=10),t.sword.angle-=t.swordAnim.added,t.sword.x=t.player.x+t.player.width/e*Math.cos(t.sword.angle*Math.PI/180),t.sword.y=t.player.y+t.player.width/e*Math.sin(t.sword.angle*Math.PI/180)})),this.goTo.x&&(this.mePlayer.x=p(this.mePlayer.x,this.goTo.x,l/500),this.mePlayer.y=p(this.mePlayer.y,this.goTo.y,l/500));var d=this.myObj;if(d||(d={scale:.25}),this.meBar.width=this.mePlayer.height*d.scale/.9375,this.meBar.height=this.mePlayer.height*d.scale*.2,this.meBar.x=this.mePlayer.x-this.meBar.width/2,this.meBar.y=this.mePlayer.y-this.mePlayer.height*d.scale/1.2,this.meBar.draw(),this.myObj)var r=100/(100*this.myObj.scale)*1.5;else r=6;if(this.meSword.x=this.mePlayer.x+this.mePlayer.width/r*Math.cos(this.meSword.angle*Math.PI/180),this.meSword.y=this.mePlayer.y+this.mePlayer.width/r*Math.sin(this.meSword.angle*Math.PI/180),this.myObj){var c=this.enemies.filter((t=>t.hasOwnProperty("playerObj")&&t.playerObj));c.push({playerObj:this.myObj});try{var m=c.sort(((t,i)=>t.playerObj.coins-i.playerObj.coins)).reverse().slice(0,this.mobile?5:10),y="";m.forEach(((t,i)=>{if(t.playerObj){if(!t.playerObj.hasOwnProperty("coins"))return console.log(t.playerObj);var e=t.playerObj;y+=`#${i+1}: ${e.name}- ${e.coins}\n`}})),this.leaderboard.setText(y),this.leaderboard.x=this.canvas.width-this.leaderboard.width,this.killCount.x=.9*this.canvas.width-this.leaderboard.width-this.killCount.width}catch(t){console.log(t)}try{this.playerCount.setText("Players: "+(Object.keys(this.enemies).length+1).toString()+"\nFPS: "+Math.round(this.sys.game.loop.actualFps)),this.playerCount.x=0,this.playerCount.y=0}catch(t){console.log(t)}this.myObj&&(this.coins.forEach((t=>{if(t.state.collected){if(t.state.collectedBy==this.myObj.id)var i=this.mePlayer.x,e=this.mePlayer.y;else try{var s=this.enemies.find((i=>i.id==t.state.collectedBy));if(!s)return t.item.destroy(),void(this.coins=this.coins.filter((i=>i.id!=t.id)));i=s.player.x,e=s.player.y}catch(t){return void console.log(t)}t.item.x=p(t.item.x,i,(6-(Math.log2(l)-Math.log2(1.875)))/10*2),t.item.y=p(t.item.y,e,(6-(Math.log2(l)-Math.log2(1.875)))/10),t.state.time+=1,a=t.item.x,h=t.item.y,n=i,o=e,(Math.hypot(n-a,o-h)<this.mePlayer.width*this.mePlayer.scale/3||t.state.time>7)&&(t.item.destroy(),this.coins=this.coins.filter((i=>i.id!=t.id)))}var a,h,n,o})),this.background.setTilePosition(this.cameras.main.scrollX,this.cameras.main.scrollY),this.background.x=this.mePlayer.x-this.cameras.main.displayWidth/2,this.background.y=this.mePlayer.y-this.cameras.main.displayHeight/2,!this.ready||this.dead||this.socket.connected||(document.write('<h1>You got disconnected</h1><br><button onclick="location.reload()"><h1>Refresh</h1></button>'),this.dead=!0))}}function p(t,i,e){return(1-e)*t+e*i}}}const a=s;class h extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.lerp=function(t,i,e){return(1-e)*t+e*i},this.background=this.add.rectangle(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(document.documentElement.clientWidth/2,0,"You died",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/2,"Killed by: "+this.data.killedBy+`\nSurvived Time: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,i,e,s)=>{this.scene.start("title")})),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){this.text.setFontSize(document.documentElement.clientWidth/10),this.stats.setFontSize(document.documentElement.clientWidth/20),this.btntext.setFontSize(document.documentElement.clientWidth/25),this.text.y<document.documentElement.clientHeight/5.5&&(this.text.y=this.lerp(this.text.y,document.documentElement.clientHeight/5.5,.2)),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime=Math.round(this.lerp(this.displayTime,this.data.timeSurvived,.1))),this.displayCoins<this.data.coins&&(this.displayCoins=Math.round(this.lerp(this.displayCoins,this.data.coins,.1)),this.data.coins-4==this.displayCoins&&(this.displayCoins=this.data.coins)),this.stats.setText(`Killed by: ${this.data.killedBy}\nSurvived Time: ${function(t){parseInt(t%1e3/100);var i=Math.floor(t/1e3%60),e=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==e?"":e+"m ")+i+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(document.documentElement.clientWidth,document.documentElement.clientHeight),this.background.width=document.documentElement.clientWidth,this.background.height=document.documentElement.clientHeight,this.text.x=document.documentElement.clientWidth/2,this.text.y=document.documentElement.clientHeight/5.5,this.stats.x=document.documentElement.clientWidth/2,this.stats.y=document.documentElement.clientHeight/2,this.btntext.x=document.documentElement.clientWidth/2,this.btntext.y=document.documentElement.clientHeight/1.2}),!1)}}const n=h;class o extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){}create(){this.background=this.add.rectangle(0,0,this.canvas.height,this.canvas.width,9498256).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(this.canvas.width/2,0,"You won!",{fontSize:"64px",fill:"#000000"}).setOrigin(.5),this.displayTime=0,this.displayKills=0,this.timeUpdateDelay=5e3/this.data.timeSurvived,this.lastUpdateTime=Date.now(),this.displayKills=1==this.data.kills?1:0,this.displayCoins=0,this.stats=this.add.text(this.canvas.width/2,this.canvas.height/2,`You conquered the map and became Ka-HUGE!\nTime Taken: 0s\nKills: ${this.displayKills}`,{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.lerpVal=0,this.btnrect=this.add.rectangle(0,0,0,0,6711039),this.btntext=this.add.text(this.canvas.width/2,this.canvas.height/1.2,"Play Again",{fontSize:"48px",fill:"#000000"}).setOrigin(.5),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,this.btnrect.setInteractive().on("pointerdown",((t,i,e,s)=>{this.scene.start("title")})),console.log(this.data.coins),this.returnKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.returnKey.on("down",(t=>{this.scene.start("title")}))}update(){var t,i;this.text.setFontSize(this.canvas.width/10),this.stats.setFontSize(this.canvas.width/30),this.btntext.setFontSize(this.canvas.width/25),this.text.y<this.canvas.height/4&&(this.text.y+=10),this.displayKills<this.data.kills&&(this.displayKills+=1,this.lastUpdateKills=Date.now()),this.displayTime<this.data.timeSurvived&&(this.displayTime+=1e3),this.displayCoins=Math.round((0,t=this.data.coins,0*(1-(i=this.lerpVal))+t*i)),this.lerpVal<1&&(this.lerpVal+=.02),this.stats.setText(`A mighty warrior indeed..!\nTime Taken: ${function(t){parseInt(t%1e3/100);var i=Math.floor(t/1e3%60),e=Math.floor(t/6e4%60),s=Math.floor(t/36e5%24);return("00"==s?"":s+"h ")+("00"==e?"":e+"m ")+i+"s"}(this.displayTime)}\nCoins: ${this.displayCoins}\nKills: ${this.displayKills}`),this.btnrect.x=this.btntext.x-this.btntext.width/2-5,this.btnrect.y=this.btntext.y-this.btntext.height/2-5,this.btnrect.width=this.btntext.width+10,this.btnrect.height=this.btntext.height+10,window.addEventListener("resize",(()=>{this.game.scale.resize(this.canvas.width,this.canvas.height),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.text.x=this.canvas.width/2,this.text.y=this.canvas.height/4,this.stats.x=this.canvas.width/2,this.stats.y=this.canvas.height/2,this.btntext.x=this.canvas.width/2,this.btntext.y=this.canvas.height/1.2}),!1)}}const l=o;class d extends Phaser.Scene{constructor(t){super(),this.callback=t}preload(){this.load.plugin("rexvirtualjoystickplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",!0),this.load.plugin("rexbbcodetextplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js",!0),this.load.image("playerPlayer","/assets/images/player.png"),this.load.image("playerSword","/assets/images/sword.png"),this.load.image("codergautamytPlayer","/assets/images/codergautamytPlayer.png"),this.load.image("codergautamytSword","/assets/images/codergautamytSword.png"),this.load.image("devilPlayer","/assets/images/devilPlayer.png"),this.load.image("devilSword","/assets/images/devilSword.png"),this.load.image("background","/assets/images/background.jpeg"),this.load.image("coin","/assets/images/coin.png"),this.load.audio("coin","/assets/sound/coin.m4a"),this.load.audio("damage","/assets/sound/damage.mp3"),this.load.audio("hit","/assets/sound/hitenemy.wav"),this.load.audio("winSound","/assets/sound/win.m4a"),this.load.audio("loseSound","/assets/sound/lost.mp3")}create(){this.go=!1,this.background=this.add.rectangle(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight,0).setOrigin(0).setScrollFactor(0,0).setScale(2),this.text=this.add.text(document.documentElement.clientWidth/2,document.documentElement.clientHeight/2,"Click to join the game..",{fontSize:"64px",fill:"#FFFFFF"}).setOrigin(.5),this.text.setAlpha(0),window.addEventListener("resize",(()=>{try{this.game.scale.resize(document.documentElement.clientWidth,document.documentElement.clientHeight),this.background.height=document.documentElement.clientHeight,this.background.width=document.documentElement.clientWidth}catch(t){console.log(t)}}),!0),this.input.on("pointerdown",(t=>{this.go=!0}))}update(){this.text.x=document.documentElement.clientWidth/2,this.text.y=document.documentElement.clientHeight/2,this.text.setFontSize(128*document.documentElement.clientWidth/1920),this.go?this.text.alpha>0?this.text.setAlpha(this.text.alpha-.05):this.scene.start("title"):this.text.alpha<1&&this.text.setAlpha(this.text.alpha+.01)}}const r=d;var c,m={type:Phaser.CANVAS,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,parent:"game",dom:{createContainer:!0},scale:{mode:Phaser.Scale.RESIZE}},y=!1;c=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0,4)))&&(y=!0);var p=new Phaser.Game(m),g=new n,u=new l,w=new r,v=new a((t=>{t.win?(u.data=t.data,v.scene.start("win")):(g.data=t.data,v.scene.start("death"))})),b=new i(((t,i)=>{v.name=t,v.openingBgm=i,b.scene.start("game"),b.showPromo=!1}));function x(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}b.mobile=y,v.mobile=y,y||(b.showPromo=!0),Object.defineProperty(b,"canvas",{get:x}),Object.defineProperty(g,"canvas",{get:x}),Object.defineProperty(u,"canvas",{get:x}),Object.defineProperty(v,"canvas",{get:x}),Object.defineProperty(w,"canvas",{get:x}),p.scene.add("title",b),p.scene.add("game",v),p.scene.add("death",g),p.scene.add("win",u),p.scene.add("open",w),p.scene.start("open"),window.onerror=function(t,i,e){document.write("Error : "+t+"<br><br>"),document.write("Line number : "+e+"<br><br>"),document.write("File : "+i)}})();
//# sourceMappingURL=main.js.map