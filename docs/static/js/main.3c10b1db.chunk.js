(this["webpackJsonpfinal-exam"]=this["webpackJsonpfinal-exam"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.75509f2e.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a.n(c),i=(a(29),a(16)),u=a(17),s=a(22),h=a(18),m=a(8),o=a(23),d=a(6),E=function(e){var t=e.characters,a=t.image,r=t.name,c=t.status,l=t.origin,i=t.episode,u=t.species;return n.a.createElement("div",null,n.a.createElement(d.b,{to:"/"},"Volver"),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:a,alt:"character"})),n.a.createElement("td",null,n.a.createElement("p",null,r),n.a.createElement("p",null,"Status: ",c),n.a.createElement("p",null,"Species: ",u),n.a.createElement("p",null,"Origin: ",l.name),n.a.createElement("p",null,"Episodes: ",i.length))))))},p=function(e){var t=e.characters,a=t.id,r=t.image,c=t.name,l=t.species,i="/characters/".concat(a);return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(d.b,{to:i},n.a.createElement("img",{src:r,alt:"character"})),n.a.createElement("div",null,n.a.createElement("p",null,c),n.a.createElement("p",null,l))))};var f=function(e){return n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,e.characters.map((function(e){return n.a.createElement(p,{key:e.id,characters:e})}))))},v=a(21),b=a.n(v);var g=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("img",{src:b.a,alt:"Logo rick and morty"}))},C=function(e){return n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"inputCharacter"}," Introduce al personaje"),n.a.createElement("input",{id:"inputCharacter",type:"text",placeholder:"Rick",onChange:function(t){e.handleSearch({value:t.target.value})}}))},y=a(5),k=(a(35),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={search:"",characters:[]},e.handleSearch=e.handleSearch.bind(Object(m.a)(e)),e.renderCharacterDetail=e.renderCharacterDetail.bind(Object(m.a)(e)),e.filterCharacters=e.filterCharacters.bind(Object(m.a)(e)),e}return Object(o.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(t){return e.setState({characters:t})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"renderCharacterDetail",value:function(e){var t=parseInt(e.match.params.id),a=this.state.characters.find((function(e){return e.id===t}));return void 0===a?n.a.createElement("p",null,"The character doesn't exist"):n.a.createElement(E,{characters:a})}},{key:"filterCharacters",value:function(){var e=this;return this.state.characters.filter((function(t){return t.name===e.state.search.value}))}},{key:"render",value:function(){var e=this,t=this.state.characters.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement(y.c,null,n.a.createElement(y.a,{exact:!0,path:"/"},n.a.createElement(C,{handleSearch:this.handleSearch}),n.a.createElement(f,{characters:t})),n.a.createElement(y.a,{path:"/characters/:id",render:this.renderCharacterDetail})))}}]),t}(n.a.Component));l.a.render(n.a.createElement(d.a,null,n.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3c10b1db.chunk.js.map