(this["webpackJsonpfinal-exam"]=this["webpackJsonpfinal-exam"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.75509f2e.png"},18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t){},25:function(e,t){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=(a(23),a(1)),l=a(2),o=a(4),u=a(3),h=a(7),m=a(5),p=a(14),f=a.n(p),b=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results}))},d=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return console.log(this.props.characters.image),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("img",{src:this.props.characters.image,alt:"character"})),this.props.characters.name,r.a.createElement("br",null),this.props.characters.species))}}]),t}(r.a.Component),j=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,this.props.characters.map((function(e){return r.a.createElement(d,{key:e.id,characters:e})}))))}}]),t}(r.a.Component)),E=(a(25),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={search:"",characters:[]},a.handleSearch=a.handleSearch.bind(Object(h.a)(a)),a.filterCharacters=a.filterCharacters.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){return e.setState({characters:t})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"filterCharacters",value:function(){return this.state.characters.filter(b.includes(b.name,this.state.search))}},{key:"render",value:function(){return console.log(this.state.characters),r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:"Logo rick and morty"}),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"inputCharacter"}," Introduce al personaje"),r.a.createElement("input",{id:"inputCharacter",type:"text",onChange:this.handleSearch})),r.a.createElement(j,{characters:this.state.characters}))}}]),t}(r.a.Component)),O=a(17);i.a.render(r.a.createElement(O.a,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3d43d161.chunk.js.map