window.Anticipate={p1:function(){return 1.70158},p2:function(){return 1.525*Anticipate.p1()},easeOut:function(a){return 1>(a*=2)?.5*a*a*((Anticipate.p2()+1)*a-Anticipate.p2()):.5*(2-Math.pow(2,-10*(a-1)))},easeIn:function(a){return 1>(a*=2)?.5*(Math.pow(2,10*(a-1))-.001):.5*((a-=2)*a*((Anticipate.p2()+1)*a+Anticipate.p2())+2)},easeInOut:function(a){return 1>(a*=2)?.5*a*a*((Anticipate.p2()+1)*a-Anticipate.p2()):.5*((a-=2)*a*((Anticipate.p2()+1)*a+Anticipate.p2())+2)}};