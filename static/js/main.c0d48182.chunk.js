(this["webpackJsonpreact-movie-finder"]=this["webpackJsonpreact-movie-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(25),a(5)),i=a(6),s=a(8),u=a(7),m=(a(26),a(27),a(10)),h=function(){return r.a.createElement(m.b,{className:"button is-info",to:"/"},"Volver a la portada")},v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movie:{}},e}return Object(i.a)(a,[{key:"_fetchMovie",value:function(e){var t=this,a=e.id;fetch("http://omdbapi.com/?apikey=".concat("4287ad07","&i=").concat(a)).then((function(e){return e.json()})).then((function(e){console.log({movie:e}),t.setState({movie:e})}))}},{key:"_goBack",value:function(){window.history.back()}},{key:"componentDidMount",value:function(){console.log("cargando"),console.log(this.props);var e=this.props.match.params.movieID;this._fetchMovie({id:e})}},{key:"render",value:function(){var e=this.state.movie,t=e.Title,a=e.Poster,n=e.Actors,c=e.Metascore,l=e.Plot;return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("h1",null,t),r.a.createElement("img",{src:a}),r.a.createElement("h3",null,n),r.a.createElement("span",null,c),r.a.createElement("p",null,l))}}]),a}(n.Component),d=function(e){var t=e.children;return r.a.createElement("h1",{className:"title"},t)},p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputMovie:""},e._handleChange=function(t){e.setState({inputMovie:t.target.value})},e._handleSubmit=function(t){t.preventDefault(),fetch("http://www.omdbapi.com/?apikey=".concat("4287ad07","&s=").concat(e.state.inputMovie)).then((function(e){return e.json()})).then((function(t){var a=t.Search,n=void 0===a?[]:a,r=t.totalResults,c=void 0===r?"0":r;console.log({Search:n,totalResults:c}),e.props.onResults(n)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",onChange:this._handleChange,placeholder:"Give me a movie name"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-info"},"Search"))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.poster,n=e.title,c=e.year;return r.a.createElement(m.b,{to:"/detail/".concat(t),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{alt:n,src:a}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},n),r.a.createElement("p",{className:"subtitle is-6"},c)))))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{className:"MovieList"},e.map((function(e){return r.a.createElement("div",{className:"MovieList-item",key:e.imdbID},r.a.createElement(f,{id:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster}))})))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={usedSearch:!1,results:[]},e._handleResults=function(t){e.setState({results:t,usedSearch:!0})},e}return Object(i.a)(a,[{key:"_renderResults",value:function(){return 0===this.state.results.length?r.a.createElement("p",null,"Sin resultados"):r.a.createElement(E,{movies:this.state.results})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null,"Search Movies"),r.a.createElement("div",{className:"SearchForm-wrapper"},r.a.createElement(p,{onResults:this._handleResults})),this.state.usedSearch?this._renderResults():r.a.createElement("small",null,"Use this form to seach a movie"))}}]),a}(n.Component),y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404!"),r.a.createElement("h2",null,"No existe la P\xe1gina"),r.a.createElement(h,null))},j=a(1),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:b}),r.a.createElement(j.a,{path:"/detail/:movieID",component:v}),r.a.createElement(j.a,{component:y})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c0d48182.chunk.js.map