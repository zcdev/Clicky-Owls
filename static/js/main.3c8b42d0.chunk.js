(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"images/owl1.jpg"},{id:2,image:"images/owl2.jpg"},{id:3,image:"images/owl3.jpg"},{id:4,image:"images/owl4.jpg"},{id:5,image:"images/owl5.jpg"},{id:6,image:"images/owl6.jpg"},{id:7,image:"images/owl7.jpg"},{id:8,image:"images/owl8.jpg"},{id:9,image:"images/owl9.jpg"},{id:10,image:"images/owl10.jpg"},{id:11,image:"images/owl11.jpg"},{id:12,image:"images/owl12.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),r=a.n(n),s=a(4),l=a(5),o=a(7),m=a(6),g=a(8);a(15);var u=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickOwl(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e.image,alt:"Owl"})))};a(17);var d=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};a(19);var p=function(e){return c.a.createElement("div",{className:"header"},e.children)},w=a(1),f=w,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={Owls:w,Score:0,TopScore:0,Clicked:[],Message:""},a.shuffleCards=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}return e},a.clickOwl=function(e){a.setState({Owls:a.shuffleCards(f)}),a.state.Clicked.includes(e)?a.setState({Score:0,Clicked:[],Message:"Your guess is wrong!"}):(a.setState({Score:a.state.Score+1,TopScore:a.state.TopScore+1,Clicked:a.state.Clicked.concat([e]),Message:"Your guess is correct!"}),a.state.Score<a.state.TopScore&&a.setState({TopScore:a.state.TopScore}))},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(d,null,c.a.createElement(p,null,c.a.createElement("h1",null,"Owls"),c.a.createElement("h4",null,"Don't pick me twice!"),c.a.createElement("div",{className:"scores"},c.a.createElement("p",{className:"text-left"},"Score: ",this.state.Score),c.a.createElement("p",{className:"text-right"},"Top Score: ",this.state.TopScore),c.a.createElement("p",null,this.state.Message))),this.state.Owls.map(function(t){return c.a.createElement(u,{clickOwl:e.clickOwl,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component);a(21);r.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.3c8b42d0.chunk.js.map